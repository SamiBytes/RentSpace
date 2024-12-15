import DataChart from "./DataChart";
import DataTable from "./DataTable";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [chartData, setChartData] = useState([
    { month: "Analytics", "Unapproved Spaces": 10, "Approved Spaces": 10, "Total Spaces": 10 },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
    let approvedSpaces = 0;

    axios
      .get(`${process.env.NEXT_PUBLIC_ROOT_URL}/users/public-rent-space/`)
      .then((res) => {
        approvedSpaces = res.data.length;
        setChartData([
          {
            month: "Analytics",
            "Unapproved Spaces": 1,
            "Approved Spaces": approvedSpaces,
            "Total Spaces": 0,
          },
        ]);
      }).then(() => {

        const res = axios.get(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/administration/rent-space-approve/`,
          {
            headers: {
              Authorization: `Bearer ${userData.access_token}`,
            },
          }
        ).then((res) => {
          setChartData([
            {
              month: "Analytics",
              "Unapproved Spaces": res.data.length,
              "Approved Spaces": approvedSpaces,
              "Total Spaces": res.data.length + approvedSpaces,
            },
          ]);
          setLoading(false);
        });
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

export default AdminDashboard;