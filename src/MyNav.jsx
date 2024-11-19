import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vite from "../public/vite.svg";
function MyNav() {
  return (
    <Container fluid>
      <Navbar expand="sm" bg="success" data-bs-theme="dark">
        <Container>
            <Navbar.Brand><img src={vite} width='30' height='30'></img><span style={{ marginLeft: "20px" }}>RD Book Store</span></Navbar.Brand>
          <Navbar.Toggle area-control="mynav"></Navbar.Toggle>
          <Navbar.Collapse id="mynav">
        
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Books</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>

              <NavDropdown id="mynav" title="category">
              <NavDropdown.Item id="">Horror</NavDropdown.Item>
              <NavDropdown.Item id="">Comedy</NavDropdown.Item>
              <NavDropdown.Item id="">Suspense</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Item id="">Academic</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          
            <Navbar.Text>Login/SignUp</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default MyNav;
