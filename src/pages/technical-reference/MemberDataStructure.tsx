import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import TechRefCodeBlock from '../../components/technical-reference/TechRefCodeBlock';
import './error-codes-table.css';

const MemberDataStructure: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'member-data-object',
      title: 'Member Data Object',
    },
    {
      id: 'example',
      title: 'Example',
    }
  ];

  return (
    <>
      <div className="content-header">
        <h1>Member Data Structure</h1>
        <p>
          Structure of the member data object used in the SSO API
        </p>
      </div>

      <OnThisPage sections={sections} />

      <div id="introduction" className="section">
        <h2>Introduction</h2>
        <p>
          The Member Data structure is used when creating or updating members through the SSO API. This document describes
          the structure of the member data object and provides examples of how to use it.
        </p>
      </div>

      <div id="member-data-object" className="section">
        <h2>Member Data Object</h2>
        <p>
          The Member Data object contains an array of Names objects, each representing a member profile to create or update.
          The following table describes the properties of the Names object:
        </p>
        <table className="error-codes-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ReferralId</td>
              <td>string</td>
              <td>Yes</td>
              <td>Unique identifier for the member profile. This is typically an email address.</td>
            </tr>
            <tr>
              <td>FirstName</td>
              <td>string</td>
              <td>Yes</td>
              <td>First name of the member.</td>
            </tr>
            <tr>
              <td>LastName</td>
              <td>string</td>
              <td>Yes</td>
              <td>Last name of the member.</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>string</td>
              <td>Yes</td>
              <td>Email address of the member.</td>
            </tr>
            <tr>
              <td>HomePhone</td>
              <td>string</td>
              <td>No</td>
              <td>Home phone number of the member.</td>
            </tr>
            <tr>
              <td>Address1</td>
              <td>string</td>
              <td>No</td>
              <td>First line of the member's address.</td>
            </tr>
            <tr>
              <td>Address2</td>
              <td>string</td>
              <td>No</td>
              <td>Second line of the member's address.</td>
            </tr>
            <tr>
              <td>City</td>
              <td>string</td>
              <td>No</td>
              <td>City of the member's address.</td>
            </tr>
            <tr>
              <td>State</td>
              <td>string</td>
              <td>No</td>
              <td>State or province of the member's address.</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>string</td>
              <td>No</td>
              <td>Country of the member's address.</td>
            </tr>
            <tr>
              <td>Postal</td>
              <td>string</td>
              <td>No</td>
              <td>Postal or ZIP code of the member's address.</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>string</td>
              <td>No</td>
              <td>Longitude coordinate of the member's location.</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>string</td>
              <td>No</td>
              <td>Latitude coordinate of the member's location.</td>
            </tr>
            <tr>
              <td>Referral</td>
              <td>string</td>
              <td>No</td>
              <td>Referral information, such as a cost center or department.</td>
            </tr>
            <tr>
              <td>RegistrationCode</td>
              <td>string</td>
              <td>No</td>
              <td>Registration code, such as a company ID or membership number.</td>
            </tr>

            <tr>
              <td>AdditionalInfo</td>
              <td>string</td>
              <td>No</td>
              <td>Additional information about the member.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="example" className="section">
        <h2>Example</h2>
        <p>
          The following is an example of a Member Data object:
        </p>
        <TechRefCodeBlock
          code={`{
  "Names": [
    {
      "ReferralId": "test.account@example.com",
      "FirstName": "Stephen",
      "LastName": "Casper",
      "Email": "test.account@example.com",
      "HomePhone": "913-616-6780",
      "Address1": "6950 Wunsch Route",
      "Address2": "260 Hand Rapid",
      "City": "Jessikastad",
      "State": "Florida",
      "Country": "SA",
      "Postal": "12345",
      "Longitude": "34.6583",
      "Latitude": "36.2360",
      "Referral": "CostCenter",
      "RegistrationCode": "CompanyId",
      "AdditionalInfo": ""
    }
  ]
}`}
          language="json"
          title="Member Data Example"
        />
      </div>
    </>
  );
};

export default MemberDataStructure;
