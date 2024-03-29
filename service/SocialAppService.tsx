import axios from "axios"

const getSocialAppServices = () => {
  // todo login
  const loginUser = async (credentials: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/login",
      credentials
    )
    if (response?.data?.status) {
      return response
    } else {
      return response
    }
  }

  // todo load all user data
  const loadAllUser = async () => {
    let response = await axios.get("http://localhost:3000/api/allUsers")
    if (response) {
      return response?.data?.data
    }
  }

  // todo particular user
  const loadUser = async (userID: string) => {
    let response = await axios.get(
      `http://localhost:3000/api/allUsers/user?id=${userID}`
    )
    if (response) {
      return response?.data?.data
    }
  }

  // todo load users friends
  const loadUserFriends = async (userID: string) => {
    let response = await axios.get(
      `http://localhost:3000/api/allUsers/friends?id=${userID}`
    )
    if (response) {
      return response?.data?.data
    }
  }

  // todo create friends
  const CreateUser = async (userData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/register",
      userData
    )
    if (response) {
      return response
    }
  }

  // todo delete friend
  const DeleteUser = async (UserID: any) => {
    let response = await axios.delete(
      `http://localhost:3000/api/allUsers/user?id=${UserID}`
    )
    if (response) {
      return response
    }
  }

  const UpdateUser = async (UserData: any) => {
    let response = await axios.put(
      `http://localhost:3000/api/allUsers/updateUser`,
      UserData
    )
    if (response) {
      return response?.data
    }
  }

  const MuteFriend = async (friendData: any) => {
    let response = await axios.put(
      `http://localhost:3000/api/allUsers/user`,
      friendData
    )
    if (response) {
      return response?.data
    }
  }

  // todo send message
  const sendMessage = async (messageData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/message",
      messageData
    )
    if (response) {
      return response
    }
  }
  // todo load all message
  const loadAllMessages = async (data: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/message/getAllMessages",
      data
    )
    if (response) {
      return response?.data
    }
  }
  return {
    loadAllUser,
    loadUser,
    CreateUser,
    DeleteUser,
    sendMessage,
    loadAllMessages,
    loginUser,
    loadUserFriends,
    MuteFriend,
    UpdateUser,
  }
}

export default getSocialAppServices
