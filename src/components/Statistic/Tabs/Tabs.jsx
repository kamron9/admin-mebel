import { Tabs } from "antd";
import { TabItems } from "./TabItems";

const StatisticTabs = () => {
  return (
    <div className={"flex"}>
      {/*    Statistic employees  */}
      <div className={"w-8/12  border-2 border-black"}>
        <Tabs items={TabItems} defaultActiveKey="1" />
      </div>
    </div>
  );
};

export default StatisticTabs;
