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
import { md3 } from "vuetify/blueprints";
import * as components from 'vuetify/components'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "default",

    themes: {
      default: {
        dark: false,
        colors: {
          bright: "#fff",
          primary: "#331919",
          secondary: "#bf5f46",
          third: "#d78669",
          light: "#fc590f",
          navText: "#331919",
          thead: "#695f5f",
          tbody: "#f7f7f5",
          message: "#fc590f",
          warning: "#e7b7a5",
          submit: "#331919",
          cancel: "#91746c",
          import: "#331919",
          export: "#91746c",
          cardBg: "#f7f7f5",
          success: "#331919",
          // customActiveColor:
          // background: "#fff",
          // surface: "#212121",
        },
      },
      green: {
        dark: false,
        colors: {
          primary: "#331919",
          secondary: "#1f6053", //"#852648",
          third: "#d78669",
          light: "#36e79e",
          navText: "#331919",
          thead: "#695f5f",
          tbody: "#f7f7f5",
          message: "#7f3651",
          warning: "#72cebc",
          submit: "#331919",
          cancel: "#91746c",
          import: "#331919",
          export: "#91746c",
          cardBg: "#f7f7f5",
          success: "#331919",
          // customActiveColor:
          // background: "#fff",
          // surface: "#212121"
        },
      },
      blue: {
        dark: false,
        colors: {
          primary: "#331919",
          secondary: "#0786b2",
          third: "#d78669",
          light: "#00f0ff",
          navText: "#331919",
          thead: "#695f5f",
          tbody: "#f7f7f5",
          message: "#073a63",
          warning: "#aedff0",
          submit: "#331919",
          cancel: "#91746c",
          import: "#331919",
          export: "#91746c",
          cardBg: "#f7f7f5",
          success: "#331919",
          // customActiveColor:
          // background: "#fff",
          // surface: "#212121"
        },
      },
      red: {
        dark: false,
        colors: {
          primary: "#331919",
          secondary: "#852648",
          third: "#d78669",
          light: "#ff378c",
          navText: "#331919",
          thead: "#695f5f",
          tbody: "#f7f7f5",
          message: "#8b2a4d",
          warning: "#c989a0",
          submit: "#331919",
          cancel: "#91746c",
          import: "#331919",
          export: "#91746c",
          cardBg: "#f7f7f5",
          success: "#331919",
        },
      },
      dark: {
        dark: true,
        colors: {
          bright: "#232323",
          secondary: "#bf5f46",
          primary: "#fefefe",
          light: "#fc590f",
          submit: "#fefefe",
          thead: "#695f5f",
          tbody: "#f7f7f5",
          cancel: "#91746c",
          import: "#fefefe",
          export: "#91746c",
          success: "#fefefe",
        },
      },
    },
  },
  components: {
    ...components
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
