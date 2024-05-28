/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa4";
import { md1 } from "vuetify/blueprints";
import { VDataTableServer } from "vuetify/labs/VDataTable";
//import * as components from "vuetify/components";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  // blueprint: md3,
  blueprint: md1,
  theme: {
    defaultTheme: "default",

    themes: {
      default: {
        dark: false,
        colors: {
          bright: "#fff",
          primary: "#363636",
          secondary: "#33d3eb",
          third: "#d78669",
          light: "#33d3eb",
          navText: "#363636",
          thead: "#747474",
          tbody: "#f7f7f5",
          message: "#33d3eb",
          warning: "#e7b7a5",
          submit: "#33d3eb",
          cancel: "#f5e276",
          import: "#363636",
          export: "#087ea6",
          success: "#363636",
        },
      },
    },
  },
  components: {
    VDataTableServer,
    // ...components,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});
