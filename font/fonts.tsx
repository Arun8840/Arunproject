import { PT_Sans, Poppins, Space_Grotesk, Work_Sans } from "next/font/google"
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

const todoFont = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function useGetFonts() {
  let HeaderFont = headerFont
  let ContentFont = contentFont
  let TodoFonts = todoFont
  return { HeaderFont, ContentFont, TodoFonts }
}

export default useGetFonts
