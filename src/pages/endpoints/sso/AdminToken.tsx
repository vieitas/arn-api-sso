import React from 'react';
import EndpointPage from '../../../components/endpoints/EndpointPage';
import { ssoEndpoints } from '../../../data/endpoints/sso';

const AdminToken: React.FC = () => {
  const endpoint = ssoEndpoints.find(e => e.id === 'admin-token');
  
  if (!endpoint) {
    return <div>Endpoint not found</div>;
  }
  
  return <EndpointPage endpoint={endpoint} />;
};

export default AdminToken;
