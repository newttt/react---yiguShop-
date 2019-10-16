import React from "react"
import {PageContainer} from "@/globalStyled"
import Header from "@components/header"
import List from "@components/list"
import {CategoryNav} from "./styled"
import connect from "./connect"
@connect
class Category extends React.Component{
    constructor(props){
        super(props)
      
        this.state = {
            flag:false,
            type:"智能排序",
            childNav:[
                {
                    name:"智能排序",
                    sortId:1
                },
                {
                    name:"离我最近",
                    sortId:3
                },
                {
                    name:"价格最高",
                    sortId:4
                },
                {
                    name:"价格最低",
                    sortId:2
                }
            ],
            activeIndex:0
        }


        this.state.id = this.props.match.params.id;
    }
    render(){
        let {flag,type,childNav,activeIndex} = this.state
        return (
            <PageContainer>
                <Header path="/home" info="首页"/>
                <CategoryNav>
                    <div className="nav">
                        <div>全部</div>
                        <div onClick={this.handleToggle.bind(this)}>{type}</div>
                    </div>
                    <div style={{display:flag?'block':'none'}} className="childNav">
                        <ul>
                           {
                               childNav.map((item,index)=>(
                                    <li 
                                        key={index}
                                        className={activeIndex == index?'active':''}
                                        onClick={this.handleClick.bind(this,index,item.sortId,item.name)}
                                        >{item.name}</li>
                               ))
                           }
                        </ul>
                    </div>
                </CategoryNav>
                <List/>
            </PageContainer>
        )
    }
    handleToggle(){
        this.setState({
            flag:!this.state.flag
        })
    }
    handleClick(index,sortId,name){
        this.setState({
            activeIndex:index,
            flag:false,
            type:name
        })


        this.props.handleAsyncList(this.state.id,sortId,this.props.cityId)

    }
    componentDidMount(){
        this.props.handleAsyncList(this.state.id,1,this.props.cityId)
    }
}

export default Category;