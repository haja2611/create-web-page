import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import "./Navbar1.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
//import Image from "./Assests/slide7-550x550.jpg";

const Navbar1 = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    marginLeft: "300px",
  });

  const MenuItems = [
    { Name: "Home ", Link: "/" },
    { Name: "About Us", Link: "#" },
    { Name: "Services", Link: "#" },
    { Name: "careers", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];

  const [open, SetOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ background: "white", height: "80px", position: "sticky" }}>
        <StyledToolbar
          sx={{
            height: "80px",
          }}
        >
          <Typography>
            <img
              className="cosecant_logo"
              src="https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png"
            ></img>
          </Typography>

          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <div className="clr1">
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>

                  <li className="dropdown">
                    <a href="/serv">Services</a>

                    <ul className="submenu">
                      <li>
                        <a href="/cins">Consulting</a>

                        <ul class="dropdown-submenu1">
                          <li>
                            <a class="dropdown-item" href="/Informatica">
                              Informatica
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/Salesforce">
                              Salesforce
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/PostgreSQL">
                              PostgreSQL/
                              <br />
                              SQL/Oracle
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/RedHat">
                              RedHat Linux
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/Web">
                              Web Development
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Training</a>
                        <ul class="dropdown-menu dropdown-submenu2"></ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Carrers</a>
                  </li>
                  <li>
                    <a href="/cnt">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </MenuBox>

          <MenuIcon
            sx={{
              color: "black",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ width: 350, height: "90vh" }}>
            {MenuItems.map((item) => (
              <MenuItem
                sx={{
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                {item.Name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar1;
