import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { USER_ROLES } from '../../utils/constants';

const RoleBasedMenu = ({ children, roles = [], fallback = null }) => {
  const { user } = useAuth();

  if (!user || !roles.includes(user.role)) {
    return fallback;
  }

  return children;
};

export default RoleBasedMenu;