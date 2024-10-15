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
