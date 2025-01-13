import React, { useState } from "react";
import { useQuery } from "react-query";
import KitchenService from "../../../service/Kitchen/KitchenService";
import { Avatar, Button, Card, Col, Divider, List, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Spinner from "../../Spinner/Spinner";
import { Content } from "antd/es/layout/layout";
import Filter from "./Filter";
import MainDrawer from "../../Drawer/MainDrawer";

const KitchenTable = () => {
  const [tableData, setTableData] = useState([]);
  const { isLoading } = useQuery(
    ["kitchen"],
    async () => KitchenService.getAll(),
    {
      select: ({ products }) => products,
      onSuccess: (data) => setTableData(data),
      onError: (error) => console.log(error),
    },
  );

  return (
    <div className="max-w-screen-2xl">
      <Filter />
      {isLoading && <Spinner />}
      <Row gutter={[24, 24]}>
        {tableData.map((item) => (
          <Col xs={24} md={12} lg={8} xl={6}>
            <div className="bg-white shadow-md rounded-lg">
              <img
                src={item.images[0]}
                width={"100%"}
                height={300}
                className="object-cover rounded-lg"
              />
              <Divider className="m-2" />
              <div className="p-2 flex justify-between">
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.price.toLocaleString()} rubl</p>
                </div>
                <MainDrawer data={item}>
                  <Button>delete</Button>
                </MainDrawer>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KitchenTable;
