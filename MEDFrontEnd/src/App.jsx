import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
import Sidebar from "./Sidebar";
import CartItem from "./Cartitem";
import Footer from "./Footer";
import Headerr from "./Header";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            
              <AppHeader />
        
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <AppRoutes />
          </Content>
        </Col>
      </Row>
      <Sidebar />
      {/* <CartItem/>  */}
      <Footer />
    </Layout>
  );
};

export default App;
