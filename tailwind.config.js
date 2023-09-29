/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            algeti: 'BPG Algeti',
            lato: 'Lato',
        },
    },
    plugins: [],
}
