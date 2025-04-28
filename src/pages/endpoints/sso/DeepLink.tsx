import React from 'react';
import EndpointPage from '../../../components/endpoints/EndpointPage';
import { ssoEndpoints } from '../../../data/endpoints/sso';

const DeepLink: React.FC = () => {
  const endpoint = ssoEndpoints.find(e => e.id === 'deep-link');
  
  if (!endpoint) {
    return <div>Endpoint not found</div>;
  }
  
  return <EndpointPage endpoint={endpoint} />;
};

export default DeepLink;
