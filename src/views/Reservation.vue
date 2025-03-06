<template>
  <div class="reservation">
    <h1>Plaats uw reservatie</h1>
    
    <!-- Reservation Details Section -->
    <div class="reservation-section">
      <h2>Gegevens</h2>
      <div class="details-form">
        <label>Voornaam</label>
        <input type="text" v-model="firstName" />
        <label>Achternaam</label>
        <input type="text" v-model="lastName" />
        <label>Email</label>
        <input type="email" v-model="email" />
        <label>Telefoonnummer</label>
        <input type="tel" v-model="phone" />
      </div>
      <div class="form-group">
        <label for="people">Aantal personen:</label>
        <input 
          type="number" 
          id="people" 
          v-model.number="numberOfPeople" 
          min="1" 
          max="10"
          @change="validateDishes"
        >
      </div>
    </div>

    <!-- Dish Selection Section -->
    <div class="reservation-section">
      <h2>Kies uw gerecht</h2>
      <p>Aantal mosselen: {{ musselCount }} | Aantal steaks: {{ steakCount }}</p>
      
      <div class="dish-selectors">
        <div class="dish-control">
          <label>Mosselen:</label>
          <div class="counter-controls">
            <button @click="decreaseMussels" :disabled="musselCount <= 0">-</button>
            <span>{{ musselCount }}</span>
            <button @click="increaseMussels" :disabled="totalDishes >= numberOfPeople">+</button>
          </div>
        </div>
        
        <div class="dish-control">
          <label>Steak:</label>
          <div class="counter-controls">
            <button @click="decreaseSteak" :disabled="steakCount <= 0">-</button>
            <span>{{ steakCount }}</span>
            <button @click="increaseSteak" :disabled="totalDishes >= numberOfPeople">+</button>
          </div>
        </div>
      </div>
      
      <div v-if="dishValidationError" class="error-message">
        {{ dishValidationError }}
      </div>
    </div>

    <!-- Payment Method Selection -->
    <div class="reservation-section">
      <h2>Kies uw betaalplatform</h2>
      <div class="payment-methods">
        <div 
          v-for="method in paymentMethods" 
          :key="method.id"
          class="payment-method"
          :class="{ selected: selectedPaymentMethod === method.id }"
          @click="selectPaymentMethod(method.id)"
        >
          <img :src="method.icon" :alt="method.name" class="payment-icon" />
          <span>{{ method.name }}</span>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="action-buttons">
      <button 
        class="submit-button" 
        :disabled="!isFormValid" 
        @click="submitReservation"
      >
        Bevestig reservatie
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservation',
  data() {
    return {
      // Add these missing form fields
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      
      // Your existing data properties
      numberOfPeople: 1,
      musselCount: 1,
      steakCount: 0,
      dishValidationError: '',
      selectedPaymentMethod: null,
      paymentMethods: [
        { 
          id: 'mollie', 
          name: 'Mollie',
          icon: require('@/assets/mollie-icon.png')
        },
        { 
          id: 'adyen', 
          name: 'Adyen',
          icon: require('@/assets/adyen-icon.png')
        },
        { 
          id: 'stripe', 
          name: 'Stripe',
          icon: require('@/assets/stripe-icon.png')
        },
        { 
          id: 'authorize', 
          name: 'Authorize.NET',
          icon: require('@/assets/authorize-icon.png')
        }
      ]
    };
  },
  computed: {
    totalDishes() {
      return this.musselCount + this.steakCount;
    },
    isFormValid() {
      return (
        // Personal info validation
        this.firstName && this.firstName.trim() !== '' &&
        this.lastName && this.lastName.trim() !== '' &&
        this.validateEmail(this.email) &&
        this.phone && this.phone.trim() !== '' &&
        
        // Existing validations
        this.numberOfPeople > 0 && 
        this.totalDishes === this.numberOfPeople && 
        this.selectedPaymentMethod !== null
      );
    }
  },
  methods: {
    increaseMussels() {
      if (this.totalDishes < this.numberOfPeople) {
        this.musselCount++;
        this.validateDishes();
      }
    },
    decreaseMussels() {
      if (this.musselCount > 0) {
        this.musselCount--;
        this.validateDishes();
      }
    },
    increaseSteak() {
      if (this.totalDishes < this.numberOfPeople) {
        this.steakCount++;
        this.validateDishes();
      }
    },
    decreaseSteak() {
      if (this.steakCount > 0) {
        this.steakCount--;
        this.validateDishes();
      }
    },
    validateDishes() {
      if (this.totalDishes > this.numberOfPeople) {
        // Adjust dish count to match people count
        const excess = this.totalDishes - this.numberOfPeople;
        if (this.steakCount >= excess) {
          this.steakCount -= excess;
        } else {
          this.steakCount = 0;
          this.musselCount -= (excess - this.steakCount);
        }
        this.dishValidationError = "Aantal gerechten kan niet meer zijn dan aantal personen.";
      } else if (this.totalDishes < this.numberOfPeople && this.numberOfPeople > 0) {
        this.dishValidationError = `Gelieve ${this.numberOfPeople - this.totalDishes} meer gerechten te kiezen.`;
      } else {
        this.dishValidationError = '';
      }
    },
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && re.test(String(email).toLowerCase());
  },
    submitReservation() {
      if (!this.isFormValid) return;
      
      const reservationData = {
        // Personal details
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        
        // Existing reservation details
        numberOfPeople: this.numberOfPeople,
        dishes: {
          mussels: this.musselCount,
          steak: this.steakCount
        },
        paymentMethod: this.selectedPaymentMethod
      };
      
      // Here you would call your backend API
      console.log('Submitting reservation:', reservationData);
      
      // In a real application, you'd make an API call like this:
      // axios.post('https://your-backend-url.com/api/reservations', reservationData)
      //   .then(response => {
      //     // Handle success - maybe redirect to payment provider
      //     // The backend would likely return a URL to redirect to for payment
      //     window.location.href = response.data.paymentUrl;
      //   })
      //   .catch(error => {
      //     // Handle error
      //     console.error('Error submitting reservation:', error);
      //     this.errorMessage = 'Er is een fout opgetreden bij het plaatsen van uw reservatie.';
      //   });
      
      // For now, just navigate to the confirmation page
      this.$router.push({
        name: 'Confirmation',
        params: { 
          reservation: JSON.stringify(reservationData)
        }
      });
    }
  },
  created() {
    // Initialize with 1 mussel dish for the initial person
    this.musselCount = 1;
  }
};
</script>

<style scoped>
.reservation {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.reservation-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.details-form {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px 15px;
  align-items: center;
  margin-bottom: 20px;
}

.details-form label {
  display: inline-block;
  text-align: left;
  padding-right: 10px;
  font-weight: bold;
}

.details-form input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: fit-content;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: inline-block;
  margin-bottom: 5px;
  font-weight: bold;
  padding-right: 35px;
}

input[type="number"] {
  width: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.dish-selectors {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.dish-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
}

.counter-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.counter-controls button {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #4285f4;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.counter-controls button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.counter-controls span {
  margin: 0 15px;
  font-size: 18px;
  font-weight: bold;
}

.error-message {
  color: #d32f2f;
  margin-top: 10px;
}

.payment-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

.payment-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-method.selected {
  border-color: #4285f4;
  background-color: #e8f0fe;
}

.payment-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.submit-button {
  padding: 12px 25px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2a75f3;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>