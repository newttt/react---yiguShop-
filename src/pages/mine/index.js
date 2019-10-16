import React, { Component } from 'react'
import {UserWrapper} from './styled';
import Header from '@components/header'
import {PageContainer} from "@/globalStyled"
import connect from './connect'

@connect
class Mine extends Component {
    render() {
        return (
            <PageContainer>
                <Header path="/home"/>
                <UserWrapper>
                    <div className="userInfo">
                        <div className="userPic">
                            <img src={this.props.userPic}/>
                        </div>
                        <input type="file" ref="userPic" onChange={this.props.handleModifyUserPic.bind(this)}/>
                        <div className="username">{this.props.username}</div>
                    </div>


                   <div className="settings">
                       <ul>
                           <li>修改密码</li>
                           <li>修改昵称</li>
                       </ul>
                   </div>
                </UserWrapper>
            </PageContainer>
        )
    }
}


export default Mine;