import Layout from "../shared/component/Layout/index";
import Header from "../shared/component/Header/index";
import CategoryList from "../shared/component/CategoryList/index";
import {Col, Row} from "antd/lib";
import ProductList from "../shared/component/ProductList/index";

export default function Home() {
  return (
    <>
       <Layout>
           <Header size='large' text='Гарнитура Cooler Master CH331 USB' hasButton />
           <CategoryList />
          <div className='page_content'>
              <Row gutter={20}>
                  <Col xl={12} xs={24}>
                       <Header size='small' text='Гарнитура Cooler Master CH331 USB' />
                  </Col>
                  <Col xl={12} xs={24}>
                       <Header size='small' text='Гарнитура Cooler Master CH331 USB' />
                  </Col>
              </Row>
          </div>
           <div className='page_content'>
               <ProductList />
           </div>
       </Layout>
    </>
  );
}
