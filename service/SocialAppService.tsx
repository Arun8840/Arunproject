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


  const loadAllUser = async () => {
    let response = await axios.get("http://localhost:3000/api/socialapp")
    if (response) {
      return response?.data?.allUsers
    }
  }

  const loadUser = async (userID: string) => {
    let response = await axios.get(
      `http://localhost:3000/api/socialapp/${userID}`
    )
    if (response) {
      return response?.data?.data
    }
  }

  const CreateUser = async (userData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/socialapp",
      userData
    )
    if (response) {
      return response
    }
  }

  const DeleteUser = async (UserID: any) => {
    let response = await axios.delete(
      `http://localhost:3000/api/socialapp?id=${UserID}`
    )
    if (response) {
      return response
    }
  }

  // todo send message
  const sendMessage = async (messageData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/Message",
      messageData
    )
    if (response) {
      return response
    }
  }
  // todo load all message
  const loadAllMessages = async (data: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/Message/getallMessages",
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
  }
}

export default getSocialAppServices
