import React from "react";
import { useParams } from "react-router-dom";
import Userdetails from "../components/Userdetails";

const Profile = () => {
  let {id} = useParams()
  return (
    <>
      {/* <div>Profile</div> */}
      <div className="container">
        <h1 className="display-4 mt-5 mb-5">Profile</h1>
        <Userdetails id={id}/>

      </div>
    </>
  );
};

export default Profile;
