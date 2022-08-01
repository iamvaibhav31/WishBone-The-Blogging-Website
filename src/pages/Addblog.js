import React, { useState } from 'react'
import Create from '../components/Create';
const Addblog = () => {
  const [content, setcontent] = useState('')


  return (
    <div className="container">
      <div className="my-5 px-5">
        <h1 className="display-5 fw-bold">Add New Blog</h1>
        <Create/>
      </div>
    </div>
  );
}

export default Addblog