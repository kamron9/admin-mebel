import { Layout } from "antd"
import { CollapsedContext } from "../../context/Sidebar/CollapsedMenuContext"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import styles from "./header.module.scss"
const { Header: AntHeader } = Layout

const Header = (props) => {
  const { collapsed, toggleCollapsedMenu } = CollapsedContext()
  return (
    <AntHeader {...props} className={styles.header} style={{ height: 75 }}>
      <div className={styles.collapsed_menu__btn} onClick={toggleCollapsedMenu}>
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
