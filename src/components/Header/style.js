import styled from "styled-components";

const Wrapper = styled.header`
background : black;
width : calc(100%-210px);
color : white;
.header{
    display : flex;
    justify-content : space-between;
    align-items : center;
    h1{
        font-size : 25px;
        padding : 20px;
        border-left : 0.5px solid white;
    }   
    img{
        width : 20px;
        height : 20px;
        padding-right : 20px;
    }
}
`

export default Wrapper