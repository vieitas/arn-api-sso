import React from 'react';
import { Link } from 'react-router-dom';
import EndpointPage from '../../../components/endpoints/EndpointPage';
import { ssoEndpoints } from '../../../data/endpoints/sso';
import { OnThisPageSection } from '../../../components/common/OnThisPage';

const MemberUpsert: React.FC = () => {
  const endpoint = ssoEndpoints.find(e => e.id === 'member-upsert');

  if (!endpoint) {
    return <div>Endpoint not found</div>;
  }

  // Custom sections to include the Member Data Structure reference
  const sections: OnThisPageSection[] = [
    {
      id: 'endpoint',
      title: 'Endpoint',
    },
    {
      id: 'headers',
      title: 'Headers',
    },
    {
      id: 'request',
      title: 'Request',
      subsections: [
        {
          id: 'request-parameters',
          title: 'Request Parameters',
        },
        {
          id: 'request-example',
          title: 'Request Example',
        },
      ],
    },
    {
      id: 'response',
      title: 'Response',
      subsections: [
        {
          id: 'response-example',
          title: 'Response Example',
        },
        {
          id: 'response-parameters',
          title: 'Response Parameters',
        },
      ],
    },
    {
      id: 'member-data-reference',
      title: 'Member Data Structure',
    },
    {
      id: 'differences-production',
      title: 'Test x Production',
    },
    {
      id: 'code-examples',
      title: 'Code Examples',
    },
    {
      id: 'next-steps',
      title: 'Next Steps',
    },
  ];

  return (
    <EndpointPage endpoint={endpoint} sections={sections}>
      <div id="member-data-reference" className="section">
        <h2>Member Data Structure</h2>
        <p>
          This endpoint requires a JSON object containing member profile data. For detailed information about
          the member data structure, valid parameters, and field descriptions (including what ReferralId is),
          please refer to the <Link to="/technical-reference/member-data-structure">Member Data Structure</Link> documentation.
        </p>
        <p>
          The Member Data Structure documentation provides:
        </p>
        <ul>
          <li>Complete list of all available fields and their data types</li>
          <li>Detailed descriptions of each field, including ReferralId</li>
          <li>Information about required vs optional fields</li>
          <li>Example JSON structure for member profiles</li>
        </ul>
      </div>
    </EndpointPage>
  );
};

export default MemberUpsert;
