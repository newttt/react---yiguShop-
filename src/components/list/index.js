import React, { Component } from 'react'
import { ListWrapper } from './styled'
import connect from "./connect";
@connect
class List extends Component {
    render() {
        let { list } = this.props
        return (
            <ListWrapper>
                {
                    list.map((item, index) => (
                        <div className="goods_item" key={index}>
                            <div className="item_pic">
                                <img src={item.product_image} />
                            </div>
                            <div className="item_des">
                                <div className="name">{item.name}</div>
                                <div className="price">{item.price / 100}/位</div>
                            </div>
                        </div>
                    ))
                }

            </ListWrapper>
        )
    }
}

export default List;