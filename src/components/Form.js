import React from "react";
import classes from "./Form.module.css";
import Button from "./Button";

const Form = ({
  change,
  submit,
  firstname,
  lastname,
  phonenumber,
  role,
  message,
}) => {
  return (
    <form onChange={change} onSubmit={submit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          defaultValue={firstname}
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          defaultValue={lastname}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phonenumber"
          defaultValue={phonenumber}
          required
        />
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <select id="role" name="role" defaultValue="other" required>
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
          defaultValue={message}
          required
        />
      </div>


      <Button>Send</Button>
    </form>
  );
};

export default Form;
