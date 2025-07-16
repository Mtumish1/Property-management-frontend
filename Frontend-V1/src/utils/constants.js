export const USER_ROLES = {
  SUPERADMIN: 'superadmin',
  AGENCY_ADMIN: 'agency_admin',
  MANAGER: 'manager',
  FIELD_STAFF: 'field_staff',
  LANDLORD: 'landlord',
  TENANT: 'tenant',
};

export const ROLE_PERMISSIONS = {
  [USER_ROLES.SUPERADMIN]: ['all'],
  [USER_ROLES.AGENCY_ADMIN]: ['properties', 'tenants', 'payments', 'reports', 'dashboard'],
  [USER_ROLES.MANAGER]: ['properties', 'tenants', 'payments', 'dashboard'],
  [USER_ROLES.FIELD_STAFF]: ['properties', 'tenants', 'dashboard'],
  [USER_ROLES.LANDLORD]: ['landlord_portal', 'dashboard'],
  [USER_ROLES.TENANT]: ['tenant_portal', 'dashboard'],
};

export const API_ENDPOINTS = {
  LOGIN: '/auth/login/',
  REFRESH: '/auth/refresh/',
  REGISTER: '/auth/register/',
  PROFILE: '/auth/profile/',
  PROPERTIES: '/properties/',
  UNITS: '/units/',
  TENANTS: '/tenants/',
  PAYMENTS: '/payments/',
  REPORTS: '/reports/',
  DASHBOARD_STATS: '/dashboard/stats/',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
};