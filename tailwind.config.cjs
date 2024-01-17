/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#F16E0F",
      secondary: "#247084",
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      stone: colors.stone,
      blue: colors.blue,
      green: colors.green,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      pumpkin: "#F16E0F",
      tangerine: "#EF9A6B",
      cerulean: "#247084",
      bgLight: "#FBFBFB",
      bgDark: "#151419",
      txDark: "#1B1B1E",
      txLight: "#D4D4D6"
    },
    extend: {
      translate: ["dark"],
      animation: {
        'skew-scroll': 'skew-scroll 20s linear infinite',
      },
      fontFamily: {
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			}
    },
    keyframes: {
      'skew-scroll': {
        '0%': {
          transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
        },
        '100%': {
          transform:
            'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("flowbite/plugin")
  ],
  darkMode: "class"
};
