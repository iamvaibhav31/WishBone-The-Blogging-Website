import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Categorybar from "../components/Categorybar";
import like from "../components/static/image & SVG/like.svg";
import comment from "../components/static/image & SVG/comment.svg";
import share from "../components/static/image & SVG/share.svg";
import Comments from "../components/Comments";
import Commentform from "../components/Commentform";

const BlogDetail = () => {
  const { id } = useParams();
  const [authorname, setauthorname] = useState("");
  const [blogdetail, setblogdetail] = useState({});
  const [Authordata, Setauthordata] = useState({});
  const [RecentPost, setRecentPost] = useState([]);
  const url = (link, id) => {
    return link + id;
  };

  useEffect(() => {
    try {
      axios
        .get(url("https://vaibhavsharma3108.pythonanywhere.com/postdetails/", id))
        .then((response) => {
          setblogdetail(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  console.log(blogdetail);

  useEffect(() => {
    try {
      axios
        .get(url("https://vaibhavsharma3108.pythonanywhere.com/author-info/", blogdetail.author))
        .then((response) => {
          setRecentPost(response.data.autherrecentpost);
          Setauthordata(response.data.authorprofile);
          setauthorname(response.data.authorName);
        });
    } catch (err) {
      console.log(err);
    }
  }, [blogdetail.author]);

  console.log(Authordata);

  return (
    <>
      <div className="container mt-1">
        <Categorybar />
        <img
          className="mt-3 img-fluid rounded-3"
          // style={{ width: " 100%", height: "32rem" }}
          src={url("https://vaibhavsharma3108.pythonanywhere.com", blogdetail.thumbnail_url)}
          alt="blogthumnail"
        />

        <div class="row">
          <div class="col">
            <h1 className="d-inline-block display-4 mt-3 text-capitalize">
              {blogdetail.title}
            </h1>
            <div className="caption">
              <p>{blogdetail.categories}</p>
            </div>
          </div>
          <div class="col col-lg-2 align-self-center ">
            <Link to={"/"} className="text-muted text-decoration-none ">
              <img
                src={url("https://vaibhavsharma3108.pythonanywhere.com", Authordata.profile_img)}
                alt="profile pic"
                width="32"
                height="32"
                className="rounded-circle"
              />
              <div className="caption">
                <h5>@{authorname}</h5>
              </div>
            </Link>
          </div>
          <div class="col-md-auto align-self-center">
            <button type="button" className="btn btn-outline-primary ">
              Follow
            </button>
          </div>
        </div>

        <hr />

        <div className="row g-5 mt-1">
          <div className="col-md-9">
            <article className="blog-post">
              <div dangerouslySetInnerHTML={{ __html: blogdetail.content }} />
            </article>
          </div>

          <div className="col-md-3">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-2 mb-2 bg-light rounded">
                <div className="row justify-content-between align-items-center">
                  <div className="col justify-content-between align-items-center">
                    <Link to={"/"} className="text-muted text-decoration-none">
                      <img
                        src={like}
                        alt="Like"
                        style={{ width: "1.25rem", height: "1.25rem" }}
                      />
                      <div className="caption">
                        <p>Like</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col justify-content-between align-items-center">
                    <Link to={"/"} className="text-muted text-decoration-none">
                      <img
                        src={comment}
                        alt="Comments"
                        style={{ width: "1.25rem", height: "1.25rem" }}
                      />
                      <div className="caption">
                        <p>Comments</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col justify-content-between align-items-center">
                    <Link to={"/"} className="text-muted text-decoration-none">
                      <img
                        src={share}
                        alt="Share"
                        style={{ width: "1.25rem", height: "1.25rem" }}
                      />
                      <div className="caption">
                        <p>Share</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr className="m-0" />
              </div>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About Me</h4>
                <p className="mb-0">{Authordata.about_you}</p>
              </div>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">Recent Post</h4>
                {RecentPost.map((element) => {
                  return (
                    <>
                      <div class="d-flex w-100 p-2">
                        <div class="w-35 ">
                          <img
                            src={url(
                              "https://vaibhavsharma3108.pythonanywhere.com",
                              element.thumbnail_url
                            )}
                            class="flex-shrink-0 me-3 rounded-3"
                            alt=""
                            width={70}
                            height={60}
                          />
                        </div>
                        <div class="w-75 text-wrap ">
                          <Link
                            to={url("/detail/", element.id)}
                            target="_blank"
                            className="text-decoration-none text-dark"
                          >
                            <h5 class="my-auto ">{element.title}</h5>
                          </Link>
                          <strong className="d-inline-block  text-primary ">
                            <Link
                              to={url("/category/", element.categories)}
                              className="text-decoration-none"
                            >
                              {element.categories}
                            </Link>
                          </strong>
                        </div>
                      </div>
                      {/* <hr /> */}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Commentform id={id} />
        <Comments id={id} />
      </div>
    </>
  );
};

export default BlogDetail;
