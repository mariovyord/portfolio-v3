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
                'primary': colors.lime[500],
                'primary-focus': colors.lime[600],
                'primary-content': colors.slate[800],
                'primary-content-focus': colors.lime[900],
                'accent': colors.fuchsia[500],
                'accent-focus': colors.fuchsia[600],
                'accent-content': colors.slate[900],
                'base': colors.slate[800],
                'base-darker': colors.slate[900],
                'base-content': colors.slate[50],
                'info': colors.orange[500],
                'info-content': colors.white,
                'success': colors.cyan[600],
                'success-content': colors.cyan[100],
                'warning': colors.amber[600],
                'warning-content': colors.amber[100],
                'error': colors.red[700],
                'error-content': colors.red[100],
            },
            fontFamily: {
                serif: ['Libre Baskerville', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'mono'],
            }
        },
    },
    plugins: [require('@tailwindcss/typography'),],
}
