import styled from "styled-components";

export const WeekListWrapper = styled.div`
    margin:0 .4rem;
    height:100%;
    overflow:auto;
    .weekList{
        padding-top:.6rem;
    }
    h2{
        font-size:.4rem;
    }
    p{
        margin-top:10px;
        color:#ff3939;
    }
    .weekList_child{
        width:6.7rem;
        padding:.4rem 0;
        img{
            width:100%;
            height:4.46rem;
        }
        .title{
            color:#2c3038;
            margin-top:.3rem;
            font-size:.36rem;
        }
        .des{
            color:#92969c;
            font-size:.3rem;
            margin-top:16px;
        }
    }
`