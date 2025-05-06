import React from 'react';
import { Link } from 'react-router-dom';
import OnThisPage from '../components/common/OnThisPage';
import CodeBlock from '../components/common/CodeBlock';
import GoogleFormHandler from '../components/common/GoogleFormHandler.jsx';
import './GettingStarted.css';

const GettingStarted: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'getting-started-steps',
      title: 'Getting Started Steps',
    },
    {
      id: 'authentication',
      title: 'Authentication',
    },
    {
      id: 'environments',
      title: 'Environments',
    },
    {
      id: 'api-versions',
      title: 'API Versions',
    },
    {
      id: 'first-request',
      title: 'First Request',
      subsections: [
        {
          id: 'request-parameters',
          title: 'Request Parameters',
        },
        {
          id: 'request-example',
          title: 'Request Example',
        },
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
      id: 'testing-resources',
      title: 'Testing Resources',
    },
    {
      id: 'next-steps',
      title: 'Next Steps',
    },

  ];

  return (
    <>
      <div className="content-header">
        <h1>Getting Started with ARN SSO API</h1>
        <p>
          The Alliance Reservation Network (ARN) SSO API provides programmatic access to user authentication and management services.
          This guide will help you get started with integrating the SSO API into your application.
        </p>
      </div>

      <OnThisPage sections={sections} />

      <div className="section" id="introduction">
        <h2>Introduction</h2>
        <p>
          The Alliance Reservation Network (ARN) SSO API provides programmatic access to user authentication and management services.
          This guide will help you get started with integrating the SSO API into your application.
        </p>
      </div>

      <div className="section" id="getting-started-steps">
        <h2>Getting Started Steps</h2>
        <p>
          To begin testing our API, follow these steps:
        </p>
        <ol>
          <li>Fill out the registration form below to request developer access</li>
          <li>Review the API documentation on this site to understand the available endpoints</li>
          <li>Request test credentials for integration testing from your Account Manager</li>
        </ol>

        <div className="registration-form">
          <h3>Developer Registration Form</h3>
          <p>Please complete this form to request developer access. One of our Account Managers will contact you.</p>

          <GoogleFormHandler
            className="cert-form"
            endpoint="https://script.google.com/macros/s/AKfycby_f1ecVR1EPM8nc4mSeRc2bGbVS9zz35dRm5lfSMt3udT7z7IiV-MsTCCi00e_1ctaUg/exec"
            successMessage="Thank you for your registration! We will contact you shortly."
            errorMessage="There was an error submitting the form. Please try again or contact support."
          />
        </div>
      </div>

      <div className="section" id="authentication">
        <h2>Authentication</h2>
        <p>
          All SSO API requests require authentication. You'll need to include your SSO API credentials in the request headers
          and use Basic Authentication with your API username and password.
        </p>

        <h3>Required Headers</h3>
        <div className="parameter-table-container">
          <table className="parameter-table header-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Required</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Site-Id</code></td>
                <td>Yes</td>
                <td></td>
              </tr>
              <tr>
                <td><code>API-ClientUsername</code></td>
                <td>Yes</td>
                <td></td>
              </tr>
              <tr>
                <td><code>API-ClientPassword</code></td>
                <td>Yes</td>
                <td></td>
              </tr>
              <tr>
                <td><code>Content-Type</code></td>
                <td>Yes</td>
                <td><code>application/json</code></td>
              </tr>
              <tr>
                <td><code>Accept-version</code></td>
                <td>No</td>
                <td><code>2.1</code></td>
              </tr>
              <tr>
                <td><code>Authorization</code></td>
                <td>Yes</td>
                <td><code>Basic (Base64 encoded username:password)</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Basic Authentication</h3>
        <p>
          In addition to the headers above, you'll need to use Basic Authentication with your API username and password.
          The username and password are the same as the <code>API-ClientUsername</code> and <code>API-ClientPassword</code> headers.
        </p>
      </div>

      <div className="section" id="environments">
        <h2>Environments</h2>
        <p>
          The SSO API is available in both test and production environments. We recommend using the test environment
          for development and testing before moving to production.
        </p>

        <h3>Test Environment</h3>
        <p>
          The SSO API test environment is available at <code>https://sso.travsrv.com</code>. Use the test credentials
          provided by your Account Manager to access the test environment.
        </p>

        <h3>Production Environment</h3>
        <p>
          The SSO API production environment is also available at <code>https://sso.travsrv.com</code>. You'll need to
          use your production credentials to access the production environment.
        </p>

        <h3>Differences Between Environments</h3>
        <p>
          The test environment has the following limitations:
        </p>
        <ul>
          <li>Test member profiles only (not real users)</li>
          <li>No impact on production data</li>
          <li>Rate limits are more relaxed</li>
          <li>Tokens have the same expiration rules (5 minutes)</li>
        </ul>
      </div>

      <div className="section" id="api-versions">
        <h2>SSO API Versions</h2>
        <p>
          The SSO API currently has a single version. No version header is required for API requests.
        </p>

        <h3>Response Formats</h3>
        <p>
          The SSO API supports both JSON and XML response formats. You can specify the response format using the <code>_type</code> parameter in your requests.
        </p>
        <CodeBlock
          code="https://sso.travsrv.com/api/member?siteid=64&token=ARNUSER-publicadmin&_type=json"
          language="http"
        />

        <h3>Token Expiration</h3>
        <p>
          Both admin bearer tokens and member tokens are valid for five minutes after they are issued. Make sure to handle token expiration in your application.
        </p>
      </div>

      <div className="section" id="first-request">
        <h2>First Request</h2>
        <p>
          Once you receive your test credentials from your Account Manager, you can make your first request to the API.
          Let's look at a simple request to the Retrieve Admin Bearer Token endpoint as an example.
        </p>

        <h3 id="request-parameters">Request Parameters</h3>
        <p>The following parameters should be included in the query string:</p>
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>siteid</td>
              <td>integer</td>
              <td>Yes</td>
              <td>Site id to manage SSO for</td>
            </tr>
            <tr>
              <td>token</td>
              <td>string</td>
              <td>Yes</td>
              <td>Slug identifying profile to retrieve bearer token for</td>
            </tr>
            <tr>
              <td>_type</td>
              <td>string</td>
              <td>No</td>
              <td>Content return type: xml or json</td>
            </tr>
          </tbody>
        </table>

        <h3 id="request-example">Request Example</h3>
        <CodeBlock
          code="https://sso.travsrv.com/api/member?siteid=64&token=ARNUSER-publicadmin&_type=json"
          language="http"
          title="HTTP Request"
        />

        <h3 id="response-example">Response Example</h3>
        <p>
          The response is a JSON object containing the admin bearer token. This token can be used to authenticate requests to create or update member profiles.
        </p>
        <CodeBlock
          code={`{
  "MemberToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "Success": true
}`}
          language="json"
          title="JSON Response"
        />

        <h3 id="response-parameters">Response Parameters</h3>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MemberToken</td>
              <td>String</td>
              <td>Bearer token for authenticating future API requests. Valid for five minutes.</td>
            </tr>
            <tr>
              <td>Success</td>
              <td>Boolean</td>
              <td>Indicates if the request was successful</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="section" id="testing-resources">
        <h2>Testing Resources</h2>
        <p>
          To help you test your integration with the SSO API, we provide several resources that you can use during development:
        </p>

        <h3>Test Credentials</h3>
        <p>
          After registering for API access, you'll receive test credentials to use with the test environment.
          These credentials include:
        </p>
        <ul>
          <li>API username and password</li>
          <li>Site ID</li>
          <li>Admin profile token</li>
        </ul>
        <p>
          These credentials provide access to the full functionality of the API in the test environment.
        </p>


        <h3>Test Data</h3>
        <p>
          In the test environment, you can create and update test member profiles without affecting production data.
        </p>
        <p>
          The test environment allows you to simulate the complete SSO flow, including retrieving admin bearer tokens,
          creating/updating member profiles, and deep-linking users into the booking engine.
        </p>

        <h3>Postman Collection</h3>
        <p>
          We provide a Postman collection that includes pre-configured requests for all API endpoints.
          This collection makes it easy to test the API and understand the request/response format.
        </p>
        <p>
          Visit the <Link to="/resources">Resources</Link> page to access the Postman collection and other helpful tools.
        </p>
      </div>

      <div className="section" id="next-steps">
        <h2>Next Steps</h2>
        <p>
          Now that you've made your first request, you can explore the other endpoints available in the API.
          Here are some suggestions for what to try next:
        </p>
        <ul>
          <li>
            Try the <Link to="/endpoints/sso/admin-token">Retrieve Admin Bearer Token</Link> endpoint with different query parameters
          </li>
          <li>
            Learn about the <Link to="/endpoints/sso/member-upsert">Create/Update Member</Link> endpoint to manage member profiles
          </li>
          <li>
            Explore the <Link to="/endpoints/sso/deep-link">Deep-link to Hotel Search</Link> endpoint to authenticate users
          </li>
          <li>
            Check out the <Link to="/technical-reference/member-data-structure">Member Data Structure</Link> documentation to understand the member data format
          </li>
        </ul>
        <p>
          Remember to use the test credentials provided by your Account Manager while you're developing and testing your integration.
          When you're ready to go live, you'll need to request production credentials through the certification process.
        </p>
      </div>


    </>
  );
};

export default GettingStarted;
