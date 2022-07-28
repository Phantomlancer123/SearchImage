import "./App.css";
import { Layout } from "antd";
import { Content, Header, Footer } from "./components";

const App = () => {
  return (
    <Layout className="main__layout">
      <Layout.Header className="main__header">
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Content />
      </Layout.Content>
      <Layout.Footer className="main__footer">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default App;
