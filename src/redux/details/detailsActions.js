import { GET_USER, REQUEST_FAIL } from "./detailsTypes";
import axios from "axios";

export const get_user = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export const request_fail = (data) => {
  return {
    type: REQUEST_FAIL,
    payload: data,
  };
};

export const getUserDetails = () => {
  let url = "https://randomuser.me/api/";
  return (dispatch) => {
    //   axios.get(url).then((res)=>console.log("hi")).catch
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        dispatch(get_user(response.data));
      })
      .catch((error) => {
        dispatch(request_fail(error.message));
      });
  };
};
