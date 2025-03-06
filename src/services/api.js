import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const submitReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/reservations`, reservationData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting reservation: ' + error.message);
    }
};

export const processPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payments`, paymentData);
        return response.data;
    } catch (error) {
        throw new Error('Error processing payment: ' + error.message);
    }
};