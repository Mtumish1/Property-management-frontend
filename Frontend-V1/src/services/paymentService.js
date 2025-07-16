import api from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const paymentService = {
  getPayments: async (params = {}) => {
    try {
      const response = await api.get(API_ENDPOINTS.PAYMENTS, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch payments');
    }
  },

  getPayment: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.PAYMENTS}${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch payment');
    }
  },

  initiateSTKPush: async (paymentData) => {
    try {
      const response = await api.post(`${API_ENDPOINTS.PAYMENTS}stk-push/`, paymentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to initiate payment');
    }
  },

  getTenantPayments: async (tenantId, params = {}) => {
    try {
      const response = await api.get(`/tenants/${tenantId}/payments/`, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch tenant payments');
    }
  },

  getLandlordStatements: async (landlordId, params = {}) => {
    try {
      const response = await api.get(`/landlords/${landlordId}/statements/`, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch statements');
    }
  },
};