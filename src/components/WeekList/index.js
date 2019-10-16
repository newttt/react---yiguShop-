import React, { Component } from 'react'
import { WeekListWrapper } from './styled'
import connect from './connect';
import Bscroll from '@common/bscroll'
@connect
class WeekList extends Component {
    render() {
        let { week_choice } = this.props;
        return (
            <WeekListWrapper>
                <Bscroll ref="bscroll">
                    <div>
                        {
                            week_choice.map((item, index) => (
                                <div className="weekList" key={index}>
                                    <h2>{item.group_section.title}</h2>
                                    <p>{item.group_section.desc}</p>
                                    {
                                        item.tabs.map((child, idx) => (
                                            <div className="weekList_child" key={idx}>
                                                <img src={child.url} alt="" />
                                                <div className="title">{child.title}</div>
                                                <div className="des">{child.desc}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                            ))
                        }
                    </div>
                </Bscroll>
            </WeekListWrapper>
        )
    }
    componentDidMount() {
        this.props.handleAsyncWeek(this.props.cityId,this.props.page);
        
        //上拉加载更多
        this.refs.bscroll.handlepullingUp(async ()=>{
           let flag = await this.props.handleAsyncWeek(this.props.cityId,this.props.page);
           if(flag){
               this.refs.bscroll.handlefinishPullUp();
           }
        })

        //下拉刷新
       this.refs.bscroll.handlepullingDown(async ()=>{
            let page = parseInt(Math.random()*7);
           let flag = await this.props.handleAsyncWeek(this.props.cityId,page,"update")
            if(flag){
                this.refs.bscroll.handlefinishPullDown();
            }
        })

        
    }
}



export default WeekList