import React from 'react'
import { Link } from 'react-router-dom'

const Categorybar = () => {
    return (
        <div className="nav-scroller py-1 mb-2">
            <div className="nav d-flex justify-content-between">
                <Link className="p-2 link-secondary btn btn-light" to="/category/World" >World</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Enviroment" >Enviroment</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Technology" >Technology</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Design" >Design</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Culture" >Culture</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Business" >Business</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Politics" >Politics</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Opinions" >Opinion</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Science" >Science</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Health" >Health</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Style" >Style</Link>
                <Link className="p-2 link-secondary btn btn-light" to="/category/Travel">Travel</Link>
            </div>
        </div>
    )
}


export default Categorybar