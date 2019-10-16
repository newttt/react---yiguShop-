import styled from "styled-components";

export const ListWrapper = styled.div`
    .goods_item{
        padding:.3rem;
        display:flex;   
    }
    .item_pic{
        flex-shrink:0;
        width:3.45rem;
        height:2.3rem;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .item_des .name{
        height:1.2rem;
        font-size:.3rem;
        line-height:1.3;
    }
    .item_des .price{
        color:#ff3939;
        font-size:.3rem;
    }
`