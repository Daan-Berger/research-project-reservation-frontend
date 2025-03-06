# Reservation Payment Frontend

This project is a Vue.js application for managing online reservations for a mussel supper. Users can select the number of people, choose between mussels or steak, and select a payment method from various providers.

## Project Structure

- **src/**: Contains the source code for the application.
  - **assets/**: Contains static assets such as styles.
  - **components/**: Vue components for handling different parts of the application.
    - `PaymentForm.vue`: Component for payment details input.
    - `ReservationDetails.vue`: Component for displaying reservation details.
    - `PaymentMethodSelector.vue`: Component for selecting a payment method.
  - **views/**: Vue views that represent different pages.
    - `Home.vue`: Landing page of the application.
    - `Reservation.vue`: Page for handling the reservation process.
    - `Confirmation.vue`: Page for displaying confirmation after a successful reservation.
  - **services/**: Contains service files for API calls and payment handling.
    - `api.js`: Functions for making API calls to the backend.
    - `payment-service.js`: Functions for handling payment-related logic.
  - **store/**: Vuex store for state management.
    - `index.js`: Sets up the Vuex store.
    - **modules/**: Contains Vuex modules for managing specific state.
      - `reservation.js`: Module for reservation-related state.
      - `payment.js`: Module for payment-related state.
  - **router/**: Contains the router setup for navigation.
    - `index.js`: Defines routes for the application.
  - `App.vue`: Root component of the application.
  - `main.js`: Entry point of the Vue application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd reservation-payment-frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run serve
   ```

4. **Open your browser** and navigate to `http://localhost:8080` to view the application.

## Usage

- Users can start by visiting the home page, where they can navigate to the reservation page.
- On the reservation page, users can select the number of people, choose a dish, and select a payment method.
- After submitting the reservation, users will be redirected to a confirmation page displaying the reservation details.

## Payment Providers

The application supports the following payment providers:
- Mollie
- Adyen
- Stripe
- Authorize.NET

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.