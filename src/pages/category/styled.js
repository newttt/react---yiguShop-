import styled from "styled-components";

export const CategoryNav = styled.div`
    width:100%;
    background:#fff;
    height:.79rem;
    border-bottom:1px solid #ccc;
    position:relative;
    .nav{
        width:100%;
        height:.79rem;
        display:flex;
        div{
            width:100%;
            text-align:center;
            line-height:.79rem;
        }
        div:nth-child(1){
            border-right:1px solid #ccc;
        }
    }
    .childNav{
        width:100%;
        position:absolute;
        left:0;
        top:.79rem;
        background:#fff;
        li{
            width:100%;
            height:.8rem;
            text-align:center;
            line-height:.8rem;
            border-bottom:1px solid #ccc;
        }
        .active{
            color:#c33;
        }
    }
`