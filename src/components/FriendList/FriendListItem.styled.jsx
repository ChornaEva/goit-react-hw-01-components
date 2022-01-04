import styled from "styled-components";

export const FriendItem = styled.li`
  margin: 20px auto;
  padding: 20px;
  max-width: 250px;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
  border-radius: 8px;

  list-style: none;
  display: flex;
  align-items: center;
`;

const getBgColor = ({ isOnline }) => (isOnline ? "green" : "red");

export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${getBgColor};
`;

export const FriendAvatar = styled.img`
  margin-left: 20px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  text-transform: capitalize;
`;
