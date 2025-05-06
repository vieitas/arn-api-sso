import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import GoogleFormHandler from '../../components/common/GoogleFormHandler.jsx';
import './Certification.css';

const Certification: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
    },
    {
      id: 'certification-process',
      title: 'Certification Process',
      subsections: [
        {
          id: 'getting-started',
          title: 'Getting Started',
        },
        {
          id: 'development-testing',
          title: 'Development & Testing',
        },
        {
          id: 'verification-production',
          title: 'Verification & Production Access',
        },
      ],
    },
    {
      id: 'technical-requirements',
      title: 'Technical Requirements',
      subsections: [
        {
          id: 'functional-requirements',
          title: 'Functional Requirements',
        },
        {
          id: 'non-functional-requirements',
          title: 'Non-Functional Requirements',
        },
        {
          id: 'compliance-requirements',
          title: 'Compliance Requirements',
        },
      ],
    },
    {
      id: 'certification-support',
      title: 'Certification Support',
      subsections: [
        {
          id: 'contact-certification-support',
          title: 'Contact Certification Support',
        },
      ],
    },
    {
      id: 'post-certification',
      title: 'Post-Certification',
    },
  ];

  return (
    <>
      <div className="content-header">
        <h1>SSO API Certification Program</h1>
        <p>Complete guide to becoming a certified ARN SSO API integration partner</p>
      </div>

      <OnThisPage sections={sections} />

      <div id="overview" className="section">
        <h2>Overview</h2>
        <p>
          The ARN SSO API Certification Program is designed to ensure that all integrations with our SSO API meet the highest
          standards of quality, security, and performance. Becoming a certified partner provides numerous benefits,
          including enhanced support, access to additional features, and official recognition as a trusted integration partner.
        </p>


      </div>

      <div id="certification-process" className="section">
        <h2>Certification Process</h2>
        <p>
          Our certification process is straightforward and designed to verify your integration works correctly with our API.
        </p>

        <div className="certification-process-diagram">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Registration</h3>
              <p>Submit the form below</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Development</h3>
              <p>Build with test credentials</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Verification</h3>
              <p>Submit test results</p>
            </div>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Production</h3>
              <p>Receive production access</p>
            </div>
          </div>
        </div>

        <div id="getting-started" className="subsection">
          <h3>Getting Started</h3>
          <p>
            To begin the certification process:
          </p>
          <ul>
            <li>Fill out the registration form below</li>
            <li>Review the API documentation on this site</li>
            <li>Request test credentials for integration testing</li>
            <li>Complete a series of API requests and responses</li>
            <li>Submit your test results for review</li>
          </ul>

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

        <div id="development-testing" className="subsection">
          <h3>Development & Testing</h3>
          <p>
            During this phase, you'll build your integration and test it thoroughly using the test credentials:
          </p>
          <ul>
            <li>Implement all required API endpoints</li>
            <li>Develop proper error handling and retry mechanisms</li>
            <li>Implement security best practices</li>
            <li>Conduct thorough testing using our test scenarios</li>
            <li>Perform load and performance testing</li>
            <li>Document your test results</li>
          </ul>

          <div className="alert alert-warning">
            <h4 className="alert-title">Testing Requirements</h4>
            <p>
              Your integration must pass all test scenarios provided in our certification test suite.
              Make sure to test edge cases and error conditions thoroughly.
            </p>
          </div>
        </div>

        <div id="verification-production" className="subsection">
          <h3>Verification & Production Access</h3>
          <p>
            Once your integration is complete and tested:
          </p>
          <ul>
            <li>Submit your test results to our certification team</li>
            <li>Our team will review your submission (typically less than a week)</li>
            <li>After approval, you'll receive production credentials</li>
            <li>Deploy your integration to production</li>
          </ul>
        </div>
      </div>

      <div id="technical-requirements" className="section">
        <h2>Technical Requirements</h2>
        <p>
          To achieve certification, your integration must meet specific technical requirements across
          several categories.
        </p>

        <div id="functional-requirements" className="subsection">
          <h3>Functional Requirements</h3>
          <p>
            Your integration must implement the following core functionality:
          </p>

          <div className="requirements-table">
            <h4>Required Endpoints</h4>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Required Endpoints</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Authentication</td>
                  <td>
                    <ul>
                      <li>Retrieve Admin Bearer Token</li>
                    </ul>
                  </td>
                  <td>Must support retrieving admin bearer tokens for authentication</td>
                </tr>
                <tr>
                  <td>Member Management</td>
                  <td>
                    <ul>
                      <li>Create/Update Member</li>
                    </ul>
                  </td>
                  <td>Must support creating and updating member profiles</td>
                </tr>
                <tr>
                  <td>Deep-linking</td>
                  <td>
                    <ul>
                      <li>Deep-link to Hotel Search</li>
                    </ul>
                  </td>
                  <td>Must support deep-linking authenticated users into the booking engine</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Additionally, your integration must handle all standard business flows, including:
          </p>
          <ul>
            <li>Complete SSO flow with proper token management</li>
            <li>Member creation and update flows</li>
            <li>Error recovery and retry mechanisms</li>
            <li>Proper handling of edge cases (e.g., token expiration, invalid member data)</li>
          </ul>
        </div>

        <div id="non-functional-requirements" className="subsection">
          <h3>Non-Functional Requirements</h3>
          <p>
            Your integration must meet the following non-functional requirements:
          </p>

          <div className="requirements-table">
            <h4>Performance & Reliability</h4>
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Threshold</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Response Time</td>
                  <td>&lt; 5 seconds</td>
                  <td>Client-side processing should not add more than 5 seconds to overall response time</td>
                </tr>
                <tr>
                  <td>Availability</td>
                  <td>99.9%</td>
                  <td>Your integration should maintain 99.9% uptime</td>
                </tr>
                <tr>
                  <td>Error Rate</td>
                  <td>&lt; 1%</td>
                  <td>Failed requests due to client-side issues should be less than 1%</td>
                </tr>
                <tr>
                  <td>Retry Logic</td>
                  <td>Required</td>
                  <td>Must implement exponential backoff retry for transient errors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="requirements-table">
            <h4>Security Requirements</h4>
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TLS</td>
                  <td>Must use TLS 1.2 or higher for all API communications</td>
                </tr>
                <tr>
                  <td>Authentication</td>
                  <td>Must securely store API credentials and never expose them client-side</td>
                </tr>
                <tr>
                  <td>Data Protection</td>
                  <td>Must encrypt sensitive data at rest and in transit</td>
                </tr>
                <tr>
                  <td>Input Validation</td>
                  <td>Must validate all user inputs before passing to the API</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="compliance-requirements" className="subsection">
          <h3>Compliance Requirements</h3>
          <p>
            Your integration must comply with the following standards and regulations:
          </p>
          <ul>
            <li><strong>Data Privacy:</strong> Compliance with GDPR, CCPA, and other applicable data privacy regulations</li>
            <li><strong>PCI-DSS & PII:</strong> If handling payment information or personally identifiable information, compliance with PCI-DSS and PII data protection requirements</li>
            <li><strong>Accessibility:</strong> User interfaces should comply with WCAG 2.1 Level AA standards</li>
            <li><strong>API Usage:</strong> Adherence to API rate limits and usage policies</li>
            <li><strong>Branding:</strong> Proper use of ARN branding according to our brand guidelines</li>
          </ul>

          <div className="alert alert-info">
            <h4 className="alert-title">Submission Requirements</h4>
            <p>
              Include logs of your API requests and responses that demonstrate your integration works correctly
              with our test environment.
            </p>
          </div>
        </div>
      </div>



      <div id="certification-support" className="section">
        <h2>Certification Support</h2>
        <p>
          We provide dedicated support throughout the certification process:
        </p>
        <ul>
          <li><strong>Support Portal:</strong> Dedicated support portal for certification-related questions</li>
          <li><strong>Technical Consultations:</strong> Available if needed when issues cannot be resolved via email</li>
          <li><strong>Documentation:</strong> Comprehensive guides and best practices</li>
        </ul>

        <div id="contact-certification-support" className="support-contact">
          <h3>Contact Certification Support</h3>
          <p>
            For questions specific to the certification process, contact our certification team:
          </p>
          <ul>
            <li>Support Portal: <a href="https://arn.support/" target="_blank" rel="noopener noreferrer">https://arn.support/</a></li>
            <li>Support Hours: Monday-Friday, 9 AM - 5 PM EST</li>
            <li>Response Time: Within 1 business day</li>
          </ul>
        </div>
      </div>

      <div id="post-certification" className="section">
        <h2>Post-Certification</h2>
        <p>
          After certification, to maintain your production access:
        </p>

        <div className="post-cert-info">
          <ul>
            <li><strong>Transaction Volume:</strong> Maintain the minimum booking volume in your contract</li>
            <li><strong>API Updates:</strong> Update to new major API versions when released</li>
            <li><strong>Performance:</strong> Maintain acceptable error rates and response times</li>
          </ul>
        </div>


      </div>
    </>
  );
};

export default Certification;
