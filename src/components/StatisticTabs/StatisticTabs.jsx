import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {Tabs} from "antd";
import {TabItems} from "./TabItems";

const StatisticTabs = () => {
    return (
        <div>
        {/*    statistic employees  */}
            <div className={'flex items-center mt-4'}>
                <FontAwesomeIcon icon={faUsers} />
                <p className={'ml-1 text-lg font-thin'}>active employees:<span className={'text-sm font-bold'}>123</span></p>
            </div>
            <div>
                <Tabs items={TabItems} defaultActiveKey='1'/>
            </div>
        </div>
    );
};

export default StatisticTabs;