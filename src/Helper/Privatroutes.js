import React from "react";
import { Outlet, Navigate } from 'react-router-dom'
import dayjs from 'dayjs'
import jwt_decode from "jwt-decode";

function Privatroutes() {
     let auth = localStorage.getItem("authTokens") ? localStorage.getItem("authTokens") : false;
     console.log(localStorage.getItem("authTokens"), auth)

     if (auth === undefined) {
          return <Navigate to="/login" />
     }

     if (!auth) {
          return <Navigate to="/login" />
     }

     const user = jwt_decode(auth)
     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1


     if (isExpired) {
          return <Outlet />
     } else {
          return <Navigate to="/login" />;
     }
}

export default Privatroutes;
