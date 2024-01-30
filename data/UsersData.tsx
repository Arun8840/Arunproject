import { UsersTypes } from "@/model/SocialAppTypes"

function useGetUsersData() {
  let UsersData: UsersTypes[] = [
    {
      name: "John Doe",
      image: "",
      activeOn: "4m",
      isPinned: true,
      notification: false,
    },
    {
      name: "Jane Smith",
      image: "",
      activeOn: "2m",
      isPinned: false,
      notification: true,
    },
    {
      name: "David Johnson",
      image: "",
      activeOn: "6m",
      isPinned: false,
      notification: true,
    },
    {
      name: "Sarah Wilson",
      image: "",
      activeOn: "2m",
      isPinned: true,
      notification: true,
    },
    {
      name: "Michael Brown",
      image: "",
      activeOn: "10m",
      isPinned: false,
      notification: false,
    },
    {
      name: "Emily Davis",
      image: "",
      activeOn: "3m",
      isPinned: false,
      notification: true,
    },
    {
      name: "Andrew Taylor",
      image: "",
      activeOn: "6m",
      isPinned: true,
      notification: true,
    },
    {
      name: "Olivia Martinez",
      image: "",
      activeOn: "2h",
      isPinned: false,
      notification: false,
    },
    {
      name: "Daniel Anderson",
      image: "",
      activeOn: "20m",
      isPinned: false,
      notification: true,
    },
    {
      name: "Sophia Thomas",
      image: "",
      activeOn: "1h",
      isPinned: true,
      notification: true,
    },
  ]

  return { UsersData }
}

export default useGetUsersData
