import DataChart from "./DataChart";
import DataTable from "./DataTable";
import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [chartData, setChartData] = useState([
    { month: "Analytics", "Pending Spaces": 10, "Approved Spaces": 10, "Total Spaces": 10 },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    let approvedSpaces = 0;
    let unapprovedSpaces = 0;

    axios
      .get(`${process.env.NEXT_PUBLIC_ROOT_URL}/users/rent-space/`,
        {
          headers: {
            Authorization: `Bearer ${userData.access_token}`,
          },
        })
      .then((res) => {
        approvedSpaces = res.data.filter((space: any) => space.verified === true).length;
        unapprovedSpaces = res.data.filter((space: any) => space.verified === false).length;
        setChartData([
          {
            month: "Analytics",
            "Pending Spaces": unapprovedSpaces,
            "Approved Spaces": approvedSpaces,
            "Total Spaces": res.data.length,
          },
        ]);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      {
        loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <DataChart chartData={chartData} />
        )
      }
      <DataTable />
    </div>
  );
};
