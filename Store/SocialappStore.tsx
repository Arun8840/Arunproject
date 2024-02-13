import useGetUsersData from "@/data/UsersData"
import getSocialAppServices from "@/service/SocialAppService"
import { create } from "zustand"

const { UsersData } = useGetUsersData()
const { loadAllUser, loadUser, DeleteUser, MuteFriend, UpdateUser } =
  getSocialAppServices()
export const SocialappStore = create((set, get: any) => ({
  UserDatas: UsersData,
  UserDetails: null,
  LoggedUser: {},
  notificationMessage: "",
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

  updateFriend: async (friendData: string) => {
    let response = await UpdateUser(friendData)
    if (response) {
      set((state: any) => ({
        ...state,
        UserDetails: response?.data,
        notificationMessage: response?.message,
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
        UserDetails: response?.data,
        notificationMessage: response?.message,
      }))
      return response?.data
    }
  },

  // todo notification set message
  setNotification: async (message: string) => {
    if (message) {
      set((state: any) => ({
        ...state,
        notificationMessage: message,
      }))
    }
  },

  clearNotification: async () => {
    set((state: any) => ({
      ...state,
      notificationMessage: "",
    }))
  },
}))
