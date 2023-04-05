import Socialicons from './Socialicons';
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo.svg' alt='' />

                <Flex>
                   <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Elementum sagittis vitae et leo duis.
                    </li>
                    <li>+1-534-123-4567</li>
                    <li>example@huddle.com</li>
                   </ul>
                   <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                   </ul>
                   <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                   </ul>

                <Socialicons />
                </Flex>

                <p>&copy; 2023 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}