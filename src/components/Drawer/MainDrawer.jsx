import { useState } from "react";
import { Button, Drawer } from "antd";

const MainDrawer = ({ data, children }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        footer={children}
        placement="right"
        title={data.title}
        onClose={onClose}
        open={open}
      >
        <div className={"bg-green text-white inline-block p-2"}>
          номер заказа <span className={"text"}>{data.id}</span>
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default MainDrawer;
