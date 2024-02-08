import useGetUsersData from "@/data/UsersData"
import getSocialAppServices from "@/service/SocialAppService"
import { create } from "zustand"

const { UsersData } = useGetUsersData()
const { loadAllUser, loadUser, DeleteUser, MuteFriend } = getSocialAppServices()
export const SocialappStore = create((set, get: any) => ({
  UserDatas: UsersData,
  UserDetails: null,
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

  loadParticularUser: async (friendID: string) => {
    let response = await loadUser(friendID)
    if (response) {
      set((state: any) => ({
        ...state,
        UserDetails: response,
      }))
    }
  },

  deleteFriend: async (friendID: string) => {
    let response = await DeleteUser(friendID)
    if (response) {
      set((state: any) => ({
        ...state,
        UserDetails: null,
      }))
      return response
    }
  },

  // todo mute and unmute friends
  isMuteFriend: async (friendData: string) => {
    let response = await MuteFriend(friendData)
    if (response) {
      set((state: any) => ({
        ...state,
        UserDetails: response,
      }))
      return response
    }
  },
}))
