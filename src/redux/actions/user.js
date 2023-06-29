import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const data = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    console.log("madhilu", data);
    dispatch({
      type: "LoadUserSuccess",
      payload: data.data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const data = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    // console.log("madhu", data);
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};
