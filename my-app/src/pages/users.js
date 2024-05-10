import UserCard from "@/components/UserCard";
import AddUser from "@/components/AddUserControlled";
import React, { useState } from "react";

// const userData = [
//   {
//     name: "Manjot",
//     email: "manjot@test.com",
//     phone: 1234567890,
//   },
//   {
//     name: "Anmol",
//     email: "anmol@test.com",
//     phone: 1234567890,
//   },
//   {
//     name: "Aman",
//     email: "aman@test.com",
//     phone: 1234567890,
//   },
//   {
//     name: "raman",
//     email: "raman@test.com",
//     phone: 1234567890,
//   },
// ];

function users() {
  
  // const userDataState = useState()
  // const userData = userDataState[0]
  // const setUserData = userDataState[1]

  const [userData, setUserData] = useState([
    {
      id:10001,
      name: "Manjot",
      email: "manjot@test.com",
      phone: 1234567890,
    },
    {
      id:10002,
      name: "Anmol",
      email: "anmol@test.com",
      phone: 1234567890,
    },
    {
      id:10003,
      name: "Aman",
      email: "aman@test.com",
      phone: 1234567890,
    },
    {
      id:10004,
      name: "raman",
      email: "raman@test.com",
      phone: 1234567890,
    },
  ])
  

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Users</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {userData.map((user) => {
          return (
            <UserCard
              name={user.name}
              email={user.email}
              phone={user.phone}
              // function as a prop
              onSaveUserDetails={() => {
                alert("data is being saved");
              }}
              onDelete={()=>{
                // TODO
                const idToDelete = user.id
                const newUserData = userData.filter((user1)=>{
                  return user1.id !== idToDelete
                })
                setUserData(newUserData)
              }}
            />

          );
        })}
       <AddUser onAddUser={(newUserData) => {
        setUserData((prevUserData)=>{
          return [...prevUserData, newUserData]
        })
       }}/>
      </div>
    </div>
  );
}

export default users;

// "" -> string
// {} -> object
// [] -> array
// 1 -> number
// true -> boolean
// null -> null
// undefined -> undefined
// function(){} -> function
// () => {} -> function
