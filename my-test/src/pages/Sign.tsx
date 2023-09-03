import { useState } from "react"
import axios from 'axios'

type Infouser={
    username:string;
    email:string;
    password:string;
}

export default function Sign() {

    const [input,setInput] = useState<Infouser>({
        username:"",
        email:"",
        password:"",
    })
   
    
    const Sign = ()=>{
        axios.post("https://fakestoreapi.com/users",{
            username:input.username,
            password:input.password,
        }).then((res)=>{
            console.log(res);
            setInput(res.data)
        }).catch((err)=>console.log(err));
        
    }

  


  return (
    <div>
       <div className=" flex flex-col  items-center w-fit h-fit bg-slate-300 p-5">
        <h1 className="text-center m-2">Sign up</h1>
            <label>UserName</label>
            <input className="border-solid m-2" placeholder="Enter the username" value={input.username} type="text" onChange={(e)=>{setInput({...input,username:e.target.value})}} />
            <label>Email</label>
            <input className="border-solid m-2" placeholder="Enter the email" value={input.email} type="email" onChange={(e)=>{setInput({...input,email:e.target.value})}}/>
            <label>Password</label>
            <input className="border-solid m-2" placeholder="Enter the password" value={input.password} type="password" onChange={(e)=>{setInput({...input,password:e.target.value})}}/>

            <button className="border-solid bg-slate-500  rounded-md w-20 m-2" onClick={Sign}>Sign Up</button>
        

       </div>
    </div>
  )
}
