import axios from "axios"
import { useEffect, useState } from "react"


   


export const Home=()=>{

    const [data, setData] = useState([])
    const [err,setError] = useState(false)
   
    useEffect(()=>{
 fetchdata()
    },[])

    const fetchdata=()=>{
        axios({
            method:"Get",
            url:"http://localhost:8080/user"
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            setError(err)

        })
    }

    console.log(data)
    return(
        <div className="container">

        {data.map((e)=>{
            return(
            <div>
            <div> City :{e.city}</div>
            <div> Role :{e.role} </div>
            <div> Company : {e.company}</div>

            </div>
            )

        })}




        </div>
    )
}