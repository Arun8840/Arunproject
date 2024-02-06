import axios from "axios";

const getSocialAppServices = () => {
  // todo login
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // Add any other headers as needed
  };
  const loginUser = async (credentials: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/login",
      credentials,
      { headers }
    );
    if (response?.data?.status) {
      return response;
    } else {
      return response;
    }
  };

  const loadAllUser = async () => {
    let response = await axios.get("http://localhost:3000/api/allUsers");
    if (response) {
      return response?.data?.data;
    }
  };

  const loadUser = async (userID: string) => {
    let response = await axios.get(
      `http://localhost:3000/api/allUsers/user?id=${userID}`
    );
    if (response) {
      return response?.data?.data;
    }
  };

  const loadUserFriends = async (userID: string) => {
    let response = await axios.get(
      `http://localhost:3000/api/allUsers/friends?id=${userID}`
    );
    if (response) {
      return response?.data?.data;
    }
  };

  const CreateUser = async (userData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/register",
      userData
    );
    if (response) {
      return response;
    }
  };

  const DeleteUser = async (UserID: any) => {
    let response = await axios.delete(
      `http://localhost:3000/api/allUsers/user?id=${UserID}`
    );
    if (response) {
      return response;
    }
  };

  // todo send message
  const sendMessage = async (messageData: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/Message",
      messageData
    );
    if (response) {
      return response;
    }
  };
  // todo load all message
  const loadAllMessages = async (data: any) => {
    let response = await axios.post(
      "http://localhost:3000/api/Message/getallMessages",
      data
    );
    if (response) {
      return response?.data;
    }
  };
  return {
    loadAllUser,
    loadUser,
    CreateUser,
    DeleteUser,
    sendMessage,
    loadAllMessages,
    loginUser,
    loadUserFriends,
  };
};

export default getSocialAppServices;
