import React from 'react';
import OnThisPage from '../../components/common/OnThisPage';
import Alert from '../../components/common/Alert';
import TechRefCodeBlock from '../../components/technical-reference/TechRefCodeBlock';
import './WebhookIntegration.css';

const WebhookIntegration: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
    },
    {
      id: 'webhook-events',
      title: 'Webhook Events',
    },
    {
      id: 'webhook-format',
      title: 'Webhook Format',
    },
    {
      id: 'reservation-webhook',
      title: 'Reservation Webhook',
    },
    {
      id: 'cancellation-webhook',
      title: 'Cancellation Webhook',
    },
    {
      id: 'implementing-webhooks',
      title: 'Implementing Webhooks',
    },
    {
      id: 'testing-webhooks',
      title: 'Testing Webhooks',
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
    },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Webhook Integration</h1>
        <p>Receive real-time notifications about reservation events</p>
      </div>

      <OnThisPage sections={sections} />

      <div id="overview" className="section">
        <h2>Overview</h2>
        <p>
          Webhooks allow ARN to push data to your application when certain events occur on the platform, such as
          reservation creation and cancellation. This enables you to build real-time integrations that respond immediately
          to changes in reservation status for your SSO users.
        </p>
        <Alert type="info" title="XML Format">
          <p>
            Webhooks are sent as HTTP POST requests with raw XML body and Content-Type set to 'text/xml'. Further webhook
            details can be found in the XML Web Services Support Guide.
          </p>
        </Alert>
      </div>

      <div id="webhook-events" className="section">
        <h2>Webhook Events</h2>
        <p>
          ARN currently supports the following webhook events:
        </p>
        <table className="webhook-events-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reservation Creation</td>
              <td>Triggered when a new reservation is created</td>
            </tr>
            <tr>
              <td>Reservation Cancellation</td>
              <td>Triggered when a reservation is cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="webhook-format" className="section">
        <h2>Webhook Format</h2>
        <p>
          All webhooks are sent as HTTP POST requests with the following characteristics:
        </p>
        <ul className="webhook-format-list">
          <li><strong>Content-Type:</strong> text/xml</li>
          <li><strong>Body Format:</strong> Raw XML</li>
          <li><strong>Authentication:</strong> None (you should validate webhooks based on their content)</li>
        </ul>
        <p>
          Your webhook endpoint should respond with a 200 OK status code to acknowledge receipt of the webhook.
          If ARN doesn't receive a 200 OK response, it will retry sending the webhook several times.
        </p>
      </div>

      <div id="reservation-webhook" className="section">
        <h2>Reservation Webhook</h2>
        <p>
          The reservation webhook is triggered when a new reservation is created. It contains detailed information about
          the reservation, including guest details, room information, and payment details.
        </p>
        <h3>Reservation Webhook Example (Test Mode)</h3>
        <TechRefCodeBlock
          code={`<ReservationResponse>
  <Reservation>
    <ReservationLocator>ABC123XYZ</ReservationLocator>
    <ConfirmationNumber>CONF123456</ConfirmationNumber>
    <Status>Confirmed</Status>
    <CreateDate>2025-05-23T14:30:00</CreateDate>
    <Hotel>
      <HotelId>123456</HotelId>
      <Name>Test Hotel</Name>
      <Address>
        <AddressLine1>123 Test Street</AddressLine1>
        <City>Test City</City>
        <StateProvince>TS</StateProvince>
        <PostalCode>12345</PostalCode>
        <Country>US</Country>
      </Address>
      <Phone>123-456-7890</Phone>
    </Hotel>
    <RoomStay>
      <CheckInDate>2025-05-23</CheckInDate>
      <CheckOutDate>2025-05-24</CheckOutDate>
      <Adults>2</Adults>
      <Children>0</Children>
      <RoomType>Standard Room</RoomType>
      <RatePlanCode>ABC123</RatePlanCode>
      <RoomCode>XYZ789</RoomCode>
      <CancellationPolicy>
        <CancelByDate>2025-05-22T16:00:00</CancelByDate>
        <Description>Cancel by 4:00 PM hotel time on May 22, 2025 to avoid a penalty of 1 night's room and tax.</Description>
      </CancellationPolicy>
      <Rates>
        <Rate>
          <Date>2025-05-23</Date>
          <BaseRate>100.00</BaseRate>
          <Tax>15.00</Tax>
          <Total>115.00</Total>
          <CurrencyCode>USD</CurrencyCode>
        </Rate>
      </Rates>
      <Total>115.00</Total>
      <CurrencyCode>USD</CurrencyCode>
    </RoomStay>
    <Guest>
      <FirstName>Test</FirstName>
      <LastName>User</LastName>
      <Email>test@example.com</Email>
      <Phone>123-456-7890</Phone>
    </Guest>
  </Reservation>
</ReservationResponse>`}
          language="xml"
          title="Reservation Webhook Example"
        />
      </div>

      <div id="cancellation-webhook" className="section">
        <h2>Cancellation Webhook</h2>
        <p>
          The cancellation webhook is triggered when a reservation is cancelled. It contains information about the
          cancelled reservation, including the cancellation reason and timestamp.
        </p>
        <h3>Cancellation Webhook Example (Test Mode)</h3>
        <TechRefCodeBlock
          code={`<CancellationResponse>
  <Cancellation>
    <ReservationLocator>ABC123XYZ</ReservationLocator>
    <ConfirmationNumber>CONF123456</ConfirmationNumber>
    <Status>Cancelled</Status>
    <CancellationDate>2025-05-22T10:15:00</CancellationDate>
    <CancellationReason>Guest Request</CancellationReason>
    <CancellationNumber>CANC123456</CancellationNumber>
    <Hotel>
      <HotelId>123456</HotelId>
      <Name>Test Hotel</Name>
    </Hotel>
    <RoomStay>
      <CheckInDate>2025-05-23</CheckInDate>
      <CheckOutDate>2025-05-24</CheckOutDate>
    </RoomStay>
    <Guest>
      <FirstName>Test</FirstName>
      <LastName>User</LastName>
      <Email>test@example.com</Email>
    </Guest>
  </Cancellation>
</CancellationResponse>`}
          language="xml"
          title="Cancellation Webhook Example"
        />
      </div>

      <div id="implementing-webhooks" className="section">
        <h2>Implementing Webhooks</h2>
        <p>
          To implement webhooks in your application, follow these steps:
        </p>
        <ol className="implementing-webhooks-list">
          <li>
            <strong>Create a webhook endpoint</strong> in your application that can receive HTTP POST requests with XML content.
            <TechRefCodeBlock
              code={`// Example webhook endpoint in Node.js with Express
const express = require('express');
const app = express();
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false });

// Configure Express to accept raw XML
app.use(express.text({ type: 'text/xml' }));

// Reservation webhook endpoint
app.post('/webhooks/reservation', async (req, res) => {
  try {
    // Parse the XML body
    const result = await parser.parseStringPromise(req.body);

    // Process the reservation data
    const reservation = result.ReservationResponse.Reservation;
    console.log('New reservation received:', reservation.ReservationLocator);

    // Your business logic here...

    // Acknowledge receipt
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing webhook');
  }
});

// Cancellation webhook endpoint
app.post('/webhooks/cancellation', async (req, res) => {
  try {
    // Parse the XML body
    const result = await parser.parseStringPromise(req.body);

    // Process the cancellation data
    const cancellation = result.CancellationResponse.Cancellation;
    console.log('Cancellation received:', cancellation.ReservationLocator);

    // Your business logic here...

    // Acknowledge receipt
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing webhook');
  }
});

app.listen(3000, () => {
  console.log('Webhook server listening on port 3000');
});`}
              language="javascript"
              title="Webhook Implementation Example"
            />
          </li>
          <li>
            <strong>Make your endpoint publicly accessible</strong> so that ARN can send webhooks to it. This typically
            involves deploying your application to a server with a public IP address or using a service like ngrok for
            local development.
          </li>
          <li>
            <strong>Register your webhook URL</strong> with ARN by contacting support through the Partner Request form.
            Provide the following information:
            <ul>
              <li>Your Site ID</li>
              <li>The URL of your webhook endpoint</li>
              <li>The events you want to receive (reservation creation, cancellation, or both)</li>
            </ul>
          </li>
          <li>
            <strong>Implement validation logic</strong> to ensure that the webhooks you receive are legitimate and contain
            valid data.
          </li>
          <li>
            <strong>Implement error handling</strong> to gracefully handle any issues that may arise when processing webhooks.
          </li>
        </ol>
      </div>

      <div id="testing-webhooks" className="section">
        <h2>Testing Webhooks</h2>
        <p>
          To test your webhook implementation, you can use the following approaches:
        </p>
        <ul className="testing-webhooks-list">
          <li>
            <strong>Create test reservations</strong> in the ARN test environment using the API. This will trigger
            reservation webhooks to be sent to your registered endpoint.
          </li>
          <li>
            <strong>Cancel test reservations</strong> to trigger cancellation webhooks.
          </li>
          <li>
            <strong>Use a webhook testing tool</strong> like ngrok or Webhook.site to inspect and debug the webhooks
            you receive.
          </li>
        </ul>
        <Alert type="info" title="Test Mode">
          <p>
            Webhooks sent from the test environment will have slightly different data than production webhooks.
            Test webhooks will contain simulated data and will be clearly marked as test data.
          </p>
        </Alert>
      </div>

      <div id="best-practices" className="section">
        <h2>Best Practices</h2>
        <p>
          Follow these best practices when implementing webhooks:
        </p>
        <ul className="best-practices-list">
          <li>
            <strong>Respond quickly</strong> to webhook requests. Your endpoint should acknowledge receipt of the webhook
            as soon as possible by returning a 200 OK status code, even if you need to process the data asynchronously.
          </li>
          <li>
            <strong>Implement idempotency</strong> to handle duplicate webhooks. ARN may send the same webhook multiple
            times if your endpoint doesn't respond with a 200 OK status code.
          </li>
          <li>
            <strong>Validate webhook data</strong> before processing it to ensure it's legitimate and contains all the
            required fields.
          </li>
          <li>
            <strong>Implement proper error handling</strong> to gracefully handle any issues that may arise when processing
            webhooks.
          </li>
          <li>
            <strong>Log webhook data</strong> for debugging and auditing purposes, but be careful not to log sensitive
            information like credit card details.
          </li>
          <li>
            <strong>Implement retry logic</strong> for any actions that depend on external services, as these may fail
            temporarily.
          </li>
        </ul>
      </div>
    </>
  );
};

export default WebhookIntegration;
