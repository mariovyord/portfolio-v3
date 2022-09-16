const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': colors.slate[200],
                'primary-focus': colors.slate[500],
                'primary-content': colors.slate[700],
                'secondary': colors.lime[500],
                'secondary-focus': colors.lime[400],
                'secondary-content': colors.white,
                'accent': colors.orange[500],
                'accent-focus': colors.orange[600],
                'accent-content': colors.white,
                'base': colors.white,
                'base-darker': colors.slate[300],
                'base-darkest': colors.slate[400],
                'base-content': colors.slate[700],
                'info': colors.orange[500],
                'info-content': colors.white,
                'success': colors.cyan[600],
                'success-content': colors.cyan[100],
                'warning': colors.amber[600],
                'warning-content': colors.amber[100],
                'error': colors.red[700],
                'error-content': colors.red[100],
            }
        },
    },
    plugins: [],
}
