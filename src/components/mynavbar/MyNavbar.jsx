import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏠Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              📒Contacto
            </Link>
          </Nav>
          <Link to="/" className="text-white ms-4 text-decoration-none">
            Happy Cake 🍰
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
