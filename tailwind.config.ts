module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./Utility/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        top: "0px -2px 2px rgba(253,250,250,0.925)",
        customdragshadow: "0px 0px 10px #666666",
        customshortshadow: "0px 0px 3px cadetblue",
        dropbox_shadow:
          "inset 1px 1px 8px #c1d6f5, inset -1px -1px 8px #c1d6f5",
        VPC_droping_shadow:
          "inset 1px 1px 8px green, inset -1px -1px 8px green",
        boxshadow: "0px 0px 5px #e3e3e3",
        sidebarShadow: "2px 0px 10px #e3e3e3",
        sideModelShadow: "-1px 0px 14px #787878",
        deleteModelShadow: "inset 0 0 0 400px #eeeeee",
        deleteModelHoverShadow: "inset 0 0 0 400px #00000000",
        paymenuCard_shadow: "-7px 7px 0px #222831, -12px 13px 0px #454545",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        6: "repeat(6, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24  /span 24",
      },
      colors: {
        bg: "rgba(0, 0, 0, 0.682)",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1040px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
}
