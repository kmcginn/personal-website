import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({iconId, iconName, link}) {
    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon title={iconName} icon={['fab', iconId]} size="3x"/>
        </a>
    )
}