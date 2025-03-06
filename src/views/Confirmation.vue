<template>
  <div class="confirmation">
    <h1>Reservatie bevestigd!</h1>
    <p>Bedankt voor uw reservatie!</p>
    <!-- <p>You have reserved for {{ numberOfPeople }} people.</p>
    <p>Your selected dish: {{ selectedDish }}</p>
    <p>Payment Method: {{ paymentMethod }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    numberOfPeople: {
      type: Number,
      required: true
    },
    selectedDish: {
      type: String,
      required: true
    },
    paymentMethod: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.confirmation {
  text-align: center;
  margin-top: 20px;
}
</style>