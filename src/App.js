import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {AuthProvider} from "./context/Authcontext";
// import {Dataprovider} from "./context/Datacontext";
import Home from "./pages/Home";
import BlogCategory from "./pages/BlogCategory";
import BlogDetail from "./pages/BlogDetail";
import Addblog from "./pages/Addblog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loginpage from "./pages/Loginpage";
import Registerationpage from "./pages/Registerationpage";
import ProtectedRoutes , {AuthenticatedRoutes}  from "./utils/ProtectedRouter";
// import Contactus from "./pages/Contactus";
import Profile from "./pages/UserProfile";
import Searchpage from "./pages/Searchpage";


function App() {
  return (
  <>
    <Router>
      <AuthProvider>
        {/* <Dataprovider> */}
          <Navbar/>
              <Routes>
                  <Route exact path="/" element={<Home/>} /> 
                  <Route exact path="/category/:id" element={<BlogCategory/>} /> 
                  <Route exact path="/detail/:id" element={<BlogDetail/>} /> 
                  <Route exact path="/profile/:id" element={<Profile/>} />
                  <Route exact path="/search" element={<Searchpage/>} /> 

                  {/* <Route exact path="/Addblog" element={<Addblog/>}/> */}

                  <Route exact path='/Addblog' element={<AuthenticatedRoutes/>}>
                    <Route exact path="/Addblog" element={<Addblog/>}/>
                  </Route>
                  
                  <Route exact path='/login' element={<ProtectedRoutes/>}>
                    <Route exact path="/login" element={<Loginpage/>}/>
                  </Route>
                  
                  <Route exact path='/register' element={<ProtectedRoutes/>}>
                    <Route exact path="/register" element={<Registerationpage/>}/>
                  </Route>

                  {/* <Route exact path="/contactus" element={<Contactus/>} /> */}

              </Routes>
          <Footer/>
        {/* </Dataprovider> */}
      </AuthProvider>  
    </Router>
  </>
  );
}

export default App;
