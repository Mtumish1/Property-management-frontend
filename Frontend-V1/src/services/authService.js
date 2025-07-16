import api, { setTokens, clearTokens } from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
      const { access, refresh, user } = response.data;
      
      setTokens(access, refresh);
      
      return { user, access, refresh };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post(API_ENDPOINTS.REGISTER, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  logout: async () => {
    try {
      clearTokens();
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get(API_ENDPOINTS.PROFILE);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.patch(API_ENDPOINTS.PROFILE, profileData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  },
};