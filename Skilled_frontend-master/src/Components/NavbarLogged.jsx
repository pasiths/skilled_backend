import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink from react-router-dom

function NavScrollExample() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleLogout = async () => {
    try {
      // Call the backend logout API
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include any necessary authentication token if required
          // 'Authorization': `Bearer ${yourToken}`
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed"); // Handle errors accordingly
      }

      // Clear user session or token
      // localStorage.removeItem('userToken'); // Assuming you're using localStorage

      // Redirect to login page
      navigate("/login"); // Adjust the path as necessary
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally handle logout error (e.g., show a notification)
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">SKILLED</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            {/* Use 'NavLink' instead of 'Nav.Link' */}
            <Nav.Link as={NavLink} to="/jobs">
              Jobs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* Profile icon as an example */}
            <Nav.Link as={NavLink} to="/profile">
              Profile
              <i
                className="bi bi-person-circle ms-2"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </Nav.Link>
            <Nav.Link as="button" onClick={handleLogout}>
              Logout
              <i
                className="bi bi-box-arrow-right ms-2"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
