import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import like from './static/image & SVG/like-svgrepo-com.svg'
import dislike from './static/image & SVG/dislike-svgrepo-com.svg'

const Comments = (props) => {
  const [comments, setcomments] = useState([]);
  const url = (link, id) => {
    return link + id;
  };

  useEffect(() => {
    try {
      axios
        .get(url("https://vaibhavsharma3108.pythonanywhere.com/comments/", props.id))
        .then((response) => {

          setcomments(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [props.id]);

  const commentdata = () => {
    let result = [];
    comments.map((comment) => {
      return result.push(
        <div className="d-flex flex-start mb-4">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="profilepic"
            width="65"
            height="65"
          />
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="">
                <h5>{comment.author}</h5>
                {/* <p className="small">3 hours ago</p> */}
                <p>{comment.comment}</p>
                {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Link to={"/"} className="link-muted me-2">
                    <img src={like} className="bi" width="18" height="18"  />
                      132
                    </Link>
                    <Link to={"/"} className="link-muted">
                      <img src={dislike} className="bi" width="18" height="18"  />
                      15
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return result
  };

  return (
    <>
      {commentdata()}
    </>
  );
};

export default Comments;
