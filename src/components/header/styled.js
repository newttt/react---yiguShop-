import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:.88rem;
    background:#333;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    color:#fff;
    font-size:.3rem;
    .header_l{
        position:absolute;
        left:.2rem;
        a{
            color:#fff;
        }
    }
    .header_r{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        right:.2rem;
        i{
            font-size:.46rem;
            margin-left:.2rem;
        }
    }
`