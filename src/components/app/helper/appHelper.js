import axios from "axios";
import Notify from "./Notify";
import { useHistory } from "react-router-dom";
import React from "react";

export const API = process.env.REACT_APP_BACKEND;
//export const API ="http://localhost:3306/" ;
export const PUBLIC_URL = process.env.REACT_APP_BACKEND;
export const PUBLIC_DIR = process.env.REACT_APP_PUBLIC_DIR;

export const handleGetRequest = async (url) => {
  try {
    let finalUrl = `${API}/${url}`;
    const res = await axios.get(finalUrl);
    const response = res.data;
    console.log("---------------------");
    console.log("URL : ");
    console.log(finalUrl);
    console.log("RESPONSE : ");
    console.log(response);
    if (response.success) {
      return response.result;
    } else {
      Notify("error", response.message);
      console.log("error :" + response.message);
    }
  } catch (err) {
    console.error(err);
  }
};
export const handlePostRequest = async (data) => {
  try {
    // let finalUrl = `${API}/${url}`;
    const res = await axios(data);
    const response = res.data;
    console.log(response);
    if (response.success) {
      return response;
    } else {
      //Notify("error", response.message);
      console.log("error :" + response.message);
    }
  } catch (err) {
    console.error(err);
  }
}; /*
export const handlePostRequest = async (url,data) => {
    try {
        let finalUrl = `${API}/${url}`;
        const res = await axios.post(finalUrl,JSON.stringify(data));
        const response = res.data;
        console.log(response);
        if(response.success){
            return response.result;
        }else {
            Notify('error',response.message);
            console.log('error :' + response.message);
        }
    } catch (err) {
        console.error(err);
    }
}*/

/*export const handlePostRequest2 = (url,data) => {
    // Make a GET request
    axios({
        method: 'post',
        url: `${API}/${url}`,
        data: JSON.stringify(data),
    }).then((response) => {
        if(response.success){
            return response.data;
        }else {
            Notify('error',response.message);
        }
    }).catch(function (error) {
        // handle error
        console.log(error);
      //  Notify('error',error);
    });
}*/

export const loader = () => (
  <div className="container">
    <div className="text-center loader-space">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export const GoBackButton = ({ name = "Go Back" }) => {
  let history = useHistory();
  return (
    <>
      <button
        className="backtoproofs btn btn-sm btn-light"
        onClick={() => history.goBack()}
      >
        {" "}
        <i className="fa fa-arrow-left" /> {name}
      </button>
    </>
  );
};
