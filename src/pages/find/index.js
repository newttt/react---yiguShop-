import React, { Component } from 'react'
import Swiper from '@lib/swiper'
export default class Find extends Component {
    constructor(){
        super()
        this.state = {
            banner : [
                {
                    imgUrl:"https://static.maizuo.com/v5/upload/500b2ab1a47f73d0a54d1a39ce518a6d.jpg?x-oss-process=image/quality,Q_70"
                },
                {
                    imgUrl:"https://static.maizuo.com/v5/upload/f2f1d6ed8d740aad120d28178a5296c1.jpg?x-oss-process=image/quality,Q_70"
                },
                {
                    imgUrl:"https://static.maizuo.com/v5/upload/a2a67dd1b49ca35b355530e4d3a721dd.jpg?x-oss-process=image/quality,Q_70"
                }
            ]
        }
    }
    render() {
        return (
            <Swiper swiperItems={this.state.banner}></Swiper>
        )
    }
}
