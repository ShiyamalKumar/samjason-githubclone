import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Image, Form, FormControl, Button } from "react-bootstrap";
import { FaBell, FaLightbulb, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/NavBar.css";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("https://api.github.com/users/nodejs");
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

    };

    return (
        <Navbar bg={darkMode ? "dark" : "light"} expand="lg">
            <Navbar.Brand as={Link} to="/">
                {loading ? (
                    "Loading..."
                ) : (
                    <>
                        <Image src={userData.avatar_url} className="profile-pic" roundedCircle />
                        {userData.login || "Your Name"}
                    </>
                )}
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link as={Link} to="/repos">
                        Repositories
                    </Nav.Link> */}

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}>Search</Button>
                </Form>
                <NavDropdown title={<FaBell />} id="basic-nav-dropdown">

                    {/* <NavDropdown.Item>Notification 1</NavDropdown.Item>
                    <NavDropdown.Item>Notification 2</NavDropdown.Item>
                    <NavDropdown.Item>Notification 3</NavDropdown.Item> */}
                </NavDropdown>
                <Button variant="link" onClick={toggleDarkMode} className="dark-mode-toggle">
                    {darkMode ? <FaLightbulb /> : <FaRegMoon />}
                </Button>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
