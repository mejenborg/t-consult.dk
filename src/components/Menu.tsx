import {
  Container,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../interfaces/menuItem";

interface MenuProps {
  items: MenuItem[];
}

export default function Menu({ items }: MenuProps) {
  const location = useLocation();
  const [activeSectionId, setActiveSectionId] = useState(
    items.find((item) => item.path === location.pathname)?.sections?.[0].id ??
      ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections =
        items.find((item) => item.path === location.pathname)?.sections ?? [];

      if (sections.length > 0) {
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSectionId(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSectionId(sectionId);
    }
  };

  return (
    <Sheet
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100px",
        zIndex: 9999,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255,255,255, 0.3)",
        transition: "all 0.2s ease-in-out",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          height: "100%",
        }}
      >
        {/* Title */}
        <Typography
          component={Link}
          to="/"
          level="h4"
          sx={{
            textDecoration: "none",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateY(-1px)",
            },
          }}
        >
          T-Consult.dk
        </Typography>

        {/* Menu*/}
        <List
          orientation="horizontal"
          sx={{
            ml: "auto",
            gap: 1,
            position: "relative",
            transition: "all 0.2s ease-in-out",
            paddingBottom:
              (items.find((item) => item.path === location.pathname)?.sections
                ?.length ?? 0) > 0
                ? 3
                : 0,
          }}
        >
          {items.map(
            (item) =>
              item.path && (
                <ListItem key={item.path}>
                  <ListItemButton
                    id={`${location.pathname} === ${item.path}`}
                    component={Link}
                    to={item.path}
                    selected={location.pathname === item.path}
                    variant={location.pathname === item.path ? "soft" : "plain"}
                    sx={{
                      fontWeight: 600,
                      transition: "all 0.2s ease-in-out",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        width: location.pathname === item.path ? "100%" : "0%",
                        height: "2px",
                        bgcolor: "primary.500",
                        transition: "all 0.2s ease-in-out",
                        transform: "translateX(-50%)",
                      },
                      "&:hover": {
                        "&::after": {
                          width: "100%",
                        },
                      },
                    }}
                  >
                    {item.label}
                    <List
                      orientation="horizontal"
                      sx={{
                        pl: 0,
                        position: "absolute",
                        bottom: "-100%",
                        left: 0,
                        display:
                          location.pathname === item.path ? "flex" : "none",
                      }}
                    >
                      {item.sections?.map((section) => (
                        <ListItem key={section.id}>
                          <ListItemButton
                            onClick={() => scrollToSection(section.id)}
                            selected={activeSectionId === section.id}
                            variant={
                              activeSectionId === section.id ? "soft" : "plain"
                            }
                            sx={{
                              fontWeight: 500,
                              fontSize: 15,
                              pl: 1,
                              pr: 1,
                              transition: "all 0.2s ease-in-out",
                              position: "relative",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: "0",
                                left: "50%",
                                width:
                                  activeSectionId === section.id
                                    ? "100%"
                                    : "0%",
                                height: "2px",
                                bgcolor: "primary.500",
                                transition: "all 0.2s ease-in-out",
                                transform: "translateX(-50%)",
                              },
                              "&:hover": {
                                "&::after": {
                                  width: "100%",
                                },
                              },
                            }}
                          >
                            {section.label}
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </ListItemButton>
                </ListItem>
              )
          )}
        </List>

        {/* Quick contact info */}
        <Typography
          component="a"
          href="tel:+4512345678"
          sx={{
            ml: 2,
            color: "text.secondary",
          }}
        >
          +45 1234 5678
        </Typography>
      </Container>
    </Sheet>
  );
}
