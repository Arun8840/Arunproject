import { SocialappStore } from "@/Store/SocialappStore"

const useGetFriendThemes = () => {
  const ThemeData = SocialappStore((state: any) => state.UserDetails)
  const theme = ThemeData?.theme
  if (ThemeData) {
    return { theme }
  }
  return { primary: "", secondary: "" }
}

export default useGetFriendThemes
