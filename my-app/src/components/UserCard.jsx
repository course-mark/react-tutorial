import React, { useEffect } from "react";

function UserCard(props) {
  useEffect(()=>{
    alert('UserCard Component is mounted')
    
    return ()=>{
      alert('UserCard Component is unmounted')
    }
  },[])

  return (
    <div className="container mx-auto border-2 border-gray-200 p-4">
      {/* create user card using tailwind */}
      {/* TODO: create edit form here */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[10%]"
        />
        <div className="px-6 py-4">
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


/**
 * 1. make a state calles isEditForm visible.
 * 2. make an EditUserForm Component
 *  2.1 Use formik
 *  2.2 on click, edit the array of userData State
 *  2.3 on save make edit form disappear
 * 3. on Edit Details button, on click change state to visible to make edit form visible
 */