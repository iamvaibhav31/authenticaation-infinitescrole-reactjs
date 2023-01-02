import axios from 'axios'


const baseURL = 'http://localhost:4000/users'
let authToken = localStorage.getItem("authTokens") ? localStorage.getItem("authTokens") : null


const Axios = axios.create({
     baseURL: baseURL, // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
});


const AxioswithToken = axios.create({
     baseURL: baseURL, // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
     headers: { "Authorization": "Bearer " + authToken }
});

const Userreq = axios.create({
     baseURL: "https://randomuser.me/api/?result=500"
})

export {
     Axios,
     AxioswithToken,
     Userreq
}