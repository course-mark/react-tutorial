import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id: Yup.string().required("Id is required"),
  name: Yup.string().required("Name is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // valudation using regex
  // email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  email: Yup.string().matches(/^[\w-\.]+@simbaquartz.com$/, {
    message: "Invalid Email",
  }),
  phone: Yup.string().required("Phone is required"), //+91 1343453232
});

/**
 * React Component lifecycle
 * 1. Mounting
 * 2. Updating
 * 3. Unmounting
 */

function AddUserUncontrolled(props) {
  const alertButtonRef = useRef();
  const idInputRef = useRef();

  const addUserForm = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      props.onAddUser(values);
      addUserForm.resetForm();
    },
    validationSchema: validationSchema,
  });

  console.log(addUserForm.values);

  return (
    <form
      onSubmit={addUserForm.handleSubmit}
      className="flex flex-col w-full mx-auto p-4 border-2 border-gray-200 rounded-lg shadow-lg"
    >
      <input
        ref={idInputRef}
        name="id"
        className="text-black"
        type="text"
        placeholder="Id"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.id}
      />
      {addUserForm.errors.id ? <div>{addUserForm.errors.id}</div> : null}
      <input
        name="name"
        className="text-black"
        type="text"
        placeholder="User Name"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.name}
      />
      {addUserForm.errors.name ? <div>{addUserForm.errors.name}</div> : null}
      <input
        name="email"
        className="text-black"
        type="email"
        placeholder="Email"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.email}
      />
      {addUserForm.errors.email ? <div>{addUserForm.errors.email}</div> : null}
      <input
        name="phone"
        className="text-black"
        type="text"
        placeholder="Phone Number"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.phone}
      />
      {addUserForm.errors.phone ? <div>{addUserForm.errors.phone}</div> : null}
      {/* conditional rendering */}
      {true ? (
        <button type="submit">Add User</button>
      ) : (
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Add User
        </button>
      )}
      <button
        type="button"
        className="hidden"
        ref={alertButtonRef}
        onClick={() => {
          // alert(idInputRef.current.value);
          idInputRef.current.focus();
        }}
      >
        alert
      </button>

      <button
        type="button"
        onClick={() => {
          alertButtonRef.current.click();
        }}
      >
        click here
      </button>
    </form>
  );
}

export default AddUserUncontrolled;
