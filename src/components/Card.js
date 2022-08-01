import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = (props) => {
  const [authorname, setauthorname] = useState("")
  const [authorimage, setauthorimage] = useState("")
  let { thumbnail, categories, title, excerpt, id, author_id } = props;

  const url = (path, id) => {
    return path + id;
  };

  useEffect(() => {

    axios.get(url("https://vaibhavsharma3108.pythonanywhere.com/author-info/", author_id)).then((responce) => {
      if (responce.status === 200) {
        setauthorname(responce.data.authorName)
        setauthorimage(responce.data.authorprofile.profile_img)
      }
    })

  }, [author_id])


  return (
    <div class="card  g-0" style={{ "maxwidth": "585px", "maxheight": "500px" }}>
      <div class="row no-gutters">
        <div class="col-md-5  ">
          <img
            src={url("https://vaibhavsharma3108.pythonanywhere.com", thumbnail)}
            class="card-img g-0"
            alt="thumbnail"
            height={"100%"}
            width={"100%"}
          />
        </div>

        <div class="col-md-7  ">
          <div class="card-body p-0 py-2  pr-3">
            <Link
              to={url("/detail/", id)}
              // target="_blank"
              className="text-decoration-none text-dark text-wrap"
            >
              <h3 class="card-title">{title}</h3>
            </Link>

            <div class="d-flex justify-content-between pt-1 ">
              <div class="ml-3">
                {/* USERNAME */}
                <img
                  src={url("https://vaibhavsharma3108.pythonanywhere.com", authorimage)}
                  alt="profile pic"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
                <Link
                  to={url("/profile/", author_id)}
                  style={{
                    "paddingleft": "4px",
                  }}
                  className="text-decoration-none text-dark"
                >
                  {authorname}
                </Link>
              </div>

              <div class="mr-3">
                {/* CATEGORIES */}
                <strong className="d-inline-block  text-primary ">
                  <Link
                    to={url("/category/", categories)}
                    className="text-decoration-none"
                  >
                    {categories}
                  </Link>
                </strong>
              </div>
            </div>

            <hr className="m-1" />
            <p class="card-text " style={{ "maxwidth": "250px" }}>
              {excerpt}text-truncate
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={thumbnail} alt="Thumbnail" />
                <div className="card-body">
                    <strong className="d-inline-block mb-2 text-primary"><Link to={this.url("/category/",categories)}>{categories}</Link> </strong>
                    <h3 className="mb-0">{title.slice(0,45)}</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto mt- text-truncate">{excerpt}</p>
                    <Link to={this.url('/detail/',id)} target="_blank" className="btn btn-outline-dark mt-3">Learn More</Link>
                </div>
            </div>  */
}
