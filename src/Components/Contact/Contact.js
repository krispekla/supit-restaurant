import React from "react";
import "./Contact.css";

const contact = () => {
  return (
    <div id="contact-container">
      <h2>CONTACT US</h2>
      <hr />
      <form action="http://www.fulek.com/VUA/SUPIT/ContactUs" method="post">
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-4 col-form-label">
            Name:
          </label>
          <div className="col-sm-8">
            <input
              type="name"
              name="name"
              className="form-control"
              id="colFormLabel"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-4 col-form-label">
            Email:
          </label>
          <div className="col-sm-8">
            <input
              name="email"
              type="email"
              className="form-control"
              id="colFormLabel"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-4 col-form-label">
            Message importance:
          </label>
          <div className="col-sm-8">
            <select name="importance" className="custom-select ">
              <option value="low">Low</option>
              <option selected value="normal">
                Normal
              </option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="colFormLabel" className="col-sm-4 col-form-label">
            Receive newslatter:
          </label>
          <div className="col-sm-8">
            <div className="custom-control custom-checkbox ">
              <input
                name="newsletter"
                type="checkbox"
                className="custom-control-input "
                id="customCheck1"
                value="true"
                defaultChecked="true"
              />
              <label className="custom-control-label" for="customCheck1">
                Yes
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4" for="exampleFormControlTextarea1">
            Your message:
          </label>
          <div className="col-sm-8">
            <textarea
              name="message"
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Maximum 200 characters..."
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-primary col-sm-4 ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default contact;
