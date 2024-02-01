import useGetUsersData from "@/data/UsersData"
import getSocialAppServices from "@/service/SocialAppService"
import { create } from "zustand"

const { UsersData } = useGetUsersData()
const { loadAllUser, loadUser } = getSocialAppServices()
export const SocialappStore = create((set, get: any) => ({
  UserDatas: UsersData,
  UserDetails: {},
  LoggedUser: {},
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

  loadloggedUser: async (userID: string) => {
    let response = await loadUser(userID)
    if (response) {
      set((state: any) => ({
        ...state,
        LoggedUser: response,
      }))
    }
  },

  loadParticularUser: async (userID: string, imageID: number) => {
    let response = await loadUser(userID)
    let data = { ...response, profileImageID: imageID }
    if (response) {
      set((state: any) => ({
        ...state,
        UserDetails: data,
      }))
    }
  },
}))
