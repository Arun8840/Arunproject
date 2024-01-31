import useGetUsersData from "@/data/UsersData"
import getSocialAppServices from "@/service/SocialAppService"
import { create } from "zustand"

const { UsersData } = useGetUsersData()
const { loadAllUser } = getSocialAppServices()
export const SocialappStore = create((set, get: any) => ({
  UserDatas: UsersData,
  UserDetails: {},
  SelectUser: (user: any) => {
    set((state: any) => ({
      ...state,
      UserDetails: user,
    }))
  },

  loadAllUsers: async () => {
    let response = await loadAllUser()
    if (response) {
      set((state: any) => ({
        ...state,
        UserDatas: response,
      }))
      return response
    }
  },
}))
