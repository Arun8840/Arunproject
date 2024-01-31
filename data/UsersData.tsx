import { UsersTypes } from "@/model/SocialAppTypes"

function useGetUsersData() {
  let UsersData: UsersTypes[] = [
    {
      name: "John Doe",
      image: "",
      activeOn: "4m",
      isPinned: true,
      theme:{
        name: "Dune",
        themeName: "Frank Herbert",
        primary: "#F9A825",
        secondary: "#FFD54F",
        sidebar: "#FF8F00",
        sidebarFontColor: "#101010",
        footer: "#FF6F00",
        mainBackground: "#212121",
        sugHeader: "#FFAB00",
        header: "#FF6F00",
        cardColor: "#424242",
        cardheader: "#FF6F00",
        accent: "#FF3D00",
        success: "#00C853",
        error: "#D50000",
        warning: "#FFAB00",
        cardFontColor: "#FFFFFF",
        footerFontColor: "#000000",
      },
      notification: false,
    },
    {
      name: "Jane Smith",
      image: "",
      activeOn: "2m",
      isPinned: false,
      theme:{},
      notification: true,
    },
    {
      name: "David Johnson",
      image: "",
      activeOn: "6m",
      isPinned: false,
      theme:{},
      notification: true,
    },
    {
      name: "Sarah Wilson",
      image: "",
      activeOn: "2m",
      isPinned: true,
      theme:{},
      notification: true,
    },
    {
      name: "Michael Brown",
      image: "",
      activeOn: "10m",
      isPinned: false,
      theme:{},
      notification: false,
    },
    {
      name: "Emily Davis",
      image: "",
      activeOn: "3m",
      isPinned: false,
      theme:{},
      notification: true,
    },
    {
      name: "Andrew Taylor",
      image: "",
      activeOn: "6m",
      isPinned: true,
      theme:{},
      notification: true,
    },
    {
      name: "Olivia Martinez",
      image: "",
      activeOn: "2h",
      isPinned: false,
      theme:{},
      notification: false,
    },
    {
      name: "Daniel Anderson",
      image: "",
      activeOn: "20m",
      isPinned: false,
      theme:{},
      notification: true,
    },
    {
      name: "Sophia Thomas",
      image: "",
      activeOn: "1h",
      isPinned: true,
      theme:{},
      notification: true,
    },
  ]

  return { UsersData }
}

export default useGetUsersData
