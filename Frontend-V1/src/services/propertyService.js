import api from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const propertyService = {
  getProperties: async (params = {}) => {
    try {
      const response = await api.get(API_ENDPOINTS.PROPERTIES, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch properties');
    }
  },

  getProperty: async (id) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.PROPERTIES}${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch property');
    }
  },

  createProperty: async (propertyData) => {
    try {
      const response = await api.post(API_ENDPOINTS.PROPERTIES, propertyData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create property');
    }
  },

  updateProperty: async (id, propertyData) => {
    try {
      const response = await api.patch(`${API_ENDPOINTS.PROPERTIES}${id}/`, propertyData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update property');
    }
  },

  deleteProperty: async (id) => {
    try {
      await api.delete(`${API_ENDPOINTS.PROPERTIES}${id}/`);
      return true;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete property');
    }
  },

  getUnits: async (propertyId, params = {}) => {
    try {
      const response = await api.get(`${API_ENDPOINTS.PROPERTIES}${propertyId}/units/`, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch units');
    }
  },

  createUnit: async (propertyId, unitData) => {
    try {
      const response = await api.post(`${API_ENDPOINTS.PROPERTIES}${propertyId}/units/`, unitData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create unit');
    }
  },
};