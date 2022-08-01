import axios from 'axios'
import Categorybar from '../components/Categorybar'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Blog from "../components/static/image & SVG/blogger.svg"
const BlogCategory = () => {
    const { id } = useParams()
    const [blogs, setblogs] = useState([])
    const [error, seterror] = useState("")

    const url = (catagory) => {
        return "https://vaibhavsharma3108.pythonanywhere.com/postcategoriesveiw/" + catagory
    }
    useEffect(() => {
        axios.get(url(id)).then((response) => {
            if (response.status === 200 && response.statusText === "OK") {
                console.log(response.data)
                setblogs(response.data)
            } else {
                seterror("Request Time Out")
            }
        }).catch((err) => {
            seterror(err)
        })
    }, [id])

    return (
        <>
            {(error === "") ?
                <div className='container  mt-3'>
                    <h1 className='display-4'>{id} catagory</h1>
                    <Categorybar />
                    <div className='row'>
                        {blogs.map(
                            (element) => {
                                return <div className='col-md-4' key={element.id}>
                                    <Card thumbnail={element.thumbnail} categories={element.categories} title={element.title} excerpt={element.excerpt} id={element.id} />
                                </div>
                            }
                        )}
                    </div>
                </div>
                :
                <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style={{ minheight: "200px" }}>
                    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src={Blog} class="rounded mr-2" alt="Logo" />
                            <strong class="mr-auto">Blog Hub</strong>

                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body">
                            {error}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogCategory