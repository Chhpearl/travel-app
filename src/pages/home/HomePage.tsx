import React from 'react';
import styles from './HomePage.module.css';
import { Header } from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withTranslation, WithTranslation }  from "react-i18next";
// import axios from 'axios';
interface State {
    loading: boolean,
    error: string|null,
    productList: any[]
}

export class HomePageComponent extends React.Component<WithTranslation, State> {
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         loading:true,
    //         error:null,
    //         productList:[],
    //     }
    // }


    render() {
        const { t } = this.props;
        // const { productList, loading, error } = this.state;
console.info('jjjjj',this.props)
        return (
            <div>

                 <Header />
        
            </div>
        )

    }
}

export const HomePage = withTranslation()(HomePageComponent);


