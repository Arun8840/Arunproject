type ThemeTypes = {
  name: string
  themeName: string
  primary: string
  secondary: string
  sidebar: string
  sidebarFontColor: string
  footer: string
  mainBackground: string
  sugHeader: string
  header: string
  cardColor: string
  cardheader: string
  accent: string
  success: string
  error: string
  warning: string
  cardFontColor: string
  footerFontColor: string
}

export interface UsersTypes {
  _id: string
  name: string
  email: string
  image: string
  activeOn: string
  isPinned: boolean
  notification: boolean
  theme: ThemeTypes | any
  profileImageID: number
}
