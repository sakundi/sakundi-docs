const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Welcome",
      items: ["user-section/welcome-to-sakundi",
              "user-section/why-sakundi"],
    },
    {
      type: "category",
      label: "Sakundi for Validator nodes",
      items: ["user-section/registration-and-account-setup",
              "user-section/how-to-create-node",
              "user-section/accessing-sakundi-dashboard",
              "user-section/understanding-metrics-and-analytics",
              "user-section/customization-and-configuration",
              "user-section/real-time-alerts-and-notifications",
              "user-section/support-and-resources"],
    },
    {
      type: "category",
      label: "Tikuna - Our Open Source code base",
      items: ["user-section/how-to-use-tikuna",
              "user-section/understanding-dashboards"],
    },
    {
      type: "category",
      label: "Research",
      items: ["research/intro",
              "research/stateoftheart",
              "research/references",
              "research/glossary"],
    },
    {
      type: "category",
      label: "About",
      items: ["about/team", "about/sakundi"],
    },
  ],
};

module.exports = sidebars;
