interface NavLink {
  title: string;
  path: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

interface NavigationConfig {
  [key: string]: {
    sections: NavSection[];
  };
}

const navigation: NavigationConfig = {
  apiReference: {
    sections: [
      {
        title: "SSO API Endpoints",
        links: [
          { title: "Retrieve Admin Bearer Token", path: "/endpoints/sso/admin-token" },
          { title: "Create/Update Member", path: "/endpoints/sso/member-upsert" },
          { title: "Deep-link to Hotel Search", path: "/endpoints/sso/deep-link" }
        ]
      }
    ]
  },
  technicalReference: {
    sections: [
      {
        title: "Technical Reference",
        links: [
          { title: "Environment Variables", path: "/technical-reference/environment-variables" },
          { title: "Member Data Structure", path: "/technical-reference/member-data-structure" },
          { title: "Authentication", path: "/technical-reference/authentication" },
          { title: "Error Codes", path: "/technical-reference/error-codes" }
        ]
      }
    ]
  },
  support: {
    sections: []
  }

};

export default navigation;
