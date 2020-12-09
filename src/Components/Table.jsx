function Table({ data, dispatch }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Post Code</th>
          <th>Prodcut Order</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((tran, index) => (
              <Td data={tran} index={index} dispatch={dispatch} key={index} />
            ))
          : "Tidak ada Transaksi"}
      </tbody>
    </table>
  );
}

const Td = ({ data, index, dispatch }) => {
  const onApprove = () => {
    dispatch({
      type: "ADMIN_APPROVE_TRANSC",
      payload: { index: index },
    });
  };
  const onCancel = () => {
    dispatch({
      type: "ADMIN_CANCEL_TRANSC",
      payload: { index: index },
    });
  };
  return (
    <>
      <tr>
        <td>{+index + 1}</td>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.postCode}</td>
        <td>{data.product}</td>
        <td>
          {data.status === "succsess" ? (
            <p className="text-succsess">Succsess</p>
          ) : data.status === "waiting" ? (
            <p className="text-waiting">Waiting Approve</p>
          ) : (
            <p className="text-cancel">Cancel</p>
          )}
        </td>
        <td>
          {data.status === "succsess" ? (
            <div className="item-center">
              <i className="fas fa-check status-check"></i>
            </div>
          ) : data.status === "waiting" ? (
            <div className="item-center">
              <button className="action-cancel" onClick={onCancel}>
                Cancel
              </button>
              <button className="action-succsess" onClick={onApprove}>
                Approve
              </button>
            </div>
          ) : (
            <div className="item-center">
              <i className="fas fa-times status-cancel"></i>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default Table;
