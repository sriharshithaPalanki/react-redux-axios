import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { getUserDetails } from "../../redux/details/detailsActions";

function Details() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.details);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    dispatch(getUserDetails());
    return () => {
      setName("");
      setMail("");
    };
  }, []);

  useEffect(() => {
    console.log(userDetails);
    if (userDetails.results && userDetails.results.length > 0) {
      setName(
        userDetails.results[0].name.title +
          ". " +
          userDetails.results[0].name.first +
          " " +
          userDetails.results[0].name.last
      );
      setMail(userDetails.results[0].email);
    }
  }, [userDetails]);

  return (
    <>
      <h4>Details</h4>
      <h6>Name : {name}</h6>
      <h6>Email : {mail}</h6>
    </>
  );
}

export default Details;
