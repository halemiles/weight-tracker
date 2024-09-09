import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return(
        <Nav
      activeKey="/"
      
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/weights">Weights</Nav.Link>
      </Nav.Item>
    </Nav>
    )

}

export default Header;