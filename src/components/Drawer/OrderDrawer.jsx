import { useState } from "react";
import { Button, Drawer } from "antd";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { ReactComponent as PhoneIcon } from "../../assets/call.svg";

const OrderDrawer = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data);
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
      <Drawer title={data.name} placement="right" onClose={onClose} open={open}>
        <div
          className={
            "h-20 bg-gray rounded-xl p-6 flex justify-start items-start"
          }
        >
          <div className={"flex items-center"}>
            <UserIcon />
          </div>
          <div className={""}>
            <p className={"text-lg"}>{data.name}</p>
            <p>{data.phone}</p>
          </div>
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default OrderDrawer;
