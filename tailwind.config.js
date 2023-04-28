/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        scale: {
            '140':'1.4'
        },
        extend: {
            colors: {
                "btn-yellow": "#ffbd2e",
                facebook: "#4267B2",
                twitter: "#1DA1F2",
                linkedin: "#0e76a8",
                github: "#171515",
                card: "rgb(184,175,166)",
            },
        },
    },
    plugins: [],
};
