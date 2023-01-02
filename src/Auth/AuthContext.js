import React, { createContext, useState } from "react";
import { Axios } from "../Helper/axios";


const Context = createContext();
export default Context

export const Provider = ({ children }) => {
     const [userdata, setUserData] = useState()
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState()


     const LoginUsers = async (data) => {
          console.log(data)
          setLoading(true)
          await Axios.post('/login', data).then((res) => {
               setUserData(res.data)
               setError(undefined)
          }).catch((err) => {
               setLoading(false)
               setUserData(undefined)
               setError(err.message)
          }).finally(() => {
               setLoading(false)
          })
     }


     const RegisterUsers = async (data) => {
          console.log(data)
          setLoading(true)
          await Axios.post('/register', data).then((res) => {
               setUserData(res.data)
               setError(undefined)
          }).catch((err) => {
               setLoading(false)
               setUserData(undefined)
               setError(err.message)
          }).finally(() => {
               setLoading(false)
          })
     }


     const value = {
          RegisterUsers,
          LoginUsers,
          userdata,
          loading,
          error,
     }

     return (
          <Context.Provider value={value}>
               {children}
          </Context.Provider>
     );
};

