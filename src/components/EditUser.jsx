import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormRow from "./FormRow";

import { updateUser } from "../features/user/userActions";

const EditUser = ({ show, onCancel }) => {
  const dispatch = useDispatch();

  const [errMsg, setErrMsg] = useState("");

  const { userProfile } = useSelector((store) => store.user);

  const [userData, setUserData] = useState({
    firstName: userProfile?.firstName || "",
    lastName: userProfile?.lastName || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName } = userData;
    if (!firstName || !lastName) {
      setErrMsg("Please Fill Out All Fields");
      return;
    }

    dispatch(updateUser({ firstName: firstName, lastName: lastName }));
    navigate("/login");
  };

  if (!show) {
    return null;
  }

  return (
    <section className="header header--container">
      <h1>Welcome back</h1>

      <p className="error-msg">{errMsg}</p>

      <div className="edit-user--container">
        <form className="edit-user--form-container">
          <FormRow
            type="text"
            value={userData.firstName}
            name="firstName"
            handleChange={handleChange}
            label={false}
          />

          <FormRow
            type="text"
            value={userData.lastName}
            name="lastName"
            handleChange={handleChange}
            label={false}
          />

          <button
            type="submit"
            className="edit-button edit-user--btn edit-user--btn__end"
            onClick={onSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="edit-button edit-user--btn edit-user--btn__start"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
