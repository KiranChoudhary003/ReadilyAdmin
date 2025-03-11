import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;

  .pagination-button {
    padding: 8px 12px;
    border: none;
    background: #ddd;
    color: black;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s, transform 0.2s;
    outline: none;
  }

  .pagination-button:hover {
    background: #ffffff;
  }

  .active {
    background: #f0f0f0;
    color: #999;
    border-radius: 6px;
    cursor: allowed;
    font-size: 14px;
    padding: 8px 12px;
  }

  .disabled {
    background: #f0f0f0;
    color: #999;
    border-radius: 6px;
    cursor: not-allowed;
    font-size: 14px;
    padding: 8px 12px;
  }

  .previous.disabled, .next.disabled {
    background: #f0f0f0;
    color: #999;
    border-radius: 6px;
    cursor: not-allowed;
    font-size: 14px;
    padding: 8px 12px;
  }

  .previous.active, .next.active {
    background: #ddd;
    color: black;
    cursor: pointer;
  }

  .previous.active:hover, .next.active:hover {
    background: #ffffff;
  }
`;
export const TableWrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  font-family: Arial, sans-serif;

  .table-container {
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .table-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  }

  .table-header input {
    padding: 10px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .add-user, .delete-users {
    background: radial-gradient(circle, white 1%, #9999ff 99%);
    color: black;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    transition: background 0.3s, transform 0.2s;
  }

  .add-user:hover {
    background: #8080ff;
    transform: scale(1.05);
  }

  .delete-users {
    background: #dc3545;
    color: white;
  }

  .delete-users:hover {
    background: #c82333;
    transform: scale(1.05);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #333;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #ccccff;
  }

  tr:hover {
    background-color: #f1f1f1;
    transition: background 0.3s;
  }

  .table-header-container {
    background: #000000;
    padding: 10px;
  }

  .active {
    color: green;
    font-weight: bold;
  }

  .inactive {
    color: red;
    font-weight: bold;
  }

  .process {
    color: #856404;
    font-weight: bold;
  }

  .edit, .delete {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s;
  }

  .edit {
    color: blue;
    margin-right: 10px;
    padding: 5px;
  }

  .edit:hover {
    color: #0033cc;
  }

  .delete {
    color: red;
  }

  .delete:hover {
    color: darkred;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: white;
    padding: 30px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  input, select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    margin: 5px;
    border: none;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  button:hover {
    background: #f0f0f0;
    transform: scale(1.05);
  }
`;
