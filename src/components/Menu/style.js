import styled from "styled-components";

const Wrapper = styled.section`
width : 100%;
min-height: 100vh;
.menu-bar{
    background : black;
    color : white;
    width : 210px;
    min-height : 100vh;
    display : flex;
    flex-direction : column;
    position : relative;
    top : 0;
}
.heading{
    h1{
        font-size : 25px;
        padding : 20px;
        border-bottom : 0.5px solid white;
    }
}
.content{
    display : flex;
    flex-direction : column;
    flex-grow: 1;
    div{
        display : flex;
        align-items : center;
        padding : 20px;
    }
    img{
        width : 20px; 
        height : 20px;
    }
    span{
        margin-left : 10px;
    }
}
.logout{
position: absolute;
    bottom: 20px; 
    left: 30%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        transform : rotate(180deg);
    }
}
`

export default Wrapper