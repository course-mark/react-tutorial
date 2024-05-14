import React, { use, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  id: Yup.string().required("Id is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required")
})

/**
 * React Component lifecycle
 * 1. Mounting
 * 2. Updating
 * 3. Unmounting
 */

function EditUserUncontrolled({ userData, onEditUser}) {

    const initialValues = userData;

  const addUserForm = useFormik({
    initialValues:initialValues,
    onSubmit: (values) => {
      onEditUser(values);
      addUserForm.resetForm();
    },
    validationSchema: validationSchema
  });

  console.log(addUserForm.values);

  return (
    <form
      onSubmit={addUserForm.handleSubmit}
      className="flex flex-col w-full mx-auto p-4 border-2 border-gray-200 rounded-lg shadow-lg"
    >
      <input
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
      {
        addUserForm.errors.name ? <div>{addUserForm.errors.name}</div> : null
      }
      <input
        name="email"
        className="text-black"
        type="email"
        placeholder="Email"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.email}
      />
      {
        addUserForm.errors.email ? <div>{addUserForm.errors.email}</div> : null
      }
      <input
        name="phone"
        className="text-black"
        type="text"
        placeholder="Phone Number"
        onChange={addUserForm.handleChange}
        value={addUserForm.values.phone}
      />
      {
        addUserForm.errors.phone ? <div>{addUserForm.errors.phone}</div> : null
      }
      <button
        type="submit"
      >
        Edit User
      </button>
    </form>
  );
}

export default EditUserUncontrolled;
