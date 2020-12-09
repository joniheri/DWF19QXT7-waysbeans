import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Table from "../ComponentWaysbeans/Table";

function AdminDashboard() {
  const [state, dispatch] = useContext(GlobalContext);
  const { adminTransaction } = state;
  return (
    <div className="mt-150">
      <h2 className="admin-page-title">Income Transaction</h2>
      <div className="mt-62 mb-51">
        <Table data={adminTransaction} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default AdminDashboard;
