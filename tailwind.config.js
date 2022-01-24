module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myRed: "hsl(0, 100%, 74%)",
        myGreen: "hsl(154, 59%, 51%)",
        myBlue: "hsl(248, 32%, 49%)",
        myDarkBlue: "hsl(249, 10%, 26%)",
        myGrayishBlue: "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url(images/bg-intro-mobile.png)",
        desktop: "url(images/bg-intro-desktop.png)",
      },
    },
  },
  plugins: [],
};