import { Avatar } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Container, SocialMediaContainer } from "./styles";

const Footer: React.FC = () => {
  const socialMedia = [
    {
      link: "https://www.instagram.com/joaovitorminosso",
      icon: <InstagramIcon />,
    },
    {
      link: "https://www.facebook.com/joaovitor.minosso/",
      icon: <FacebookIcon />,
    },
    {
      link: "https://www.linkedin.com/in/jo%C3%A3o-vitor-minosso-835737197/",
      icon: <LinkedInIcon />,
    },
  ];
  return (
    <Container>
      <SocialMediaContainer>
        {socialMedia.map((item) => (
          <a href={item.link} target="_blank" rel="noreferrer">
            <Avatar key={item.link} variant="rounded">
              {item.icon}
            </Avatar>
          </a>
        ))}
      </SocialMediaContainer>
    </Container>
  );
};

export default Footer;
