import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from "../components/Card"
import InfiniteScroll from "react-infinite-scroll-component";
import { Alert } from 'react-bootstrap';
function Searchpage() {
  const [blogs, setblogs] = useState([])
  const [page, setPage] = useState(1)
  const [search, setsearch] = useSearchParams()
  const [error, seterror] = useState("")
  const [hasMore, sethasMore] = useState(true)
  const [visiblety, setvisiblety] = useState(error !== "" ? true : false)

  useEffect(() => {
    try {
      axios
        .get(
          "https://vaibhavsharma3108.pythonanywhere.com/postsearchveiw?page=" +
          page +
          "&search=" +
          search.get("s")
        )
        .then((response) => {
          if (response.status === 200 && response.statusText === "OK") {
            console.log(response.data.results);
            setblogs([...blogs, ...response.data.results]);
            if (response.data.results.length < 9) {
              sethasMore(false);
            }
          } else {
            seterror("Request Time Out");
          }
        })
        .catch((error) => {
          seterror(error)
        });

    } catch (error) {

    }

  }, [search.get("s")])

  return (
    <div className="container mt-3">
      {visiblety === true ? (
        <Alert
          variant="danger"
          onClose={() => setvisiblety(false)}
          dismissible
        >
          {error}
        </Alert>
      ) : null}
      <h1 className="display-4">Search</h1>
      <hr />

      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={() => {
          setPage(page + 1);
        }}
        hasMore={hasMore}
        loader={
          <div className="text-center mt-5">
            <div className="spinner-grow text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        className="row"
      >
        {blogs.map((element) => {
          return (
            <div className="col-md-4 " key={element.id}>
              <Card
                thumbnail={element.thumbnail_url}
                categories={element.categories}
                title={element.title}
                excerpt={element.excerpt}
                id={element.id}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Searchpage