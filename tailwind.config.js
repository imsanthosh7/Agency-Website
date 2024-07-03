
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    
    
  ],
  theme: {
    extend: {
      colors:{
        'neutralsliver':'#F5F7FA',
        'neutralGray':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neutralGray':'#717171',
        'gray900':'#18191F',
      }
    },
  },
  
  plugins: [
    flowbite.plugin(),
  ],
};
