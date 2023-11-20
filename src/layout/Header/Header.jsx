import { Layout } from "antd"
import { CollapsedContext } from "../../context/Sidebar/CollapsedMenuContext"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
const { Header: AntHeader } = Layout

const Header = (props) => {
  const { collapsed, toggleCollapsedMenu } = CollapsedContext()
  return (
    <AntHeader
      {...props}
      className={"fixed top-0 z-30 bg-white w-full p-4"}
      style={{ height: 75 }}
    >
      <div
        className={"cursor-pointer inline-block"}
        onClick={toggleCollapsedMenu}
      >
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: "25px" }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: "25px" }} />
        )}
      </div>
    </AntHeader>
  )
}

export default Header
