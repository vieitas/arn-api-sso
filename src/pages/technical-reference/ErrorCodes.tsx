import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import Alert from '../../components/common/Alert';
import TechRefCodeBlock from '../../components/technical-reference/TechRefCodeBlock';
import './ErrorCodes.css';
import './error-codes-table.css';

const ErrorCodes: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'http-status-codes',
      title: 'HTTP Status Codes',
    },
    {
      id: 'api-specific-error-codes',
      title: 'API-Specific Error Codes',
    },
    {
      id: 'error-response-format',
      title: 'Error Response Format',
    },
    {
      id: 'handling-errors',
      title: 'Handling Errors',
    },
  ];
  const httpErrorCodes = [
    {
      code: '400',
      message: 'Bad Request',
      description: 'Your request is invalid.'
    },
    {
      code: '401',
      message: 'Unauthorized',
      description: 'Your API credentials are wrong.'
    },
    {
      code: '403',
      message: 'Forbidden',
      description: 'You are not allowed in there.'
    },
    {
      code: '404',
      message: 'Not Found',
      description: 'The specified endpoint or resource could not be found.'
    },
    {
      code: '405',
      message: 'Method Not Allowed',
      description: 'You tried to access an endpoint with an invalid method.'
    },
    {
      code: '406',
      message: 'Not Acceptable',
      description: 'You requested a format that isn\'t json or xml.'
    },
    {
      code: '410',
      message: 'Gone',
      description: 'The resource requested has been removed from our servers.'
    },
    {
      code: '429',
      message: 'Too Many Requests',
      description: 'You are sending requests too often! Slow down!'
    },
    {
      code: '500',
      message: 'Internal Server Error',
      description: 'We had a problem with our server. Try again later.'
    },
    {
      code: '503',
      message: 'Service Unavailable',
      description: 'We\'re temporarily offline for maintenance. Please try again later.'
    }
  ];

  // No specific error codes for SSO API

  return (
    <>
      <div className="content-header">
        <h1>SSO API Error Codes</h1>
        <p>Reference information about error codes returned by the SSO API</p>
      </div>

      <OnThisPage sections={sections} />

      <div id="introduction" className="section">
        <h2>Introduction</h2>
        <p>
          The SSO API uses standard HTTP status codes to indicate the success or failure of an API request.
          In addition to the standard HTTP status codes, the SSO API also returns specific error codes for more detailed information.
        </p>
        <p>
          Understanding these error codes is important for effectively handling errors in your application
          and providing a good user experience.
        </p>
        <Alert type="info" title="Debugging">
          <p>
            When developing your integration, it's helpful to log all error responses for debugging purposes.
            This will make it easier to identify and fix issues.
          </p>
        </Alert>
      </div>

      <div id="http-status-codes" className="section">
        <h2>HTTP Status Codes</h2>
        <p>
          The SSO API uses the following HTTP status codes:
        </p>
        <table className="error-codes-table">
          <thead>
            <tr>
              <th>HTTP Error Code</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {httpErrorCodes.map((error, index) => (
              <tr key={index}>
                <td><code>{error.code}</code> - {error.message}</td>
                <td>{error.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="api-specific-error-codes" className="section">
        <h2>SSO API Error Responses</h2>
        <p>
          The SSO API uses standard HTTP status codes to indicate the success or failure of API requests.
          The API returns a clear success indicator in the response body.
        </p>
        <Alert type="info" title="Success Indicator">
          <p>
            The SSO API includes a "Success" field in the response that indicates whether the request was successful.
            For example: <code>{`{"MemberToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", "Success": true}`}</code>
          </p>
        </Alert>
      </div>

      <div id="error-response-format" className="section">
        <h2>Error Response Format</h2>
        <p>
          When an error occurs, the SSO API returns a response with an appropriate HTTP status code and may include additional error details in the body.
        </p>
        <TechRefCodeBlock
          code={`{
  "Success": false,
  "Message": "Invalid request parameters"
}`}
          language="json"
          title="Error Response Example"
        />
        <p>
          The error response typically contains the following fields:
        </p>
        <ul>
          <li><code>Success</code>: A boolean value indicating whether the request was successful (false for errors)</li>
          <li><code>Message</code>: A description of the error</li>
        </ul>
      </div>

      <div id="handling-errors" className="section">
        <h2>Handling Errors</h2>
        <p>
          When handling errors in your application, you should:
        </p>
        <ol>
          <li>Check the HTTP status code to determine the general category of the error</li>
          <li>Check the Success field and Message in the response body</li>
          <li>Display a user-friendly error message based on the HTTP status code and Message</li>
          <li>Log the error details for debugging purposes</li>
        </ol>

        <h3>Example Error Handling</h3>
        <TechRefCodeBlock
          code={`// Example error handling in JavaScript
fetch('https://sso.travsrv.com/api/member?siteid=64&token=ARNUSER-publicadmin&_type=json')
  .then(response => {
    if (!response.ok) {
      // Handle HTTP error status codes
      if (response.status === 401) {
        throw new Error('Authentication failed. Please check your API credentials.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please slow down your requests.');
      } else {
        return response.json().then(errorData => {
          throw new Error(errorData.Message || 'Unknown error');
        });
      }
    }
    return response.json();
  })
  .then(data => {
    // Handle successful response
    console.log(data);
  })
  .catch(error => {
    // Handle error
    console.error('API Error:', error.message);
    // Display user-friendly error message
    alert('An error occurred while retrieving the admin bearer token. Please try again later.');
  });`}
          language="javascript"
          title="Error Handling Example"
        />

        <h3>Common Error Scenarios</h3>
        <p>
          Here are some common error scenarios you may encounter and how to handle them:
        </p>
        <ul>
          <li><strong>Authentication Errors (401)</strong>: Verify that you're using the correct API credentials</li>
          <li><strong>Rate Limiting (429)</strong>: Reduce the frequency of your API requests</li>
          <li><strong>Invalid Parameters (400)</strong>: Check that all required parameters are included and formatted correctly</li>
          <li><strong>Token Expiration</strong>: Remember that tokens are valid for 5 minutes</li>
          <li><strong>Server Errors (500, 503)</strong>: Wait and retry the request after a short delay</li>
        </ul>

        <Alert type="info" title="Testing Error Handling">
          <p>
            You can test your error handling logic by using invalid parameters or expired tokens in the test environment.
          </p>
        </Alert>
      </div>
    </>
  );
};

export default ErrorCodes;
