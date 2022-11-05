import './Dashboard.scss';
import { useState } from "react";
import { Button, Col, Container, ListGroup, Offcanvas, Row } from "react-bootstrap";
import { Sliders2 } from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dashboard = [
        {
            name: 'dashboard',
            iconName: 'key-square',
            id: 1
        },
        {
            name: 'product',
            iconName: '3d-square 1',
            id: 2
        },
        {
            name: 'customers',
            iconName: 'user-square 1',
            id: 3
        },
        {
            name: 'income',
            iconName: 'wallet-money 2',
            id: 4
        },
        {
            name: 'promote',
            iconName: 'discount-shape 1',
            id: 5
        },
        {
            name: 'help',
            iconName: 'message-question 1',
            id: 6
        }
    ];

    const activeItem = {
        borderRadius: 'borderRadius: 8px',
        background: 'background: #5932EA'
    };

    const [active, setActive] = useState();
    
    return <Container className={'mx-0 px-0'}>
        <Row>
            <Col xxl={12} className={'d-flex justify-content-between align-items-center'}>
                <Link className={'h6 mb-0 fw-bold d-xxl-none'} to='/'>Menu</Link>
                <Button variant={'primary'} className={'d-xxl-none'} onClick={handleShow}>
                    <Sliders2 />
                </Button>
            </Col>
        </Row>
        <Row>
            <Col xxl={3}>
                <Offcanvas show={show} 
                        onHide={handleClose}
                        className={'offcanvas-block bg-white'} 
                        responsive={'xxl'} 
                        placement={'start'} 
                        tabIndex={'-1'}>
                    <Offcanvas.Header className={'bg-light'} closeButton>
                        <Offcanvas.Title className={'h5'}>Dashboard</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={'dashboard-menu'}>
                        <div className={'menu-title'}>
                            <img src={'./dashboard-icon/setting 1.png'} className={'menu-title-icon'} alt={'setting'} />
                            <span>Dashboard</span>
                            <span>v.01</span>
                        </div>
                        <ListGroup>
                            {
                                dashboard.map((item, i) => <Link to={item.name} className={`list-group-item`} key={i}>
                                    <div className={`${item.id === i ? 'active' : ''} menu-item`} data-index={i}>
                                        <img src={`./dashboard-icon/${item.iconName}.png`}
                                            style={{stroke: '#d3f5d6'}} 
                                            className={'icon-dashboard-menu'} 
                                            alt={item.iconName} />
                                        <span>{item.name}</span>
                                        <svg className={'arrow-icon'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </Link>)
                            }
                        </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
            <Col xxl={9}>
                <div className={'greetings-user'}>
                    <h2>Hello Evano 
                        <span></span>, 
                    </h2>
                </div>
                <Outlet />
            </Col>
        </Row>
    </Container>
}

export default Dashboard;