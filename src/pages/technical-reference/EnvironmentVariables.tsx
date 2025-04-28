import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import TechRefCodeBlock from '../../components/technical-reference/TechRefCodeBlock';
import './error-codes-table.css';

const EnvironmentVariables: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'environment-variables',
      title: 'Environment Variables',
    },
    {
      id: 'postman-environment',
      title: 'Postman Environment',
    }
  ];

  return (
    <>
      <div className="content-header">
        <h1>Environment Variables</h1>
        <p>
          Environment variables used in the SSO API
        </p>
      </div>

      <OnThisPage sections={sections} />

      <div id="introduction" className="section">
        <h2>Introduction</h2>
        <p>
          Throughout this documentation you may see values referenced using curly braces. These relate to the selected Postman
          environment and the below table contains descriptions of the available Postman environment variables. These can be
          tweaked within the Postman application to ease testing and API familiarization.
        </p>
        <p>
          If you were provided a Postman environment file for testing, please install the Postman app and click the 'Run in Postman'
          link at the top-right corner of this page. Once app is installed and Postman collection loaded, click the settings icon
          in the top-right corner of the Postman interface next to the Environment dropdown and select 'Manage Environments'.
          Next, click on the Import button at the bottom of the Manage Environments menu, and select the environment file provided by ARN.
        </p>
      </div>

      <div id="environment-variables" className="section">
        <h2>Environment Variables</h2>
        <p>
          The following environment variables are used in the SSO API:
        </p>
        <table className="error-codes-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Site-Id</td>
              <td>Site id used for api requests.</td>
            </tr>
            <tr>
              <td>API-ClientUsername</td>
              <td>TripAuthority API username.</td>
            </tr>
            <tr>
              <td>API-ClientPassword</td>
              <td>TripAuthority API password.</td>
            </tr>
            <tr>
              <td>SSO-SiteAdminUsername</td>
              <td>Admin profile with 'canManageProfiles' permission for use with SSO API endpoints.</td>
            </tr>
            <tr>
              <td>SSO-Domain</td>
              <td>Domain to perform SSO deep-links against.</td>
            </tr>
            <tr>
              <td>SSO-ReferralId</td>
              <td>Unique member identifier used to generate or identify profile username.</td>
            </tr>
            <tr>
              <td>SSO-AdminBearerToken</td>
              <td>Represents an admin profile with 'canManageProfiles' permission to authorize SSO member create and update requests. Retrieved after each admin bearer token API call. Must be URL decoded before use.</td>
            </tr>
            <tr>
              <td>SSO-MemberData</td>
              <td>Required. JSON string containing all profiles to create / update.</td>
            </tr>
            <tr>
              <td>SSO-MemberToken</td>
              <td>Used for SSO deep-links. Retrieved after each member create or update API call. Must be URL decoded before use.</td>
            </tr>
            <tr>
              <td>ReturnType</td>
              <td>Format of API response. Formats available 'json', 'xml'.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="postman-environment" className="section">
        <h2>Postman Environment</h2>
        <p>
          The following is an example of a Postman environment file for the SSO API:
        </p>
        <TechRefCodeBlock
          code={`{
  "id": "sso-api-test-environment",
  "name": "SSO API Test Environment",
  "values": [
    {
      "key": "Site-Id",
      "value": "YOUR_SITE_ID",
      "enabled": true
    },
    {
      "key": "API-ClientUsername",
      "value": "YOUR_USERNAME",
      "enabled": true
    },
    {
      "key": "API-ClientPassword",
      "value": "YOUR_PASSWORD",
      "enabled": true
    },
    {
      "key": "SSO-SiteAdminUsername",
      "value": "ARNUSER-publicadmin",
      "enabled": true
    },
    {
      "key": "SSO-Domain",
      "value": "reservetravel.com",
      "enabled": true
    },
    {
      "key": "SSO-ReferralId",
      "value": "test.account@example.com",
      "enabled": true
    },
    {
      "key": "SSO-AdminBearerToken",
      "value": "",
      "enabled": true
    },
    {
      "key": "SSO-MemberData",
      "value": "{ \\"Names\\":[ { \\"ReferralId\\":\\"test.account@example.com\\", \\"FirstName\\":\\"Stephen\\", \\"LastName\\":\\"Casper\\", \\"Email\\":\\"test.account@example.com\\", \\"HomePhone\\":\\"913-616-6780\\", \\"Address1\\":\\"6950 Wunsch Route\\", \\"Address2\\":\\"260 Hand Rapid\\", \\"City\\":\\"Jessikastad\\", \\"State\\":\\"Florida\\", \\"Country\\":\\"SA\\", \\"Postal\\":\\"12345\\", \\"Longitude\\":\\"34.6583\\", \\"Latitude\\":\\"36.2360\\", \\"Referral\\":\\"CostCenter\\", \\"RegistrationCode\\":\\"CompanyId\\", \\"DeleteMember\\":false, \\"ReactivateMember\\":false, \\"UpdateMemberUsername\\":false, \\"AdditionalInfo\\":\\"\\" } ] }",
      "enabled": true
    },
    {
      "key": "SSO-MemberToken",
      "value": "",
      "enabled": true
    },
    {
      "key": "ReturnType",
      "value": "json",
      "enabled": true
    }
  ],
  "_postman_variable_scope": "environment"
}`}
          language="json"
          title="Postman Environment Example"
        />
      </div>
    </>
  );
};

export default EnvironmentVariables;
