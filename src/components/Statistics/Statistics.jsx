import PropTypes from "prop-types";
import {
  StatsContainer,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsItemLabel,
  StatsItemPercentage,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsItemLabel className="label">{label}</StatsItemLabel>
            <StatsItemPercentage>{percentage}%</StatsItemPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsContainer>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
