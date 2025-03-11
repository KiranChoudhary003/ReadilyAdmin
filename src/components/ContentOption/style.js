import styled from "styled-components";

const Wrapper = styled.section`
.container{
    width : 100%;
    min-height : 100vh;
    .header{
        display : flex;
        justify-content : space-between;
        margin : 20px;
        box-sizing : border-box;
        width : 97%;
        h1{
            font-size : 30px;
        }
        button{
            width : 80px;
            height : 40px;
            border-radius : 5px;
            border : 1px solid #cccccc;
            background :rgb(189, 189, 243);
        }
    }
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background: #fff;
    padding: 20px;
    width: 280px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h2 {
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
}

/* Flex container for label and required icon */
.modal div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
    margin-bottom: 10px;
}

span {
    font-weight: 500;
}

img {
    width: 12px; /* Adjust size as needed */
    height: 12px;
}

select {
    width: 100%;
    padding: 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 14px;
}

.btn-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

button {
    width: 45%;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
}

button:first-child {
    background: #4caf50;
    color: white;
}

button.close-btn {
    background: #ff4d4d;
    color: white;
}

button:hover {
    opacity: 0.8;
}

table {
    width: 90%;
    border-collapse: collapse;
    border: 1px solid #cccccc;
    margin : 20px;
}

th, td {
    border: 1px solid #cccccc;
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

`

export default Wrapper