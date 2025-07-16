import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Users, 
  CreditCard, 
  FileText, 
  Settings,
  UserCheck,
  DollarSign
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { USER_ROLES, ROLE_PERMISSIONS } from '../../utils/constants';

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: Home, 
      path: '/dashboard', 
      permission: 'dashboard' 
    },
    { 
      name: 'Properties', 
      icon: Building, 
      path: '/properties', 
      permission: 'properties' 
    },
    { 
      name: 'Tenants', 
      icon: Users, 
      path: '/tenants', 
      permission: 'tenants' 
    },
    { 
      name: 'Payments', 
      icon: CreditCard, 
      path: '/payments', 
      permission: 'payments' 
    },
    { 
      name: 'Reports', 
      icon: FileText, 
      path: '/reports', 
      permission: 'reports' 
    },
    { 
      name: 'Landlord Portal', 
      icon: DollarSign, 
      path: '/landlord-portal', 
      permission: 'landlord_portal' 
    },
    { 
      name: 'Tenant Portal', 
      icon: UserCheck, 
      path: '/tenant-portal', 
      permission: 'tenant_portal' 
    },
  ];

  const hasPermission = (permission) => {
    const userPermissions = ROLE_PERMISSIONS[user?.role] || [];
    return userPermissions.includes('all') || userPermissions.includes(permission);
  };

  const filteredMenuItems = menuItems.filter(item => hasPermission(item.permission));

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <Building className="w-8 h-8 mr-3" />
        <h1 className="text-xl font-bold">PropertyHub</h1>
      </div>

      <nav className="space-y-2">
        {filteredMenuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;