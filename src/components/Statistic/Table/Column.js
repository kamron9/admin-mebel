import { Button, Tag } from "antd";
import OrderModal from "../../modal/OrderModal";

export const columns = [
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
    title: "тип",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "состояние",
    dataIndex: "state",
    key: "state",
    render: (_, { state }) => {
      return (
        <Tag color={state === "rejected" ? "red" : "green"}>
          {state?.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "действия",
    dataIndex: "action",
    key: "action",
  },
];
