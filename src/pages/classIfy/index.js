import React, { Component } from 'react'
import { PageContainer } from '@/globalStyled'
import Header from "@components/header"
import connect from "./connect";
import { ClassIfyList } from "./styled"
import {Link} from 'react-router-dom';
@connect
class ClassIfy extends Component {
    render() {
        let { classIfy } = this.props;
        return (
            <PageContainer>
                <Header info="首页" path="/home" />
                {
                    classIfy.map((item, index) => (
                        <ClassIfyList key={index}>
                            <div className="title">{item.name}</div>
                            <ul>
                                {
                                    item.sub_category_list.map((child, idx) => (
                                        <li key={idx} 
                                            data-id={child.sub_category_list?child.sub_category_list[0].id:""}>
                                            <Link to={'/category/'+(child.sub_category_list?child.sub_category_list[0].id:"")}>{child.name}</Link>
                                            </li>
                                    ))
                                }


                            </ul>
                        </ClassIfyList>
                    ))
                }

            </PageContainer>
        )
    }
    componentDidMount() {
        this.props.handleAsyncClassify();
    }
}


export default ClassIfy;