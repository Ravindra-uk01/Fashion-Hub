import { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css";
import newRequest from "../../utils/newRequest";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await newRequest.get("/users/stats");

        if (res && res.data && res.data.userStats) {
          const stats = res.data.userStats.map((item) => ({
            name: MONTHS[item._id - 1],
            "Active User": item.total,
          }));
          setUserStats(stats);
        } else {
          console.log("No data received.");
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
    getStats();
  }, [MONTHS]);
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
