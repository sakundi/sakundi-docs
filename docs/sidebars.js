const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Welcome",
      items: ["welcome-to-sakundi.md"],
    },
    {
      type: "category",
      label: "Sakundi for Validator nodes",
      items: ["user-section/accessing-sakundi-dashboard.md",
              "user-section/registration-and-account-setup.md",
              "user-section/managing-validator-nodes.md",
              "user-section/understanding-metrics-and-analytics.md",
              "user-section/customization-and-configuration.md",
              "user-section/real-time-alerts-and-notifications.md",
              "user-section/support-and-resources.md"],
    },
    {
      type: "category",
      label: "Tikuna - our Open Source base",
      items: ["user-section/how-to-use-tikuna",
              "user-section/understanding-dashboards",
              "monitoring/network-eth2",
              "monitoring/beacon-node",
              "monitoring/eclipse-attacks"],
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
