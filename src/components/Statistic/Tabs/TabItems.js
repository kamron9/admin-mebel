import OrdersTable from "../Table/OrdersTable";

export const TabItems = [
  {
    key: "1",
    label: "новые заказы",
    children: <OrdersTable status={"new"} />,
  },
  {
    key: "2",
    label: "получены заказы",
    children: <OrdersTable status={"accepted"} />,
  },
  {
    key: "3",
    label: "отмененные заказы",
    children: <OrdersTable status={"rejected"} />,
  },
];
