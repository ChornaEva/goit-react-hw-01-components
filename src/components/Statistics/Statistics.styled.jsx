import styled from "styled-components";

export const StatsContainer = styled.section`
  box-sizing: border-box;
  border-color: white;
  width: 250px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
`;

export const StatsTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 20px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  color: white;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px 0;

  &:nth-child(1) {
    background-color: #39aff3;
  }

  &:nth-child(2) {
    background-color: violet;
  }

  &:nth-child(3) {
    background-color: #ca1a5d;
  }

  &:nth-child(4) {
    background-color: #1da747;
  }

  &:nth-child(5) {
    background-color: #f06c38;
  }
`;

export const StatsItemLabel = styled.span`
  font-size: 12px;
  margin-bottom: 7px;
`;

export const StatsItemPercentage = styled.span`
  font-size: 16px;
`;
