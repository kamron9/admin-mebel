import { useState, memo } from "react";
import { Button, Modal, Popconfirm, message } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ModalActions from "./ModalActions";
import "swiper/css";
import "swiper/css/pagination";
import { useOrderModalContext } from "../../context/OrderModalContext";

const OrderModal = ({ data }) => {
  const { openModal, showModal, hideModal } = useOrderModalContext();
  console.log(data);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        открыть
      </Button>
      <Modal
        centered
        title={`информация о заказе N:${data?.id}`}
        open={openModal}
        onCancel={hideModal}
        width={1000}
        footer={<ModalActions />}
      >
        <div className={"flex gap-1 mt-5"}>
          <span>названия продуктов:</span>
          <b className={""}>{data?.product?.title}</b>
        </div>
        <div className={"flex gap-1 mt-2"}>
          <span>цена:</span>
          <b>{parseInt(data?.product?.price).toLocaleString()}рубль</b>
        </div>
        {/*    modal carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mt-10"
        >
          {data?.product?.photo.map((pic, index) => (
            <SwiperSlide key={index}>
              <img
                src={pic}
                className={"w-full aspect-video h-auto"}
                alt={`picture ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </>
  );
};
export default memo(OrderModal);
