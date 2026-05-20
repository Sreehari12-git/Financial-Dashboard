import { useEffect, useState } from "react";
import { getAllLiabilities } from "../api/liabilities";
import "./LiabilitiesList.css";

function LiabilitiesList() {
  const [liabilities, setLiabilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLiabilities();
  }, []);

  async function fetchLiabilities() {
    try {
      const response = await getAllLiabilities();
      setLiabilities(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="liabilities-empty">Loading...</p>;
  }

  return (
    <div className="liabilities-container">
      <div className="liabilities-header">
        <h2>All Liabilities</h2>
      </div>

      <div className="liabilities-table-head">
        <p>Name</p>
        <p>Category</p>
        <p>Total</p>
        <p>Remaining</p>
        <p>Member</p>
      </div>

      {liabilities.length === 0 ? (
        <p className="liabilities-empty">No liabilities found</p>
      ) : (
        liabilities.map((liability) => (
          <div className="liabilities-row" key={liability.id}>
            <h3>{liability.liabilityName}</h3>
            <span className="category-badge">{liability.category}</span>
            <span className="total-amount">₹{liability.totalAmount}</span>
            <span className="remaining-amount">₹{liability.remainingAmount}</span>
            <div className="member-cell">
              {liability.familyMember.fullName}
              <span>{liability.familyMember.relation}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default LiabilitiesList;