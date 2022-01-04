import PropTypes from "prop-types";

import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
