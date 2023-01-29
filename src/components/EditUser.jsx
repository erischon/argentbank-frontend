import { useSelector, useDispatch } from "react-redux";

import FormRow from "./FormRow";
import "../assets/css/editUser.css";

const EditUser = () => {
  const { userProfile } = useSelector((store) => store.user);

  return (
    <section className="edit-user--container">
      <form className="edit-user--form-container">
        <FormRow
          type="text"
          value={userProfile.firstName}
          name="firstname"
          label={false}
        />

        <FormRow
          type="text"
          value={userProfile.lastName}
          name="lastname"
          label={false}
        />

        <button className="edit-button edit-user--btn edit-user--btn__end">
          Save
        </button>
        <button className="edit-button edit-user--btn edit-user--btn__start">
          Cancel
        </button>
      </form>
    </section>
  );
};

export default EditUser;
