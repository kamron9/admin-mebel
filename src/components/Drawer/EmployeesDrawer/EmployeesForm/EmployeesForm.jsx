import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Popconfirm,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEmployeesContext } from "../../../../context/employees/Employees";
import { option } from "./roles";
import EmployeesService from "../../../../service/statistic-service/employeesService";
import { useForm } from "antd/es/form/Form";

const EmployeesForm = () => {
  const { closeDrawer, employeeData } = useEmployeesContext();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("message successfuly saved");
    EmployeesService.create(values).then((result) => console.log(result));
    form.setFieldsValue({
      fullName: "",
      phone: "",
      email: "",
      role: "",
      additional: "",
      birthday: "",
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCloseDrawer = () => {
    closeDrawer();
    form.resetFields();
    // form.setFieldsValue({
    //   fullName: "",
    //   phone: "",
    //   email: "",
    //   role: "",
    //   additional: "",
    //   birthday: "",
    // });
  };
  return (
    <Form
      form={form}
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
      <div>
        <input type="text" defaultValue={employeeData.fullName} />
      </div>
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
        valuePropName={"role"}
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
      <div
        className={"absolute bottom-5 left-0 flex justify-between w-full px-5"}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit">
            save
          </Button>
          <Button onClick={handleCloseDrawer} className={"ml-3"}>
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
  );
};
export default EmployeesForm;
