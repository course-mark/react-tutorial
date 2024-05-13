import UserCard from "@/components/UserCard";
import AddUser from "@/components/AddUserControlled";
import React, { useState } from "react";
import AddUserControlled from "@/components/AddUserControlled";
import AddUserUncontrolled from "@/components/AddUserUncontrolled";

function users() {
  // const userDataState = useState()
  // const userData = userDataState[0]
  // const setUserData = userDataState[1]

  const [userData, setUserData] = useState([
    
  ]);

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
              onDelete={() => {
                // TODO
                const idToDelete = user.id;
                const newUserData = userData.filter((user1) => {
                  return user1.id !== idToDelete;
                });
                setUserData(newUserData);
              }}
            />
          );
        })}
        {/* <AddUser onAddUser={(newUserData) => {
        setUserData((prevUserData)=>{
          return [...prevUserData, newUserData]
        })
       }}/> */}
        <AddUserUncontrolled
          onAddUser={(newUserData) => {
            setUserData((prevUserData) => {
              return [...prevUserData, newUserData];
            });
          }}
        />
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
