import { Menu, Layout } from "antd"
import { sidebarItem } from "./SidebarItems"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Logo from "../../assets/images/logo.png"
import { CollapsedContext } from "../../context/Sidebar/CollapsedMenuContext"

const { Sider } = Layout
const Sidebar = () => {
  const navigate = useNavigate()
  const { collapsed, setCollapsed } = CollapsedContext()

  useEffect(() => {
    if (window.innerWidth < 600) {
      setCollapsed(true)
    }
  }, [])

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Link
        to={"/"}
        className={`flex items-center my-4 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <img src={Logo} width={60} alt={"logo"} />
        {!collapsed && <h1 className={"text-white"}>Sofiya</h1>}
      </Link>
      <Menu
        theme="dark"
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        items={sidebarItem}
        onClick={({ key }) => {
          navigate(key)
        }}
      />
    </Sider>
  )
}

export default Sidebar
