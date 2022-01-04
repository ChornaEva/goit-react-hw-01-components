import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 700px;
  text-align: center;
  margin: 20px auto;
  border: 1px solid whitesmoke;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
`;

export const TableHead = styled.th`
  background-color: #00bcd5;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px;
`;

export const TableColumn = styled.td`
  color: #818181;
  padding: 10px;
  text-transform: capitalize;
  font-size: 12px;
  width: calc(100% / 3);
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: whitesmoke;
  }
`;
