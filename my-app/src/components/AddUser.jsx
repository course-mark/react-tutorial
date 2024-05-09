import React, { useState } from "react";



function AddUser(props) {

const [id, setid] = useState("");
const [user, setuser] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");

  return (
    <form  onSubmit={(e)=>{
      console.log(e);
    }}>
      <input  className="border  text-center text-2xl text-black" type="text" placeholder="Id" onChange={(e)=>{
        setid(e.target.value)
      }}/>
      <input className="border  text-center text-2xl text-black" type="text" placeholder="User Name" onChange={(e)=>{
        setuser(e.target.value)
      }}/>
      <input className="border  text-center text-2xl text-black" type="email" placeholder="Email" onChange={(e)=>{
        setemail(e.target.value)
      }}/>
      <input className="border  text-center text-2xl text-black" type="text" placeholder="Phone Number" onChange={(e)=>{
        setphone(e.target.value)
      }}/>
      <button className="border text-center text-2xl text-white" type="reset" onClick={()=>{
      // on click reset the form just change the type of the button

        props.onAddUser({
          id: id,
          name: user,
          email: email,
          phone: phone
        })
      }}>Add User</button>
    </form>
  )
}

export default AddUser