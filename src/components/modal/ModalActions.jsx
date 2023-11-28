import { memo } from "react";
import { Button, message, Popconfirm } from "antd";
import { useOrderModalContext } from "../../context/OrderModalContext";
import { NEWSTATE, REJECTEDSTATE, ACCEPTEDSTATE } from "../../utils/consts";

const ModalActions = () => {
  const { openModal, showModal, hideModal } = useOrderModalContext();
  const confirmCancel = () => {
    console.log("deleted");
    message.error("заказ отменено");
    hideModal();
  };

  return (
    <div>
      {/*new*/}
      {"new" && (
        <>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirmCancel}
            okButtonProps={{ danger: true }}
            okText="да"
            cancelText="нет"
          >
            <Button type={"primary"} danger>
              отменять заказ
            </Button>
          </Popconfirm>
          <Button type={"primary"}>prinyat</Button>
        </>
      )}

      {/*rejected*/}
      {"rejected" && (
        <Button type={"primary"} danger>
          delete
        </Button>
      )}

      {/*accepted*/}
      {"accepted" && (
        <div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirmCancel}
            okButtonProps={{ danger: true }}
            okText="да"
            cancelText="нет"
          >
            <Button type={"primary"} danger>
              delete заказ
            </Button>
          </Popconfirm>
          <Button>otmenit zakaz</Button>
        </div>
      )}
    </div>
  );
};
export default memo(ModalActions);
