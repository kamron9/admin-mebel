import { Table } from "antd";
import { orderData } from "../../../data/order";
import { columns } from "./Column";

const OrdersTable = ({ status }) => {
  const ordersType = orderData.filter((data) => data.state === status);
  return (
    <Table
      pagination={{
        current: 1,
        pageSize: 10,
      }}
      scroll={{ x: 600, y: 600 }}
      title={() => `${status} заказы\n`}
      className={"w-full"}
      dataSource={ordersType}
      columns={columns}
      rowKey={"id"}
    />
  );
};

export default OrdersTable;
