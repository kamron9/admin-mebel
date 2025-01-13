import { Spin } from "antd"

const Spinner = () => (
  <div
    className="flex justify-center items-center w-full"
    style={{ height: "calc(100vh - 100px)" }}
  >
    <Spin size="large" />
  </div>
)

export default Spinner
