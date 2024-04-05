import { useContext, useEffect, useState } from "react"
import { Appbar } from "../Components/AppBar"
import { Balance } from "../Components/Balance"
import { Users } from "../Components/User"
import axios from "axios";
import { UserContext } from "../UserContext";

export const Dashboard = () => {
    const [amount,setAmount] = useState(0)
    const {userId} = useContext(UserContext)
    const backend_url = process.env.REACT_APP_BACKEND_URI;
    console.log(userId)

    useEffect(()=>{
     axios.get(  `${backend_url}/api/v1/account/getAccountBalance?userId=${userId}`,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }).then((res)=>{
         console.log(res.data.balance)
         setAmount(res.data.balance)
     })
    },[])
console.log(userId)


    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={amount} />
            <Users />
        </div>
    </div>
}