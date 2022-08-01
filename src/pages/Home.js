import React , {useContext,useState,useEffect} from 'react'
import Jambotron from '../components/Jambotron'
import Categorybar from '../components/Categorybar'
import Blogcards from '../components/Blogcards'
import { Alert } from 'react-bootstrap';
import Authcontext from '../context/Authcontext';
const Home = () => {
  let data = useContext(Authcontext)
  const [visiblety , setvisiblety] = useState(data.Loginpage_error!=={}?true:null)

  useEffect(()=>{
      setvisiblety(true)
  },[data]) 

  return (
    <> 
    <div className='container '>
        {visiblety===true ? data.LoginSuccess!=="" ?
        <Alert variant="success" onClose={() => setvisiblety(false)} dismissible>
            {data.LoginSuccess}
        </Alert> : null : null }  
        <Categorybar/>
        <Jambotron/>
        <Blogcards/>
    </div>
    
    </>
  )
}



export default Home