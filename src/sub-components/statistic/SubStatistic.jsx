import React from "react";
import AreaChart from "../../charts/statistic/AreaChart";
import StatisticTabs from "../../components/StatisticTabs/StatisticTabs";
import BarChart from "../../charts/statistic/BarChart";

const SubStatistic = () => {
  return (
    <div>
      {/*  charts */}
      <div className={"flex"}>
        <div className={"w-full"}>
          <h3 className={"text-center mb-5 font-thin text-xl"}>online sales</h3>
          <AreaChart />
        </div>
        <div className={"w-full"}>
          <h3 className={"text-center mb-5 font-thin text-xl"}>
            in-store sales
          </h3>
          <BarChart />
        </div>
      </div>
      {/*  tabs */}
      <StatisticTabs />
    </div>
  );
};

export default SubStatistic;
