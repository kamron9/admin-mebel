import { SearchOutlined } from "@ant-design/icons"
import { useRef, useState, memo } from "react"
import Highlighter from "react-highlight-words"
import { Button, Input, Space, Table } from "antd"
import EmployeesDrawer from "../../components/Drawer/EmployeesDrawer/EmployeesDrawer"
import { useEmployeesContext } from "../../context/employees/Employees"

const EmployeesTable = ({ employeesData }) => {
  const { showDrawer } = useEmployeesContext()
  const [searchText, setSearchText] = useState("")
  const [searchedColumn, setSearchedColumn] = useState("")
  const searchInput = useRef(null)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText("")
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  })
  const columns = [
    {
      title: "fullName",
      dataIndex: "fullName",
      key: "fullName",
      width: "30%",
      ...getColumnSearchProps("fullName"),
    },
    {
      title: "birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: "20%",
      ...getColumnSearchProps("birthDay"),
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: (_, data) => (
        <Button onClick={() => showDrawer(data)}>Edit</Button>
      ),
    },
  ]
  return (
    <>
      <Table
        bordered
        pagination={false}
        scroll={{
          x: 800,
          y: 500,
        }}
        columns={columns}
        dataSource={employeesData}
        rowKey={"_id"}
      />
      <EmployeesDrawer />
    </>
  )
}
export default EmployeesTable
