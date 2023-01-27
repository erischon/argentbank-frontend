import { useSelector, useDispatch } from "react-redux";

import FormRow from "./FormRow";

const EditUser = () => {
  const { userProfile } = useSelector((store) => store.user);

  return (
    <section>
      <form>
        <FormRow
          type="text"
          value={userProfile.firstName}
          name={userProfile.firstName}
        />

        <FormRow
          type="text"
          value={userProfile.lastName}
          name={userProfile.firstName}
        />
      </form>
    </section>
  );
};

export default EditUser;
