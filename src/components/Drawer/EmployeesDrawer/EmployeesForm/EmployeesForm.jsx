import styles from "../drawer.module.scss"

import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Popconfirm,
  Select,
} from "antd"
import TextArea from "antd/es/input/TextArea"
import {
  EmployeesContext,
  useEmployeesContext,
} from "../../../../context/employees/Employees"
import { option } from "./roles"
import { useContext } from "react"

const App = () => {
  const { closeDrawer } = useEmployeesContext()
  const { employeeData } = useContext(EmployeesContext)
  const onFinish = (values) => {
    console.log("Success:", values)
    message.success("message successfuly saved")
    closeDrawer()
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Form
      layout={"vertical"}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        initialValue={employeeData.name}
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="birth day"
        name="birdth-day"
        rules={[
          {
            type: "object",
            required: true,
            message: "Please select your birth day!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="phone number"
        name="phone"
        initialValue={employeeData.phone}
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input addonBefore={"+998"} />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        initialValue={employeeData.email}
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={"role"}
        name={"role"}
        rules={[
          {
            required: true,
            message: "please select role",
          },
        ]}
      >
        <Select placeholder={"select role"} options={option} />
      </Form.Item>

      <Form.Item label="intro" name="intro" initialValue={employeeData.website}>
        <TextArea />
      </Form.Item>
      <div className={styles.drawer_form_bottom}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            save
          </Button>
          <Button
            onClick={closeDrawer}
            className={styles.drawer_form_close_btn}
          >
            cancel
          </Button>
        </Form.Item>
        <Popconfirm
          title={"are you sure to delete this user"}
          onConfirm={() => message.success("user successfuly deleted")}
          okButtonProps={{ danger: true, type: "dashed" }}
        >
          <Button danger type="primary">
            Delete user
          </Button>
        </Popconfirm>
      </div>
    </Form>
  )
}
export default App
