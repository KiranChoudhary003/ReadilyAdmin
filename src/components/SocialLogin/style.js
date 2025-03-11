import styled from "styled-components";

const Wrapper = styled.section`
.container{
    margin : 20px;
    width : 96%;
    box-sizing : border-box;
    h1{
        font-size : 30px;
    }
}
.sections{
    display : flex;
    flex-direction : column;
    .section{
        display : flex;
        border : 1px solid #cccccc;
        margin : 30px 0 0;
        box-sizing : border-box;
        width : 100%;
        padding : 20px;
        text-align : center;
        img{
            width : 25px;
            height : 25px;
            margin-right : 20px;
        }
        h2{
            font-size : 20px;
        } 
        .down{
            margin-left: auto; 
            display: flex;
            align-items: center;
            img{
                width : 15px;
                height : 15px;
                transition: transform 0.2s ease-in-out;
            }
            img.rotated {
                transform: rotate(180deg);
            }
        }
    }
}
.google,
.meta,
.twitter,
.linkedIn{
  width : 100%;
}
.content{
    border-left : 0.5px solid #cccccc;
    border-right : 0.5px solid #cccccc;
    border-bottom : 0.5px solid #cccccc;
    box-shadow : 2px 2px 2px #aaaaaa;
    padding : 10px;
    input{
        margin-left : 10px;
    }
}
.save{  
    width : 100%;
    display : flex;
    justify-content : flex-end;
    padding-top : 30px;
    button{ 
        width : 80px;
        height : 35px;
        text-align : center;
        border-radius : 5px;
        border : 1px solid #cccccc;
        background :rgb(189, 189, 243);
        font-weight : bold;
    }
}
`

export default Wrapper