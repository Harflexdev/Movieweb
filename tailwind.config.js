/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('https://res.cloudinary.com/dicxuebms/image/upload/v1727100435/wsfgedyuielsxq6fajrh.jpg')",
      }),
    },
  },
  plugins: [],
}

