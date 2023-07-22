import React, { useState , useEffect }from "react";
import axios from "axios";
const UserContext = React.createContext({
    coinCapData : []
})

export const UserContextProvider = (props)=>{
    const [ coinCap , setCoinCap ] = useState([])
    const fetchCoinsCap = async ()=>{
        await axios.get("http://localhost:3004/coin").then((feedback)=>{
          setCoinCap(feedback.data.data)
          console.log(feedback.data.data);
        }).catch(err=>{
          console.log(err.message);
        })
      }
      useEffect(()=>{
        fetchCoinsCap()
      },[])

    return <UserContext.Provider value={{
        coinCapData : coinCap  
    }}>
    {props.children}
    </UserContext.Provider>
}

export default UserContext;