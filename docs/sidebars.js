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
      items: ["accessing-sakundi-dashboard.md",
              "registration-and-account-setup.md",
              "managing-validator-nodes.md",
              "understanding-metrics-and-analytics.md",
              "customization-and-configuration.md",
              "real-time-alerts-and-notifications.md",
              "support-and-resources.md"],
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
