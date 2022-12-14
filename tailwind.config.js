/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'right': "-10px -5px 15px rgba(0, 0, 0, .1) inset"
      },
      maxWidth: {
        'img':"150px"
      },
      minWidth: {
        'table_commits': '935px',
        'table_repos': '635px'
      }
    },
  },
  plugins: [],
}