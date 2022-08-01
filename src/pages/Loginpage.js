import React , {useContext, useEffect, useState} from 'react'
import { Alert } from 'react-bootstrap';
import Login from '../components/Login'
import Authcontext from '../context/Authcontext'
const Loginpage = () => {
    let data = useContext(Authcontext)
    const [visiblety , setvisiblety] = useState(data.Loginpage_error!=={}?true:null)
    

    useEffect(()=>{
        setvisiblety(true)
    },[data])
    
    return (
        <div className='mt-3'>

            {visiblety===true ? data.Loginpage_error!=={} ?  data.Loginpage_error.status===401?
            <Alert variant="danger" onClose={() => setvisiblety(false)} dismissible>
                {data.Loginpage_error.detail}
            </Alert> : null : null : null }           
            <Login/>
        </div>
    )
}
// 
export default Loginpage

