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
        font-size : 35px;
        padding : 20px;
        padding-left : 500px;
    }   
    img{
        width : 30px;
        height : 30px;
        padding-right : 20px;
    }
}
`

export default Wrapper