module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F9A51A",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}