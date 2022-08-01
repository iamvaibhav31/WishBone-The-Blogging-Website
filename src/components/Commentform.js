import axios from "../utils/AxiosInstance";
import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";

const Commentform = (props) => {

  const [comment, setcomment] = useState("");
  const userprofilepic = localStorage.getItem("userprofilepic")
  const onchangecomment = (event) => {
    // console.log(event.target.value)
    setcomment(event.target.value);
  };

  const url = (link, id) => {
    return
  }

  const onclickpost = () => {
    try {
      axios
        .post(url("createcomments/", props.id), {
          comment: comment
        })
        .then((response) => {
          if (response.status === 200) {

            console.log(response.data);
          }

        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div class="d-flex flex-start mb-4">
        <img
          class="rounded-circle shadow-1-strong me-3"
          src={url("https://vaibhavsharma3108.pythonanywhere.com", userprofilepic)}
          alt="avatar"
          width="65"
          height="65"
        />
        <div class="card w-100 border-0">
          <div class="card-body p-2">

            <div class="mb-3">
              <label for="comment" class="form-label">
                Comment
              </label>
              <textarea
                class="form-control"
                id="comment"
                rows="3"
                value={comment}
                onChange={onchangecomment}
                name="comments"
              ></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a
                class="btn btn-primary me-md-2"
                type="subit"
                onSubmit={onclickpost}
              >
                Post
              </a>
              <a class="btn btn-outline-primary" type="button" onSubmit={() => setcomment}>
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commentform;
