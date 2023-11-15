import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
const { Content, Footer } = Layout

const App = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Header />

        <Content
          className={"w-full px-4 mt-24"}
          style={{
            padding: "0 16px",
            marginTop: "100px",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Admin ©2023 Created by Alimov
        </Footer>
      </Layout>
    </Layout>
  )
}
export default App
