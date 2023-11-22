import OrdersTable from "../Statistic/Table/OrdersTable";

export const TabItems = [
  {
    key: "1",
    label: "новые заказы",
    children: <OrdersTable />,
  },
  {
    key: "2",
    label: "получены заказы",
    children: <h1>получены заказы </h1>,
  },
  {
    key: "3",
    label: "отмененные заказы",
    children: <h1>отмененные заказы</h1>,
  },
];
