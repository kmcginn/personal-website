import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function SocialIcon({ iconId, iconName, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon title={iconName} icon={["fab", iconId]} size="3x" />
    </a>
  );
}

SocialIcon.propTypes = {
    iconId: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}