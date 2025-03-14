import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import './NavBar.scss';

function NavBar() {
  return (
    <Navbar expand="md" className="NavBar">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">Contratos Control</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="nav-dropdown-cadastros">
              <NavDropdown.Item as={Link} to="/grupoclientes">Grupos de clientes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clientes">Clientes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/softwares">Softwares</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contratos">Contratos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lancamentolicencas">Lançamentos de licenças</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Consultas" id="nav-dropdown-consultas">
              <NavDropdown.Item as={Link} to="/consultacontratos">Consulta Avançada de contratos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ferramentas" id="nav-dropdown-ferramentas">
              <NavDropdown.Item as={Link} to="/gerenciamentolicencas">Gerenciamento de Licenças</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/criaraviso">Criar Aviso</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Logado com: Rian" id="nav-dropdown-usuario">
              <NavDropdown.Item as={Link} to="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/configuracoes">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
