import React, { Component } from 'react'
import Header from "@components/header"
import {PageContainer} from "@/globalStyled"
import WeekList from '@components/WeekList'
export default class Home extends Component {
    render() {
      
        return (
            <PageContainer>
                <Header path="/classify"/>
                <WeekList/>
            </PageContainer>
        )
    }
}
