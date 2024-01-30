import useGetUsersData from "@/data/UsersData"
import { create } from "zustand"

const { UsersData } = useGetUsersData()

export const SocialappStore = create((set, get: any) => ({
  UserDatas: UsersData,
  UserDetails: {},
  SelectUser: (user: any) => {
    set((state: any) => ({
      ...state,
      UserDetails: user,
    }))
  },
}))
