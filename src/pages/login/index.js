import React, { Component } from 'react'
import {LoginWrapper} from "./styled"
import {Link} from 'react-router-dom'
import connect from './connect';

@connect
class Login extends Component {
    constructor(){
        super()
        this.state = {
            userId:"",
            password:""
        }
    }
    render() {
        let {userId,password} = this.state;
        return (
            <LoginWrapper>
              <div className="login">
                  <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
              </div>
              <div className="login-form">
                    <form id="login" onSubmit={this.props.handleLogin.bind(this,userId,password)}>
                        <label><span>账号:</span><input type="text" 
                             value={userId}
                             onChange={this.handleUser.bind(this,1)}
                        /></label>

                        <label><span>密码:</span><input type="text" 
                             value={password}
                             onChange={this.handleUser.bind(this,2)}
                        /></label>
                        <p className="userInfo"><Link to="/register">立即注册</Link></p>
                        <button type="submit">登陆</button>
                    </form>
              </div>
            </LoginWrapper>
        )
    }
    handleUser(type,e){
        let val = e.target.value;
        if(type == 1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
    }
}

export default Login