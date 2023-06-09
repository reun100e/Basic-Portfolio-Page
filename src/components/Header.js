import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: aghoshbprasad100@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/reun100e",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aghoshbprasad/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@aghoshbprasad100",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21867163/dr-aghosh-b-prasad",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

function Pagescroll (projectsSection, yOffset) {
  const targetY =
  projectsSection.getBoundingClientRect().top +
  window.pageYOffset +
  yOffset;

const scrollDuration = 2.5; // Set the desired scroll duration (in milliseconds)
const startingY = window.pageYOffset;
let currentTime = 0;

const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const animateScroll = () => {
  currentTime += 1 / 60;

  const scrollProgress = Math.min(currentTime / scrollDuration, 1);
  const easedProgress = easeInOutQuad(scrollProgress);
  const newY = startingY + (targetY - startingY) * easedProgress;

  window.scrollTo(0, newY);

  if (scrollProgress < 1) {
    requestAnimationFrame(animateScroll);
  }
};

animateScroll();
}

  const handleHomeClick = (event) => {
    event.preventDefault();
    const section = document.getElementById("avatar");
    const yOffset = -510; // Adjust the offset based on your layout
    Pagescroll(section, yOffset)

  };


  const handleContactClick = (event) => {
    event.preventDefault();
    const section = document.getElementById("contactme-section");
    const yOffset = -30; // Adjust the offset based on your layout
    Pagescroll(section, yOffset)

  };

  const handleProjectsClick = (event) => {
    event.preventDefault();
    const section = document.getElementById("projects-section");
    const yOffset = -80; // Adjust the offset based on your layout
    Pagescroll(section, yOffset);

  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
      transition="transform 0.3s"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((social) => (
                <a href={social.url} key={social.icon.iconName} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#avatar" onClick={handleHomeClick}>
                Home
              </a>
              <a href="#projects-section" onClick={handleProjectsClick}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleContactClick}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
