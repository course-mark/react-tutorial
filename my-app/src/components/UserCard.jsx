import React from "react";

function UserCard(props) {
  return (
    <div className="container mx-auto border-2 border-gray-200 p-4">
      {/* create user card using tailwind */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[10%]"
        />
        <div className="px-6 py-4 gr">
          <div className="font-bold text-xl mb-2">User Name: {props.name}</div>
          <p className="text-gray-700 text-base">Email: {props.email}</p>
          <p className="text-gray-700 text-base">Phone: {props.phone}</p>
        </div>

<div className="flex justify-between p-4">

        <button onClick={()=>{
          props.onSaveUserDetails()
        }}>Save Details</button>

        {/* onDelete */}
        <button onClick={()=>{
          props.onDelete()
        }}>Delete</button>
        </div>
        
      </div>
    </div>
  );
}

export default UserCard;
