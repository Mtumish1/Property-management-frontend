import React, { createContext, useContext, useReducer } from 'react';

const AgencyContext = createContext();

const agencyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_AGENCY':
      return { ...state, currentAgency: action.payload };
    case 'SET_AGENCIES':
      return { ...state, agencies: action.payload };
    case 'UPDATE_AGENCY':
      return {
        ...state,
        agencies: state.agencies.map(agency =>
          agency.id === action.payload.id ? action.payload : agency
        ),
        currentAgency: state.currentAgency?.id === action.payload.id 
          ? action.payload 
          : state.currentAgency,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const initialState = {
  currentAgency: null,
  agencies: [],
  loading: false,
  error: null,
};

export const AgencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(agencyReducer, initialState);

  const setCurrentAgency = (agency) => {
    dispatch({ type: 'SET_CURRENT_AGENCY', payload: agency });
  };

  const setAgencies = (agencies) => {
    dispatch({ type: 'SET_AGENCIES', payload: agencies });
  };

  const updateAgency = (agency) => {
    dispatch({ type: 'UPDATE_AGENCY', payload: agency });
  };

  const value = {
    ...state,
    setCurrentAgency,
    setAgencies,
    updateAgency,
  };

  return <AgencyContext.Provider value={value}>{children}</AgencyContext.Provider>;
};

export const useAgency = () => {
  const context = useContext(AgencyContext);
  if (!context) {
    throw new Error('useAgency must be used within an AgencyProvider');
  }
  return context;
};