import React, { useEffect, useState } from "react";
import axios from "axios";
import Userpost from "./Userpost"
const Userdetails = (props) => {
  const currentuser = localStorage.getItem("userid")
  const [Publishedpost, setpublishedpost] = useState([])
  const [draftpost, setdraftpost] = useState([])
  const [userprofile, setuserprofile] = useState({})
  const [username, setusername] = useState("")

  const url = (link, id) => {
    return link + id
  }

  useEffect(() => {

    axios.get(url("https://vaibhavsharma3108.pythonanywhere.com/postsofspecificanddata/", props.id)).then((response) => {
      if (response.status === 200) {
        setusername(response.data.username)
        setuserprofile(response.data.userprofile)
        setpublishedpost(response.data.userpublisedpost)
        setdraftpost(response.data.userdraftpost)
      }
    })

  }, [props.id])


  return (
    <>
      <div class="d-flex position-relative flex-sm-row flex-column">
        <div>
          <div className="card border-0">
            <img
              src={url("https://vaibhavsharma3108.pythonanywhere.com", userprofile.profile_img)}
              alt="profile image"
              className="flex-shrink-0 mx-auto d-block rounded-circle"
              width={300}
              height={300}
            />
            <div class="card-body text-center">
              <h4 class="card-title ">{username}</h4>
            </div>
          </div>
        </div>

        <div className="m-4 p-2 ">
          <h1>About Me</h1>
          <p>
            {userprofile.about_you}
          </p>

          {currentuser !== props.id ?
            <a href="#" class="btn btn-primary">
              Follow
            </a> :
            <a href="#" class="btn btn-primary">
              Edit Profile
            </a>}

        </div>
      </div>
      <Userpost publishedposts={Publishedpost} draftposts={draftpost} />
    </>
  );
};

export default Userdetails;
