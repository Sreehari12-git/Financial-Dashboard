import { useEffect, useState } from "react";
import { getAllLiabilities } from "../api/liabilities";

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
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h2>All Liabilities</h2>

      {liabilities.length === 0 ? (
        <p>No liabilities found</p>
      ) : (
        liabilities.map((liability) => (
          <div
            key={liability.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >

            <h3>{liability.liabilityName}</h3>

            <p>Category: {liability.category}</p>


            <p>Total Amount: ₹{liability.totalAmount}</p>


            <p>Remaining: ₹{liability.remainingAmount}</p>
            <p>
              Family Member:
              {" "}
              {liability.familyMember.fullName}
            </p>

            <p>
              Relation:
              {" "}
              {liability.familyMember.relation}
            </p>

          </div>
        ))
      )}

    </div>
  );
}

export default LiabilitiesList;