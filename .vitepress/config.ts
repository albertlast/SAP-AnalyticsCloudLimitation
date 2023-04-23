import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SAP-Analytics Cloud Limitation",
  description: "Documentation the limitation of Analytics Cloud",
  lang: "en",
  base: "/SAP-AnalyticsCloudLimitation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "General", link: "/general" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "General", link: "/general" },
          { text: "CSS", link: "/css" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/albertlast/SAP-AnalyticsCloudLimitation",
      },
    ],
  },
});
