import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6499E9",
        secondaire:"#181E4B",
        buttons: "#6499E9", 
        blue_fance:"#181E4B"
      },
      fonts: {
        import: [
          {
            family: "Inter",
            weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
          },
          {
            family: "Poppins",
            weights: ["200", "400", "500"],
          },
          {
            family: "Volkhov",
            styles: ["italic", "normal"],
            weights: ["400", "700"],
          },
        ]
      }
    },
  },
  plugins: [flowbite.plugin()],
};
