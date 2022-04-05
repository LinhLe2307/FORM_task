import React from "react";
import classes from "./Form.module.css";
import Button from "./Button";

const Form = ({ onChange, onClick }) => {
  return (
    <form>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstName" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastName" onChange={onChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          name="phoneNumber"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select id="role" name="role" onChange={onChange}>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message" name="message" onChange={onChange} />
      </div>
      <Button btnName="Send" onClick={onClick} />
    </form>
  );
};

export default Form;
