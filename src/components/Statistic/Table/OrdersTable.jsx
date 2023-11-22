import { Table } from "antd";

const OrdersTable = () => {
  const columns = [
    {
      title: "имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "номер телефона",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "состояние",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "действия",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <Table
      title={() => "новые заказы\n"}
      className={"w-full"}
      columns={columns}
    />
  );
};

export default OrdersTable;
