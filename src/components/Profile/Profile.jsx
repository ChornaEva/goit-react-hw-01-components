import PropTypes from "prop-types";
import {
  ProfileContainer,
  ProfileDescription,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  Statistics,
  StatsListWraper,
  StatsTitle,
  StatsQuantity,
} from "./Profile.styled";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <img src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <Statistics>
        <StatsListWraper>
          <StatsTitle>Followers</StatsTitle>
          <StatsQuantity> {followers}</StatsQuantity>
        </StatsListWraper>
        <StatsListWraper>
          <StatsTitle>Views</StatsTitle>
          <StatsQuantity> {views}</StatsQuantity>
        </StatsListWraper>
        <StatsListWraper>
          <StatsTitle>Likes</StatsTitle>
          <StatsQuantity> {likes}</StatsQuantity>
        </StatsListWraper>
      </Statistics>
    </ProfileContainer>
  );
};

export default Profile;

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
