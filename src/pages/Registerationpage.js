import React , {useContext,useState} from 'react'
import { Alert } from 'react-bootstrap';
import Register from '../components/Register'
import Authcontext from '../context/Authcontext';
const Registerationpage = () => {
  let data = useContext(Authcontext)
  // console.log(data)
  const [visibilty , setvisibilty] = useState(data.Registerpage_error!=={} ?true:null) 
  // console.log(JSON.parse(data.Registerpage_error.error))
  return (
    <div className='mt-3' >
          {visibilty===true ?  data.Registerpage_error.status!==400?
            <Alert variant="danger" onClose={() => setvisibilty(false)} dismissible>
              {data.Registerpage_error.error}
            </Alert> : null  : null }  
        <Register/>
    </div>
  )
}

export default Registerationpage