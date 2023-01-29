import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormRow from "./FormRow";
import "../assets/css/editUser.css";

import { updateUser } from "../features/user/userActions";

const EditUser = () => {
  const dispatch = useDispatch();

  const { userProfile } = useSelector((store) => store.user);
  const [isEditUser, setIsEditUser] = useState(true);

  const [userData, setUserData] = useState({
    firstName: userProfile?.firstName || "",
    lastName: userProfile?.lastName || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName } = userData;
    if (!firstName || !lastName) {
      console.log("Please Fill Out All Fields");
      return;
    }

    dispatch(updateUser({ firstName: firstName, lastName: lastName }));
  };

  const handleCancel = (e) => {
    return;
  };

  return (
    <section className="edit-user--container">
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
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </section>
  );
};

export default EditUser;
