import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { Tabs } from "antd"
import { TabItems } from "./TabItems"

const StatisticTabs = () => {
  return (
    <div>
      {/*    statistic employees  */}
      <div>
        <Tabs items={TabItems} defaultActiveKey="1" />
      </div>
    </div>
  )
}

export default StatisticTabs
