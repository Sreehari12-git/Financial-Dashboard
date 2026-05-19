import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getAllocation } from "../api/assetsApi";

ChartJS.register(ArcElement,Tooltip,Legend);
const AssetAllocation = () => {
    const [allocation, setAllocation] = useState([]);

    useEffect(() => {
      fetchAllocation();
      },[])

      const fetchAllocation = async() => {
    const data = await getAllocation();
  setAllocation(data);
}

const chartData = {
  labels: allocation.map(item => item.category),
  datasets: [
    {
      data: allocation.map(item => item.percentage),
      backgroundColor: [
          "#1E8E3E",
        "#4F5BD5",
        "#F4B400"
      ]
    }
  ]
};

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

return(
  <div className="w-[300px] h-[300px]">
    <Pie data={chartData} options={options}/>
  </div>
)
}

export default AssetAllocation

