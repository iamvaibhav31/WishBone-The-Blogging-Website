import React, { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Authcontext = createContext();
export default Authcontext

export const AuthProvider = (props) => {
    let [loading, setloading] = useState(true)
    let [authToken, setauthToken] = useState(localStorage.getItem("authTokens") ? JSON.stringify(localStorage.getItem("authTokens")) : null)
    let [user, setuser] = useState(localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("user")) : null)
    let [LoginError, setLoginError] = useState({})
    let [LoginSuccessMesage, setLoginSuccessMesage] = useState("")
    let [RegisterSuccessMesage, setRegisterSuccessMesage] = useState("")
    let [RegisterError, setRegisterError] = useState({})
    // let [LogoutError , setLogoutError] = useState('')

    const navigate = useNavigate();

    let RegisterUser = async (event) => {
        event.preventDefault()

        await axios.post("https://vaibhavsharma3108.pythonanywhere.com/register/", {
            "first_name": event.target.first_name.value,
            "last_name": event.target.last_name.value,
            "username": event.target.username.value,
            "email": event.target.email.value,
            "password": event.target.password.value,
            "password2": event.target.password2.value
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                // localStorage.setItem("userdata",JSON.stringify(response.data))
                setRegisterSuccessMesage("Thank you for registration and please login first!!")
                navigate('/login')
            } else {
                // console.log(response.status)
                setRegisterError({
                    status: response.status,
                    error: "Request Time Out"
                })
            }
        }).catch((error) => {

            setRegisterError({
                status: error.response.status,
                error: { ...error.response.data }
            })

        })

    }

    console.log()


    let loginUser = async (event) => {
        event.preventDefault()
        await axios.post("https://vaibhavsharma3108.pythonanywhere.com/login/", {
            "username": event.target.username.value,
            "password": event.target.password.value
        }).then((response) => {
            if (response.status === 200) {
                console.log(jwt_decode(response.data.access))
                setauthToken(response.data)
                setuser(jwt_decode(response.data.access))
                localStorage.setItem("authTokens", JSON.stringify(response.data))
                localStorage.setItem("user", response.data.access)
                dataflow()
                setLoginSuccessMesage(" You Successfully Login !!")
                navigate('/')

            } else {
                setLoginError("Something went Wrong!")
            }
        }).catch((error) => {

            setLoginError({
                status: error.response.status,
                ...error.response.data
            })

        })
    }
    // console.log(LoginError)
    //  agar input field ma kuch nhi nahi hai to error ka status code 400 hai or aggar kuch galat hai tho status code 401
    // console.log(LoginSuccessMesage)


    const dataflow = () => {
        const url = (id) => {
            return "https://vaibhavsharma3108.pythonanywhere.com/userSmall-info/" + id
        }
        const userdata = jwt_decode(localStorage.getItem("user"))

        axios.get(url(userdata.user_id)).then((response) => {
            if (response.status === 200) {
                localStorage.setItem("userid", response.data.authorprofile.id)
                localStorage.setItem("username", response.data.authorName)
                localStorage.setItem("userprofilepic", response.data.authorprofile.profile_img)
            }

        })

    }


    let LogoutUsers = () => {
        console.log("logout functions")
        setauthToken(null)
        setuser(null)
        localStorage.removeItem("authTokens")
        navigate('/')
    }

    let updatetoken = async () => {

        await axios.post("https://vaibhavsharma3108.pythonanywhere.com/token/refresh/", {
            "refresh": authToken.refresh
        }).then((response) => {
            if (response.status === 200) {
                setauthToken(response.data)
                setuser(jwt_decode(response.data.access))
                localStorage.setItem("authTokens", JSON.stringify(response.data))
                localStorage.setItem("user", response.data.access)
            } else {
                LogoutUsers()
            }
        }).catch(() => { LogoutUsers() })
    }

    useEffect(() => {
        let TIME = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authToken) {
                updatetoken()
            }
        }, TIME)
        return () => clearInterval(interval)
    }, [authToken, loading, updatetoken])

    let contextdata = {
        userData: user,
        login_Users: loginUser,
        logout_Users: LogoutUsers,
        Loginpage_error: LoginError,
        LoginSuccess: LoginSuccessMesage,
        Registerpage_error: RegisterError,
        RegisterSucccess: RegisterSuccessMesage,
        register_user: RegisterUser,
        // Logout_error:LogoutError,

    }

    return (
        <Authcontext.Provider value={contextdata}>
            {props.children}
        </Authcontext.Provider>
    )
}
