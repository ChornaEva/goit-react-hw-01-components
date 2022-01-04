import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: 30px auto;
  max-width: 250px;
  background-color: white;
  box-shadow: 0 0 15px 0 rgba(158, 154, 154, 0.4);
  border-radius: 8px;

  text-align: center;
  border: 1px solid #e1ecdc;
`;

export const ProfileDescription = styled.div`
  font-size: 16px;
  letter-spacing: 0.3px;
  color: black;

  img {
    display: block;
    margin: 20px auto 20px;
    width: 120px;
    border-radius: 50%;
    border: 0, 5px solid pink;
  }
`;

export const ProfileName = styled.p`
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const ProfileTag = styled(ProfileName)`
  font-weight: 500;
  font-size: 14px;
  color: gray;
`;

export const ProfileLocation = styled(ProfileTag)`
  font-weight: 500;
  font-size: 14px;
  color: gray;
`;

export const Statistics = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: whitesmoke;
  border-top: 2px solid rgba(99, 96, 96, 0.1);
`;

export const StatsListWraper = styled.li`
  &:not(:first-child) {
    border-left: 2px solid rgba(99, 96, 96, 0.1);
  }
  text-align: center;
  width: 30%;
`;

export const StatsTitle = styled.li`
  padding: 10px;
  font-weight: 500;
  font-size: 13px;
  color: gray;
`;

export const StatsQuantity = styled(StatsTitle)`
  font-weight: 700;
  font-size: 16px;
  color: black;
  padding-top: 0;
  padding-bottom: 10px;
`;
