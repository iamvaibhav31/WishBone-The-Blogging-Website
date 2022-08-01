import React from 'react'
import Card from './Card'


const Published = (props) => {
  const published = props.published
  return (
    <div className="m-5">
      <h1 className="display-4 ">Published</h1>

      <div className="row m-5">

        {published.map((element , index) => {
          return (
            <div className='col-md-6 justify-content-center align-items-center mt-3' key={index}>
              <Card thumbnail={element.thumbnail_url} categories={element.categories} title={element.title} excerpt={element.excerpt} id={element.id} author_id={element.author} />
            </div>
          )
        })}

      </div>


    </div>
  )
}

export default Published