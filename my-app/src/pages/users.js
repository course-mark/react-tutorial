import UserCard from "@/components/UserCard";
import React from "react";

const userData = [
  {
    name: "Manjot",
    email: "manjot@test.com",
    phone: 1234567890,
  },
  {
    name: "Anmol",
    email: "anmol@test.com",
    phone: 1234567890,
  },
  {
    name: "Aman",
    email: "aman@test.com",
    phone: 1234567890,
  },
  {
    name: "raman",
    email: "raman@test.com",
    phone: 1234567890,
  },
];

const convertedArrayToJsx = userData.map((user) => {
  return <UserCard name={user.name} email={user.email} phone={user.phone} />;
});

function users() {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Users</h1>
      <div className="grid grid-cols-3 gap-4 p-4">{convertedArrayToJsx}</div>
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
