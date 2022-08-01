import React from 'react'
import { Link } from 'react-router-dom'

const Jambotron = () => {
    return (
        <>
            <div className="row align-items-md-stretch">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <h1 className="display-5 fw-bold">Welcome to Blog Hub</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <Link className="btn btn-outline-light" exact to="/test" role="button">Learn more</Link>
                </div>
            </div>

        </>
    )
}

export default Jambotron