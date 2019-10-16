import styled from "styled-components";

export const SwiperContainer = styled.div`
    width:100%;
    min-height:4rem;
    position:relative;
    overflow:hidden;
    .swiper-content{
        display:flex;
        position:absolute;
        left:0;
        transition:left 0.2s ease-in-out;
    }
    .swiper-spot{
        width:100%;
        display:flex;
        justify-content:center;
        position:absolute;
        bottom:10px;
        div{
            width:.16rem;
            height:.16rem;
            background:#fff;
            border-radius:50%;
            margin:10px;
        }
        .active{
            background:#c33;
        }
    }
`