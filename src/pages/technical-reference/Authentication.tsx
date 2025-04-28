import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import TechRefCodeBlock from '../../components/technical-reference/TechRefCodeBlock';
import './error-codes-table.css';

const Authentication: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'basic-authentication',
      title: 'Basic Authentication',
    },
    {
      id: 'bearer-token',
      title: 'Bearer Token',
    },
    {
      id: 'standard-sso-model',
      title: 'Standard SSO Model',
    }
  ];

  return (
    <>
      <div className="content-header">
        <h1>Authentication</h1>
        <p>
          Authentication methods used in the SSO API
        </p>
      </div>

      <OnThisPage sections={sections} />

      <div id="introduction" className="section">
        <h2>Introduction</h2>
        <p>
          The SSO API uses multiple authentication methods to secure access to its endpoints. This document describes
          the authentication methods used in the SSO API and provides examples of how to use them.
        </p>
      </div>

      <div id="basic-authentication" className="section">
        <h2>Basic Authentication</h2>
        <p>
          Basic Authentication is used to authenticate API requests. It requires a username and password, which are
          provided to you when you register for the SSO API.
        </p>
        <p>
          To use Basic Authentication, you need to include an Authorization header in your API requests with the value
          "Basic" followed by a Base64-encoded string of your username and password separated by a colon.
        </p>
        <TechRefCodeBlock
          code={`// Example of creating a Basic Authentication header
const username = "YOUR_USERNAME";
const password = "YOUR_PASSWORD";
const credentials = \`\${username}:\${password}\`;
const encodedCredentials = btoa(credentials);
const authHeader = \`Basic \${encodedCredentials}\`;

// Include the header in your API request
fetch("https://sso.travsrv.com/api/member", {
  headers: {
    "Authorization": authHeader
  }
});`}
          language="javascript"
          title="Basic Authentication Example"
        />
      </div>

      <div id="bearer-token" className="section">
        <h2>Bearer Token</h2>
        <p>
          Bearer Tokens are used to authenticate users and authorize actions on their behalf. There are two types of
          bearer tokens used in the SSO API:
        </p>
        <ul>
          <li>
            <strong>Admin Bearer Token</strong>: Used to authenticate requests to create or update member profiles.
            This token is obtained by calling the "Retrieve Admin Bearer Token" endpoint.
          </li>
          <li>
            <strong>Member Token</strong>: Used to authenticate users when deep-linking them into the booking engine.
            This token is obtained as a response from the "Create/Update Member" endpoint.
          </li>
        </ul>
        <p>
          Both types of tokens are valid for five minutes after they are issued.
        </p>
      </div>

      <div id="standard-sso-model" className="section">
        <h2>Standard SSO Model</h2>
        <p>
          The standard SSO model follows a three-step process:
        </p>
        <ol>
          <li>
            <strong>Retrieve Admin Bearer Token</strong>: Call the "Retrieve Admin Bearer Token" endpoint to get an
            admin bearer token. This token is used to authenticate requests to create or update member profiles.
          </li>
          <li>
            <strong>Create/Update Member</strong>: Call the "Create/Update Member" endpoint with the admin bearer token
            to create or update a member profile. The response includes a member token that can be used to authenticate
            the user.
          </li>
          <li>
            <strong>Deep-link to Hotel Search</strong>: Use the member token to deep-link the user into the booking
            engine. This allows the user to access the booking engine without having to log in again.
          </li>
        </ol>
        <p>
          This model allows you to authenticate users and provide them with seamless access to the booking engine.
        </p>
        <TechRefCodeBlock
          code={`// Example of the standard SSO model
// Step 1: Retrieve Admin Bearer Token
fetch("https://sso.travsrv.com/api/member?siteid=64&token=ARNUSER-publicadmin&_type=json", {
  headers: {
    "Authorization": "Basic YOUR_BASE64_ENCODED_CREDENTIALS"
  }
})
  .then(response => response.json())
  .then(data => {
    const adminToken = data.MemberToken;
    
    // Step 2: Create/Update Member
    const memberData = {
      Names: [
        {
          ReferralId: "test.account@example.com",
          FirstName: "Stephen",
          LastName: "Casper",
          Email: "test.account@example.com"
          // ... other member data
        }
      ]
    };
    
    const formData = new FormData();
    formData.append("siteId", "64");
    formData.append("token", decodeURIComponent(adminToken));
    formData.append("memberData", JSON.stringify(memberData));
    
    return fetch("https://sso.travsrv.com/api/member?_type=json", {
      method: "POST",
      headers: {
        "Authorization": "Basic YOUR_BASE64_ENCODED_CREDENTIALS"
      },
      body: formData
    });
  })
  .then(response => response.json())
  .then(data => {
    const memberToken = data.MemberToken;
    
    // Step 3: Deep-link to Hotel Search
    const deepLinkUrl = \`https://reservetravel.com/v6?siteId=64&memberToken=\${memberToken}\`;
    
    // Redirect the user to the deep-link URL
    window.location.href = deepLinkUrl;
  })
  .catch(error => {
    console.error("Error:", error);
  });`}
          language="javascript"
          title="Standard SSO Model Example"
        />
      </div>
    </>
  );
};

export default Authentication;
