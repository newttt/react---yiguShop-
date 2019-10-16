import React, { Component } from 'react'
import {HeaderWrapper} from "./styled.js"
import logo from "../../static/logo.png"
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        let {info,path} = this.props;
        return (
            <HeaderWrapper>
                <div className="header_l"><Link to={path}>{info}</Link></div>
                <div>
                    <img src={logo}/>
                </div>
                <div className="header_r">
                    <span><Link to="/login">登陆</Link></span>
                    <i className="iconfont">&#xe62a;</i>
                </div>
            </HeaderWrapper>
        )
    }
}

Header.defaultProps = {
    info:"分类",
    path:"/home"
}


export default Header;