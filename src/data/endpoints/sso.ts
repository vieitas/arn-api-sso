import { Endpoint } from '../types';

export const ssoEndpoints: Endpoint[] = [
  {
    id: 'admin-token',
    title: 'Retrieve Admin Bearer Token',
    description: 'Get an admin bearer token for authenticating future API requests',
    method: 'GET',
    url: 'https://sso.travsrv.com/api/member',
    category: 'typeahead', // Reusing existing category for compatibility
    headers: [
      {
        name: 'Site-Id',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'API-ClientUsername',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'API-ClientPassword',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'Content-Type',
        type: 'string',
        required: "Yes",
        description: '',
        example: 'application/json'
      },
      {
        name: 'Authorization',
        type: 'string',
        required: "Yes",
        description: '',
        example: 'Basic (Base64 encoded username:password)'
      }
    ],
    requestParameters: [
      {
        name: 'siteid',
        type: 'integer',
        required: true,
        description: 'Site id to manage SSO for'
      },
      {
        name: 'token',
        type: 'string',
        required: true,
        description: 'Slug identifying profile to retrieve bearer token for'
      },
      {
        name: '_type',
        type: 'string',
        required: false,
        description: 'Content return type: xml or json'
      }
    ],
    requestExample: `GET /api/member?siteid=64&token=ARNUSER-publicadmin&_type=json HTTP/1.1
Host: sso.travsrv.com
Authorization: Basic YOUR_BASE64_ENCODED_CREDENTIALS`,
    responseExample: `{
  "MemberToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "Success": true
}`,
    responseParameters: [
      {
        name: 'MemberToken',
        type: 'string',
        required: true,
        description: 'Bearer token for authenticating future API requests. Valid for five minutes.'
      },
      {
        name: 'Success',
        type: 'boolean',
        required: true,
        description: 'Indicates if the request was successful'
      }
    ],
    testVsProduction: 'The response structure and data are identical in both test and production environments for this endpoint.',
    errorCodes: [
      {
        code: '400',
        message: 'Bad Request',
        description: 'Invalid request (missing or invalid parameters)'
      },
      {
        code: '401',
        message: 'Unauthorized',
        description: 'Unauthorized (invalid credentials)'
      },
      {
        code: '500',
        message: 'Internal Server Error',
        description: 'Internal server error'
      }
    ],
    codeExamples: [
      {
        language: 'bash',
        label: 'cURL',
        code: `curl -X GET "https://sso.travsrv.com/api/member?siteid=64&token=ARNUSER-publicadmin&_type=json" \\
  -H "Authorization: Basic YOUR_BASE64_ENCODED_CREDENTIALS" # Base64 encoded username:password`
      },
      {
        language: 'python',
        label: 'Python',
        code: `import requests
import json
import base64

# Authentication credentials
username = "YOUR_USERNAME"
password = "YOUR_PASSWORD"
credentials = f"{username}:{password}"
encoded_credentials = base64.b64encode(credentials.encode()).decode()

# Authentication headers
headers = {
    "Authorization": f"Basic {encoded_credentials}"
}

# Request parameters
params = {
    "siteid": "64",
    "token": "ARNUSER-publicadmin",
    "_type": "json"
}

# Make a request
response = requests.get(
    "https://sso.travsrv.com/api/member",
    headers=headers,
    params=params
)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    print(json.dumps(data, indent=2))

    # Store the token for future use
    member_token = data.get("MemberToken")
    print(f"Bearer token: {member_token}")
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)`
      },
      {
        language: 'javascript',
        label: 'JavaScript',
        code: `// Using axios
const axios = require('axios');

// Authentication credentials
const username = "YOUR_USERNAME";
const password = "YOUR_PASSWORD";
const credentials = \`\${username}:\${password}\`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

const headers = {
  "Authorization": \`Basic \${encodedCredentials}\`
};

const params = {
  siteid: "64",
  token: "ARNUSER-publicadmin",
  _type: "json"
};

axios.get("https://sso.travsrv.com/api/member", {
  headers,
  params
})
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));

    // Store the token for future use
    const memberToken = response.data.MemberToken;
    console.log(\`Bearer token: \${memberToken}\`);
  })
  .catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });`
      },
      {
        language: 'php',
        label: 'PHP',
        code: `<?php
// Using cURL
$baseUrl = "https://sso.travsrv.com/api/member";
$params = [
    "siteid" => "64",
    "token" => "ARNUSER-publicadmin",
    "_type" => "json"
];
$url = $baseUrl . "?" . http_build_query($params);

// Authentication credentials
$username = "YOUR_USERNAME";
$password = "YOUR_PASSWORD";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_USERPWD, "$username:$password"); // Basic authentication

$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($httpCode === 200) {
    $data = json_decode($response, true);
    echo json_encode($data, JSON_PRETTY_PRINT);

    // Store the token for future use
    $memberToken = $data['MemberToken'];
    echo "Bearer token: " . $memberToken;
} else {
    echo "Request failed with status code: " . $httpCode . "\\n";
    echo $response;
}

curl_close($curl);
?>`
      }
    ]
  },
  {
    id: 'member-upsert',
    title: 'Create/Update Member',
    description: 'Create or update a member profile using an admin bearer token. For detailed information about the member data structure and valid parameters, see the <a href="#/technical-reference/member-data-structure">Member Data Structure</a> documentation.',
    method: 'POST',
    url: 'https://sso.travsrv.com/api/member',
    category: 'hotel', // Reusing existing category for compatibility
    headers: [
      {
        name: 'Site-Id',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'API-ClientUsername',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'API-ClientPassword',
        type: 'string',
        required: "Yes",
        description: ''
      },
      {
        name: 'Content-Type',
        type: 'string',
        required: "Yes",
        description: '',
        example: 'application/json'
      },
      {
        name: 'Authorization',
        type: 'string',
        required: "Yes",
        description: '',
        example: 'Basic (Base64 encoded username:password)'
      }
    ],
    requestParameters: [
      {
        name: '_type',
        type: 'string',
        required: false,
        description: 'Content return type: xml or json'
      },
      {
        name: 'siteId',
        type: 'integer',
        required: true,
        description: 'Site id to manage SSO for'
      },
      {
        name: 'token',
        type: 'string',
        required: true,
        description: 'Bearer token of admin profile, must be URL decoded before use'
      },
      {
        name: 'memberData',
        type: 'string',
        required: true,
        description: 'JSON string containing all profiles to create / update'
      },
      {
        name: 'Rewards',
        type: 'integer',
        required: false,
        description: 'Rewards are real money, redeemed to pay for a booking'
      },
      {
        name: 'Points',
        type: 'integer',
        required: false,
        description: 'Points are not real money, used to reduce overall booking price based on margin'
      }
    ],
    requestExample: `POST /api/member?_type=json HTTP/1.1
Host: sso.travsrv.com
Content-Type: application/x-www-form-urlencoded
Authorization: Basic YOUR_BASE64_ENCODED_CREDENTIALS

siteId=64&token=YOUR_URL_DECODED_ADMIN_BEARER_TOKEN&memberData={ "Names":[ { "ReferralId":"test.account@example.com", "FirstName":"Stephen", "LastName":"Casper", "Email":"test.account@example.com", "HomePhone":"913-616-6780", "Address1":"6950 Wunsch Route", "Address2":"260 Hand Rapid", "City":"Jessikastad", "State":"Florida", "Country":"SA", "Postal":"12345", "Longitude":"34.6583", "Latitude":"36.2360", "Referral":"CostCenter", "RegistrationCode":"CompanyId", "AdditionalInfo":"" } ] }`,
    responseExample: `{
  "MemberToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "Success": true
}`,
    responseParameters: [
      {
        name: 'MemberToken',
        type: 'string',
        required: true,
        description: 'Member token useful for SSO deeplinking into your site as that user. Token is valid for five minutes.'
      },
      {
        name: 'Success',
        type: 'boolean',
        required: true,
        description: 'Indicates if the request was successful'
      }
    ],
    testVsProduction: 'The response structure and data are identical in both test and production environments for this endpoint.',
    errorCodes: [
      {
        code: '400',
        message: 'Bad Request',
        description: 'Invalid request (missing or invalid parameters)'
      },
      {
        code: '401',
        message: 'Unauthorized',
        description: 'Unauthorized (invalid credentials or token)'
      },
      {
        code: '500',
        message: 'Internal Server Error',
        description: 'Internal server error'
      }
    ],
    codeExamples: [
      {
        language: 'bash',
        label: 'cURL',
        code: `curl -X POST "https://sso.travsrv.com/api/member?_type=json" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -H "Authorization: Basic YOUR_BASE64_ENCODED_CREDENTIALS" \\
  --data-urlencode "siteId=64" \\
  --data-urlencode "token=YOUR_URL_DECODED_ADMIN_BEARER_TOKEN" \\
  --data-urlencode 'memberData={ "Names":[ { "ReferralId":"test.account@example.com", "FirstName":"Stephen", "LastName":"Casper", "Email":"test.account@example.com", "HomePhone":"913-616-6780", "Address1":"6950 Wunsch Route", "Address2":"260 Hand Rapid", "City":"Jessikastad", "State":"Florida", "Country":"SA", "Postal":"12345", "Longitude":"34.6583", "Latitude":"36.2360", "Referral":"CostCenter", "RegistrationCode":"CompanyId", "AdditionalInfo":"" } ] }'`
      },
      {
        language: 'python',
        label: 'Python',
        code: `import requests
import json
import base64
import urllib.parse

# Authentication credentials
username = "YOUR_USERNAME"
password = "YOUR_PASSWORD"
credentials = f"{username}:{password}"
encoded_credentials = base64.b64encode(credentials.encode()).decode()

# Authentication headers
headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": f"Basic {encoded_credentials}"
}

# Admin bearer token (from previous step)
admin_token = "YOUR_ADMIN_BEARER_TOKEN"
decoded_token = urllib.parse.unquote(admin_token)

# Member data
member_data = {
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
}

# Request parameters
params = {
    "_type": "json"
}

# Form data
form_data = {
    "siteId": "64",
    "token": decoded_token,
    "memberData": json.dumps(member_data)
}

# Make a request
response = requests.post(
    "https://sso.travsrv.com/api/member",
    headers=headers,
    params=params,
    data=form_data
)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    print(json.dumps(data, indent=2))

    # Store the token for future use
    member_token = data.get("MemberToken")
    print(f"Member token: {member_token}")
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)`
      },
      {
        language: 'javascript',
        label: 'JavaScript',
        code: `// Using axios
const axios = require('axios');
const querystring = require('querystring');

// Authentication credentials
const username = "YOUR_USERNAME";
const password = "YOUR_PASSWORD";
const credentials = \`\${username}:\${password}\`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

// Authentication headers
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Authorization": \`Basic \${encodedCredentials}\`
};

// Admin bearer token (from previous step)
const adminToken = "YOUR_ADMIN_BEARER_TOKEN";
const decodedToken = decodeURIComponent(adminToken);

// Member data
const memberData = {
  Names: [
    {
      ReferralId: "test.account@example.com",
      FirstName: "Stephen",
      LastName: "Casper",
      Email: "test.account@example.com",
      HomePhone: "913-616-6780",
      Address1: "6950 Wunsch Route",
      Address2: "260 Hand Rapid",
      City: "Jessikastad",
      State: "Florida",
      Country: "SA",
      Postal: "12345",
      Longitude: "34.6583",
      Latitude: "36.2360",
      Referral: "CostCenter",
      RegistrationCode: "CompanyId",
      AdditionalInfo: ""
    }
  ]
};

// Request parameters
const params = {
  _type: "json"
};

// Form data
const formData = {
  siteId: "64",
  token: decodedToken,
  memberData: JSON.stringify(memberData)
};

axios.post("https://sso.travsrv.com/api/member", querystring.stringify(formData), {
  headers,
  params
})
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));

    // Store the token for future use
    const memberToken = response.data.MemberToken;
    console.log(\`Member token: \${memberToken}\`);
  })
  .catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
  });`
      },
      {
        language: 'php',
        label: 'PHP',
        code: `<?php
// Using cURL
$baseUrl = "https://sso.travsrv.com/api/member";
$params = [
    "_type" => "json"
];
$url = $baseUrl . "?" . http_build_query($params);

// Authentication credentials
$username = "YOUR_USERNAME";
$password = "YOUR_PASSWORD";

// Admin bearer token (from previous step)
$adminToken = "YOUR_ADMIN_BEARER_TOKEN";
$decodedToken = urldecode($adminToken);

// Member data
$memberData = [
    "Names" => [
        [
            "ReferralId" => "test.account@example.com",
            "FirstName" => "Stephen",
            "LastName" => "Casper",
            "Email" => "test.account@example.com",
            "HomePhone" => "913-616-6780",
            "Address1" => "6950 Wunsch Route",
            "Address2" => "260 Hand Rapid",
            "City" => "Jessikastad",
            "State" => "Florida",
            "Country" => "SA",
            "Postal" => "12345",
            "Longitude" => "34.6583",
            "Latitude" => "36.2360",
            "Referral" => "CostCenter",
            "RegistrationCode" => "CompanyId",
            "AdditionalInfo" => ""
        ]
    ]
];

// Form data
$formData = [
    "siteId" => "64",
    "token" => $decodedToken,
    "memberData" => json_encode($memberData)
];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($formData));
curl_setopt($curl, CURLOPT_USERPWD, "$username:$password"); // Basic authentication
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "Content-Type: application/x-www-form-urlencoded"
]);

$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($httpCode === 200) {
    $data = json_decode($response, true);
    echo json_encode($data, JSON_PRETTY_PRINT);

    // Store the token for future use
    $memberToken = $data['MemberToken'];
    echo "Member token: " . $memberToken;
} else {
    echo "Request failed with status code: " . $httpCode . "\\n";
    echo $response;
}

curl_close($curl);
?>`
      }
    ]
  },
  {
    id: 'deep-link',
    title: 'Deep-link to Hotel Search',
    description: 'Deep-link an authenticated user into your booking engine',
    method: 'GET',
    url: 'https://reservetravel.com/v6',
    category: 'content', // Reusing existing category for compatibility
    headers: [],
    requestParameters: [
      {
        name: 'siteId',
        type: 'integer',
        required: true,
        description: 'Site id to SSO into'
      },
      {
        name: 'memberToken',
        type: 'string',
        required: true,
        description: 'Member token of profile you would like to login as'
      },
      {
        name: 'cid',
        type: 'string',
        required: false,
        description: 'A Tracking parameter can be placed on a query string for tracking where a query originated'
      }
    ],
    requestExample: `GET /v6?siteId=64&memberToken=YOUR_MEMBER_TOKEN HTTP/1.1
Host: reservetravel.com`,
    responseExample: `The response is a redirect to the hotel search page with the user authenticated.`,
    responseParameters: [],
    testVsProduction: 'The behavior is identical in both test and production environments for this endpoint.',
    errorCodes: [
      {
        code: '400',
        message: 'Bad Request',
        description: 'Invalid request (missing or invalid parameters)'
      },
      {
        code: '401',
        message: 'Unauthorized',
        description: 'Unauthorized (invalid token)'
      },
      {
        code: '500',
        message: 'Internal Server Error',
        description: 'Internal server error'
      }
    ],
    codeExamples: [
      {
        language: 'html',
        label: 'HTML',
        code: `<!-- Using an HTML link -->
<a href="https://reservetravel.com/v6?siteId=64&memberToken=YOUR_MEMBER_TOKEN">
  Click here to access your account
</a>`
      },
      {
        language: 'javascript',
        label: 'JavaScript',
        code: `// Using JavaScript to redirect
const memberToken = "YOUR_MEMBER_TOKEN"; // From the Create/Update Member response
const siteId = "64";
const url = \`https://reservetravel.com/v6?siteId=\${siteId}&memberToken=\${memberToken}\`;

// Redirect the user
window.location.href = url;`
      },
      {
        language: 'php',
        label: 'PHP',
        code: `<?php
// Using PHP to redirect
$memberToken = "YOUR_MEMBER_TOKEN"; // From the Create/Update Member response
$siteId = "64";
$url = "https://reservetravel.com/v6?siteId=" . $siteId . "&memberToken=" . $memberToken;

// Redirect the user
header("Location: " . $url);
exit;
?>`
      }
    ]
  }
];
