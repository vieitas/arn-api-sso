import React from 'react';
import './PostmanButton.css';
import { trackPostmanButtonClick } from '../../utils/analyticsEvents';

interface PostmanButtonProps {
  collectionUrl?: string;
}

const PostmanButton: React.FC<PostmanButtonProps> = ({ collectionUrl }) => {
  // Use the provided URL or default to our SSO API collection
  const postmanUrl = collectionUrl ||
    "https://elements.getpostman.com/view/import?collection=10758950-63d55121-135b-423a-8b5e-0dbd734360b0-Szf9UmbW&&referrer=https%3A%2F%2Fdocumenter.getpostman.com%2Fview%2F10758950%2FSzf9UmbW%3Fversion%3Dlatest&versionTag=latest&environment=10758950-1d87f11e-f947-44aa-a7dd-47018ef2e89e-Szf9UmbW&source=documenter";

  return (
    <div className="postman-button-container">
      <a
        href={postmanUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="postman-button"
        title="Run in Postman"
        onClick={() => trackPostmanButtonClick()}
      >
        <img
          src={process.env.PUBLIC_URL + "/postman/run-in-postman-button.jpg"}
          alt="Run in Postman"
          style={{ height: '35px', width: 'auto' }}
        />
      </a>
    </div>
  );
};

export default PostmanButton;
