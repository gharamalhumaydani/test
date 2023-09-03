import { useState } from "react"
import axios from "axios"

type Infouser={
    username:string;
    password:string;
}

export default function Login() {
     
    const [data , setDate] = useState<Infouser>()
    const [input,setInput] = useState<Infouser>({
        username:"",
        password:"",
    })

    
    const Login = ()=>{
        axios.get("https://fakestoreapi.com/users")
        .then((res)=>{
            setDate(res.data)
        })
    }

  return (
    <div>
       <div className=" flex flex-col  items-center w-fit h-fit bg-slate-300 p-5">
        <h1 className="text-center m-2">Login</h1>
            <label>UserName</label>
            <input className="border-solid m-2" placeholder="Enter the username" value={input.username} type="text" onChange={(e)=>{setInput({...input,username:e.target.value})}} />
            <label>Password</label>
            <input className="border-solid m-2" placeholder="Enter the password" value={input.password} type="password" onChange={(e)=>{setInput({...input,password:e.target.value})}}/>

            <button className="border-solid bg-slate-500  rounded-md w-20 m-2" onClick={Login}>Log in</button>
        
            

       </div>
      

    </div>
  )
}
