/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            margin: {
                13: "3.25rem",
            },
            fontFamily: {
                ubuntu: "Ubuntu",
            },
            colors: {
                pumpkin: "#d35400",
                wisteria: "#8e44ad",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
