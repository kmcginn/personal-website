import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SocialIcon({ icon, iconDisplayName, link }: {icon: IconDefinition, iconDisplayName: string, link: string}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon title={iconDisplayName} icon={icon} size="3x"/>
    </a>
  );
}
