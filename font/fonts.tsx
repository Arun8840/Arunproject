import { PT_Sans, Poppins, Space_Grotesk, Work_Sans } from "next/font/google"
const headerFont = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "block",
})

const contentFont = Poppins({
  weight: "500",
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
