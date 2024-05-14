import React, { useEffect, useState } from "react";
import EditUserUncontrolled from "./EditUserForm";

/**
 * Displays User details in a card
 * Also has edit feature
 * @param {*} props
 * @returns
 */
function UserCard({userData, onSaveUserDetails, onDelete, onChange }) {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  return (
    <div className="container mx-auto border-2 border-gray-200 p-4">
      {/* create user card using tailwind */}
      {/* TODO: create edit form here */}
      <button
        onClick={() => {
          setIsEditFormVisible(true);
        }}
      >
        Edit
      </button>
      {isEditFormVisible && <EditUserUncontrolled userData={userData} onEditUser={(editedUserData)=>{
        onChange(editedUserData)
        setIsEditFormVisible(false)
      }}/>}
      {!isEditFormVisible && <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-[10%]"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">User Name: {userData.name}</div>
          <p className="text-gray-700 text-base">Email: {userData.email}</p>
          <p className="text-gray-700 text-base">Phone: {userData.phone}</p>
        </div>

        <div className="flex justify-between p-4">
          <button
            onClick={() => {
              onSaveUserDetails();
            }}
          >
            Save Details
          </button>

          {/* onDelete */}
          <button
            onClick={() => {
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>}
    </div>
  );
}

export default UserCard;

/**
 * 1. make a state called isEditFormVisible.
 * 2. make an EditUserForm Component
 *  2.1 Use formik
 *  2.2 on click, edit the array of userData State
 *  2.3 on save make edit form disappear
 * 3. on Edit Details button, on click change state to visible to make edit form visible
 */
