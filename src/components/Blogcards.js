import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import Blog from "./static/image & SVG/blogger.svg"
import Card from './Card'
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Blogcards = () => {
    const [blogs, setblogs] = useState([])
    const [Page, setPage] = useState(1)
    const [error, seterror] = useState("")
    const [hasMore, sethasMore] = useState(true)


    useEffect(() => {
        const url = (link, page) => {
            return link + page.toString()
        }
        axios.get(url("https://vaibhavsharma3108.pythonanywhere.com/posts?page=", Page)).then((response) => {
            if (response.status === 200 && response.statusText === "OK") {
                console.log(response.data.results)
                setblogs([...blogs, ...response.data.results])
                if (response.data.results.length < 9) {
                    sethasMore(false)
                }

            } else {
                // toast.error("Request Time Out",{position:toast.POSITION.BOTTOM_RIGHT})
                seterror("Request Time Out")
            }
        }).catch((err) => {
            // toast.error(err,{position:toast.POSITION.BOTTOM_RIGHT})
            seterror(err)
        })

    }, [Page])


    useEffect(() => {
        if (error !== "") {
            console.log(error)
            toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT })
        }
    }, [error])

    return (
        <>
            {(error === "") ?

                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={() => { setPage(Page + 1) }}
                    hasMore={hasMore}
                    loader={<div className="text-center mt-5">
                        <div className="spinner-grow text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                    className='row'
                >
                    {blogs.map(
                        (element) => {
                            return <div className='col-md-6 justify-content-center align-items-center mt-3' key={element.id}>
                                <Card thumbnail={element.thumbnail_url} categories={element.categories} title={element.title} excerpt={element.excerpt} id={element.id} author_id={element.author} />
                            </div>
                        }
                    )}
                </InfiniteScroll>
                :

                <ToastContainer />
            }
        </>

    )
}

export default Blogcards


