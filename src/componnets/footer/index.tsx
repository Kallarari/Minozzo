import { Avatar } from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const socialMedia = [
    {
      link: "Google.com",
      icon: <AssignmentIcon />,
    },
    {
      link: "Google.com",
      icon: <AssignmentIcon />,
    },
    {
      link: "Google.com",
      icon: <AssignmentIcon />,
    },
  ];
  return (
    <Container>
      <>
      {socialMedia.map((item) => (
        <Avatar key={item.link} variant="rounded">
          {item.icon}
        </Avatar>
      ))}
      </>
    </Container>
  );
};

export default Footer;
