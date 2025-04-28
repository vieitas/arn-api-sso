import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <>
      <div className="content-header">
        <h1>SSO API Resources</h1>
        <p>Tools and resources to help you integrate with the ARN SSO API</p>
      </div>

      <div className="resources-section">
        <h2>Postman Collection</h2>
        <p>
          Use our Postman collection to quickly test and explore the ARN SSO API. The collection includes all endpoints
          with pre-configured requests and environment variables.
        </p>

        <div className="resources-cards">
          <div className="resource-card">
            <div className="resource-card-icon">
              <i className="fas fa-file-code"></i>
            </div>
            <h3>Collection</h3>
            <p>Download the Postman collection with all API endpoints</p>
            <a
              href="/postman/arn-sso-api-collection.json"
              download
              className="resource-card-link"
            >
              Download Collection <i className="fas fa-download"></i>
            </a>
          </div>

          <div className="resource-card">
            <div className="resource-card-icon">
              <i className="fas fa-cog"></i>
            </div>
            <h3>Environment</h3>
            <p>Download the Postman environment with test credentials</p>
            <a
              href="/postman/arn-sso-api-test-environment.json"
              download
              className="resource-card-link"
            >
              Download Environment <i className="fas fa-download"></i>
            </a>
          </div>

          <div className="resource-card">
            <div className="resource-card-icon">
              <i className="fas fa-play"></i>
            </div>
            <h3>Run in Postman</h3>
            <p>Import the collection directly into Postman</p>
            <a
              href="https://elements.getpostman.com/view/import?collection=10758950-63d55121-135b-423a-8b5e-0dbd734360b0-Szf9UmbW&&referrer=https%3A%2F%2Fdocumenter.getpostman.com%2Fview%2F10758950%2FSzf9UmbW%3Fversion%3Dlatest&versionTag=latest&environment=10758950-1d87f11e-f947-44aa-a7dd-47018ef2e89e-Szf9UmbW&source=documenter"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card-link"
            >
              Run in Postman <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="resources-instructions">
          <h3>How to Use the Postman Collection</h3>
          <ol>
            <li>Click the "Run in Postman" button to import the collection and environment</li>
            <li>If you don't have Postman installed, you'll be prompted to download and install it</li>
            <li>After importing, select the "ARN SSO API Test Environment" from the environment dropdown</li>
            <li>Update the environment variables with your credentials</li>
            <li>Start with the "Retrieve Admin Bearer Token" request</li>
            <li>Follow the workflow: Retrieve Admin Bearer Token → Create/Update Member → Deep-link to Hotel Search</li>
          </ol>
        </div>
      </div>

      <div className="resources-section">
        <h2>SSO API Documentation</h2>
        <p>
          Comprehensive documentation for all ARN SSO API endpoints, including request parameters, response formats,
          and example code.
        </p>

        <div className="resources-links">
          <Link to="/endpoints/sso/admin-token" className="resources-link">
            <i className="fas fa-book"></i> API Reference
          </Link>
          <Link to="/getting-started" className="resources-link">
            <i className="fas fa-rocket"></i> Getting Started Guide
          </Link>
          <Link to="/technical-reference/error-codes" className="resources-link">
            <i className="fas fa-exclamation-triangle"></i> Error Codes
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resources;
