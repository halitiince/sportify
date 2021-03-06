module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#1db954",
                camuflage: "#11692a"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}