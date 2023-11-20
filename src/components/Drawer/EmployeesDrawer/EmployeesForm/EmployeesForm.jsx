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
import { useEmployeesContext } from "../../../../context/employees/Employees"
import { option } from "./roles"
import EmployeesService from "../../../../service/statistic-service/employeesService"

const EmployeesForm = () => {
  const { closeDrawer, employeeData } = useEmployeesContext()

  const onFinish = (values) => {
    console.log("Success:", values)
    message.success("message successfuly saved")
    EmployeesService.create(values).then((result) => console.log(result))
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  const handleCloseDrawer = () => {
    closeDrawer()
  }
  return (
    <Form
      layout={"vertical"}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="fullName"
        name="fullName"
        initialValue={employeeData.fullName}
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
        name="birthday"
        // initialValue={employeeData.birthDay}
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
        initialValue={employeeData.role}
        rules={[
          {
            required: true,
            message: "please select role",
          },
        ]}
      >
        <Select placeholder={"select role"} options={option} />
      </Form.Item>

      <Form.Item
        label="additional"
        name="additional"
        initialValue={employeeData.additional}
      >
        <TextArea rows={"5"} />
      </Form.Item>
      <div className={styles.drawer_form_bottom}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            save
          </Button>
          <Button
            onClick={handleCloseDrawer}
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
export default EmployeesForm
