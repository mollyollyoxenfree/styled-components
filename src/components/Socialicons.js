import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialicons } from './styles/Socialicons.styled';

export default function Socialicons() {
    return (
        <StyledSocialicons>
            <li>
                <a href='https://twitter.com'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com'>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialicons>
    )
}