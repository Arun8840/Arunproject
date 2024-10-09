import {
  Barlow_Condensed,
  Bebas_Neue,
  Hind,
  Oswald,
  PT_Sans,
  Poppins,
  Space_Grotesk,
  Titillium_Web,
  Work_Sans,
} from "next/font/google"
const headerFont = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "block",
})

const contentFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})

const todoFont = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
const bannerHeader = Bebas_Neue({
  weight: "400",
  subsets: ["latin-ext"],
  display: "block",
})

function useGetFonts() {
  let HeaderFont = headerFont
  let ContentFont = contentFont
  let TodoFonts = todoFont
  return { HeaderFont, ContentFont, TodoFonts, bannerHeader }
}

export default useGetFonts
