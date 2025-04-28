import React from 'react';
import { Link } from 'react-router-dom';
import OnThisPage from '../components/common/OnThisPage';
import Alert from '../components/common/Alert';

const Home: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'authentication-overview',
      title: 'Authentication',
    },
    {
      id: 'standard-sso-model',
      title: 'Standard SSO Model',
    },
    {
      id: 'environments',
      title: 'Environments',
    },
    {
      id: 'available-endpoints',
      title: 'Available Endpoints',
    },
    {
      id: 'important-notes',
      title: 'Important Notes',
    },
  ];

  return (
    <>
      <div className="content-header">
        <h1>ARN SSO API Documentation</h1>
        <p>Welcome to the Alliance Reservation Network SSO API documentation</p>
      </div>


      <div id="introduction" className="section">
      <OnThisPage sections={sections} />
        <h2>Introduction</h2>
        <p>
          Welcome to the Alliance Reservation Network SSO API documentation. This API is specifically designed for
          managing and authenticating your users with Alliance Reservation Network. You will be given separate credentials for this
          API in addition to the credentials you received for becoming an affiliate.
        </p>
        <p>
          Use this documentation to learn how to integrate with our SSO API and leverage its capabilities in your applications.
        </p>

        <Alert type="info" title="Getting Started">
          <p>
            If you're new to the ARN SSO API, we recommend starting with the
            <Link to="/getting-started"> Getting Started</Link> guide.
          </p>
        </Alert>

        <Alert type="info" title="API Resources">
          <p>
            Check out our <Link to="/resources">Resources</Link> page for Postman collections and other tools to help you integrate with the ARN SSO API.
          </p>
        </Alert>
      </div>

      <div id="authentication-overview" className="section">
        <h2>Authentication</h2>
        <p>
          All SSO API requests require authentication. You'll need to include your API credentials in the request headers
          and use Basic Authentication with your API username and password.
        </p>

        <h3>Required Headers</h3>
        <table>
          <thead>
            <tr>
              <th>Header</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Site-Id</code></td>
              <td>Your site ID</td>
            </tr>
            <tr>
              <td><code>API-ClientUsername</code></td>
              <td>Your API username</td>
            </tr>
            <tr>
              <td><code>API-ClientPassword</code></td>
              <td>Your API password</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="standard-sso-model" className="section">
        <h2>Standard SSO Model</h2>
        <p>
          The standard SSO model follows a three-step process:
        </p>
        <ol>
          <li>Retrieve Admin Bearer Token.</li>
          <li>URL decode the Admin Bearer Token and use it to authorize a member upsert. Successful response contains a Member Token.</li>
          <li>Use the returned Member Token to deep-link into your hotel platform.</li>
        </ol>
        <p>
          This model allows you to authenticate users and provide them with seamless access to your hotel platform.
        </p>
      </div>

      <div id="environments" className="section">
        <h2>Environments</h2>
        <p>
          The SSO API is available in both test and production environments. We recommend using the test environment
          for development and testing before moving to production.
        </p>

        <h3>Test Environment</h3>
        <p>
          The SSO API test environment is available at <code>https://sso.travsrv.com</code>. Use the test credentials
          provided in the Authentication section to access the test environment.
        </p>

        <h3>Production Environment</h3>
        <p>
          The SSO API production environment is also available at <code>https://sso.travsrv.com</code>. You'll need to
          use your production credentials to access the production environment.
        </p>
      </div>

      <div id="available-endpoints" className="section">
        <h2>Available SSO API Endpoints</h2>

        <h3>SSO API Endpoints</h3>
        <ul>
          <li>
            <Link to="/endpoints/sso/admin-token">
              <span className="http-method-get">GET</span> Retrieve Admin Bearer Token
            </Link>
            <p>Get an admin bearer token for authenticating future API requests</p>
          </li>
          <li>
            <Link to="/endpoints/sso/member-upsert">
              <span className="http-method-post">POST</span> Create/Update Member
            </Link>
            <p>Create or update a member profile using an admin bearer token</p>
          </li>
          <li>
            <Link to="/endpoints/sso/deep-link">
              <span className="http-method-get">GET</span> Deep-link to Hotel Search
            </Link>
            <p>Deep-link an authenticated user into your booking engine</p>
          </li>
        </ul>
      </div>

      <div id="important-notes" className="section">
        <h2>Important Notes</h2>
        <ul>
          <li>Admin bearer tokens are valid for five minutes</li>
          <li>Member tokens for deep-linking are valid for five minutes</li>
          <li>API responses are available in both JSON and XML formats</li>
          <li>Always test your integration in the test environment before moving to production</li>
          <li>API credentials should be kept secure and not exposed in client-side code</li>
          <li>The unique identifier per profile is 'ReferralId'</li>
          <li>This documentation covers only the SSO API - other ARN APIs are documented separately</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
