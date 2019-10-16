import styled from "styled-components";

export const UserWrapper = styled.div`
    background:#f6f6f6;
    height:100%;
  
    .userInfo{
        width:100%;
        height:2rem;
        background:#fff;
        display:flex;
        align-items:center;
        padding:0 .2rem;
        position: relative;
        input{
            position: absolute;
            opacity:0;
            width:1.5rem;
            height:1.5rem;
        }
    }
    .userPic{
        position:absolute;
        width:1.5rem;
        height:1.5rem;
        border-radius:50%;
        border:1px solid #ccc;
        overflow:hidden;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .username{
        font-size:.3rem;
        font-weight:900;
        margin-left:1.6rem;
       
    }
    .settings{
        margin-top:.4rem;
        width:100%;
        background:#fff;
        ul{
            width:100%;
        }
        li{
            width:100%;
            padding:0 .2rem;
            line-height:.8rem;
            font-size:.3rem;
            border-bottom:1px solid #ccc;
        }
    }

`