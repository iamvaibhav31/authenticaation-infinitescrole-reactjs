import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { selectAlluser, getstatus, geterror } from '../Features/Redux/Slice/Userslice'
import { UserReqs } from '../Features/Apis/UserRequest'

function Homepage() {
     const dispatch = useDispatch()
     const users = useSelector(selectAlluser)
     const status = useSelector(getstatus)
     const error = useSelector(geterror)
     useEffect(() => {
          dispatch(UserReqs)
     }, [dispatch])
     console.log(users, status, error)
     return <div>Homepage</div>;
}

export default Homepage;
