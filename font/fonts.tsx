import { Poppins, Space_Grotesk } from "next/font/google"
const headerFont = Space_Grotesk({
  weight: "600",
  subsets: ["latin"],
  display: "block",
})

const contentFont = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function useGetFonts() {
  let HeaderFont = headerFont
  let ContentFont = contentFont

  return { HeaderFont, ContentFont }
}

export default useGetFonts
