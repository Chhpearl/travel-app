import React from 'react';
import styles from './HomePage.module.css';
import { Header, SideMenu, Carousel, ProductCollection } from '../../components';
import { Row, Col, Typography } from 'antd';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withTranslation, WithTranslation } from "react-i18next";
import { ProductCollectionList as productList} from '../../components/ProductCollection/ProductCollectionList';


export class HomePageComponent extends React.Component<WithTranslation> {

    render() {
        const { t } = this.props;
        return (
            <div>
                <Header />
                <div className={styles['page-content']}>
                    <Row style={{ marginTop: "20px" }}>
                        <Col span={6}>
                            <SideMenu />
                        </Col>
                        <Col span={18}>
                            <Carousel />
                        </Col>
                    </Row>
                    <ProductCollection 
                        title={
                            <Typography.Title level={3} type="warning">
                            { t("home_page.hot_recommended")}
                            </Typography.Title>}
                        sideImage={sideImage}
                        products={productList[0].touristRoutes}
                    />
                    <ProductCollection 
                        title={
                            <Typography.Title level={3} type="danger">
                            {t("home_page.new_arrival")}
                            </Typography.Title>}
                        sideImage={sideImage2}
                        products={productList[1].touristRoutes}
                    />
                    <ProductCollection 
                        title={
                            <Typography.Title level={3} type="success">
                            {t("home_page.domestic_travel")}
                            </Typography.Title>}
                        sideImage={sideImage3}
                        products={productList[2].touristRoutes}
                    />
                </div>

            </div>
        )

    }
}

export const HomePage = withTranslation()(HomePageComponent);


