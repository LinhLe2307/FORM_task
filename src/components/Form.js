import React from "react";
import classes from "./Form.module.css";
import Button from "./Button";

const Form = ({
  onChange,
  onSubmit,
  firstname,
  lastname,
  phonenumber,
  role,
  message,
}) => {
  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phonenumber"
          value={phonenumber}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={role}
          defaultValue="other"
          required
        >
          <option value="" invalid="true" hidden>
            Choose a role...
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          value={message}
          required
        />
      </div>
      <Button>Send</Button>
    </form>
  );
};

export default Form;
