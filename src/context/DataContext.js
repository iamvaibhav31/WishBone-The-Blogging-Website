import React , {createContext,useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Datacontext = createContext();
export default Datacontext

export function DataProvider(props){


    

    data={

    }

    return(

        <Datacontext.Provider value={data}>
            {props.children}
        </Datacontext.Provider>

    )

    
}