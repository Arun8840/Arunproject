import axios from "axios"

const getSocialAppServices = () => {
  const loadAllUser = async () => {
    let response = await axios.get("http://localhost:3000/api/socialapp")
    if (response) {
      return response?.data?.allUsers
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
  return {
    loadAllUser,
    CreateUser,
    DeleteUser,
  }
}

export default getSocialAppServices
