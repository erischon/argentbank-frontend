import { useSelector } from "react-redux";
import { useState } from "react";

import EditUser from "../components/EditUser";

const User = () => {
  const { userProfile } = useSelector((store) => store.user);
  const [isEditUser, setIsEditUser] = useState(false);

  return (
    <main className="main bg-dark">
      {!isEditUser ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${userProfile?.firstName} ${userProfile?.lastName}`}
          </h1>

          <button
            className="edit-button"
            onClick={() => setIsEditUser(!isEditUser)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>

          <EditUser />
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
