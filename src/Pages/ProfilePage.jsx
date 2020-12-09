import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import user from "../Images/user.png";
import CardProduct from "../Components/ProductBox";
import qrode from "../Images/qr-code.png";

function ProfilePage() {
  const [state] = useContext(GlobalContext);
  const { userLogin } = state;
  const { transaction } = state;

  return (
    <div className="space-between mt-77 mb-90">
      <div>
        <h2 className="profile-page-title">My Profile</h2>
        <div className="row mt-26">
          <div>
            <img src={user} alt="user" className="profile-page-img" />
          </div>
          <div className="ml-28">
            <h3 className="profile-page-sub-title">Full Name</h3>
            <h4 className="profile-page-desc">{userLogin.name}</h4>

            <h3 className="profile-page-sub-title mt-26">Email</h3>
            <h4 className="profile-page-desc">{userLogin.email}</h4>
          </div>
        </div>
      </div>
      <div className="profile-page-width-con-right">
        <h2 className="profile-page-title">My Transaction</h2>
        <div className="mt-26">
          {transaction.length > 0
            ? transaction.map((product, index) => {
                return (
                  <CardProduct product={product} key={index}>
                    <Status />
                  </CardProduct>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

function Status({ type }) {
  return (
    <div className="item-center column">
      <div className="item-center mt-10">
        <img src={qrode} alt="qr-code" />
      </div>
      <div className="mt-10">
        {type === "completed" ? (
          <div className="status-container bg-primary">
            <p className="status-text text-white">Completed</p>
          </div>
        ) : type === "succsess" ? (
          <div className="status-container bg-succsess">
            <p className="status-text text-succsess">Succsess</p>
          </div>
        ) : (
          <div className="status-container bg-danger">
            <p className="status-text text-danger">Waiting Approve</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
