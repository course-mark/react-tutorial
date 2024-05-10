import React, { useState } from "react";

function AddUserControlled(props) {

const [id, setid] = useState("");
const [user, setuser] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");

  return (
    <div onSubmit={(e)=>{
      console.log(e);
    }} className="flex flex-col w-full mx-auto p-4 border-2 border-gray-200 rounded-lg shadow-lg">
      <input className="text-black" type="text" placeholder="Id" value={id} onChange={(e)=>{
        setid(e.target.value)
      }}/>
      <input className="text-black" type="text" placeholder="User Name" value={user} onChange={(e)=>{
        setuser(e.target.value)
      }}/>
      <input className="text-black" type="email" placeholder="Email" value={email} onChange={(e)=>{
        setemail(e.target.value)
      }}/>
      <input className="text-black" type="text" placeholder="Phone Number" value={phone} onChange={(e)=>{
        setphone(e.target.value)
      }}/>
      <button type="button" onClick={()=>{
        if(!id){
          alert("Please enter id")
          return
        }
        if(!user){
          alert("Please enter user name")
          return
        }
        if(!email){
          alert("Please enter email")
          return
        }
        if(!phone){
          alert("Please enter phone number")
          return
        }
        props.onAddUser({
          id: id,
          name: user,
          email: email,
          phone: phone
        })
        setid("")
        setuser("")
        setemail("")
        setphone("")
      }}>Add User</button>
    </div>
  )
}

export default AddUserControlled