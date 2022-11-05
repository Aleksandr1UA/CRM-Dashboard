import './Dashboard.scss';
import { useState } from "react";
import { Button, Col, Container, ListGroup, Offcanvas, Row } from "react-bootstrap";
import { List, Sliders, Sliders2 } from "react-bootstrap-icons";
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

    const [menuItem, setMenuItem] = useState(0);
    
    return <Container className={'mx-0 px-0'}>
        <Row>
            <Col xxl={12} className={'d-flex justify-content-end align-items-center'}>
                <Button variant={'primary'} className={'d-xxl-none btn-show-menu'} onClick={handleShow}>
                    <div className={`${show ? 'change' : ''} btn-bar1`}></div>
                    <div className={`${show ? 'change' : ''} btn-bar2`}></div>
                    <div className={`${show ? 'change' : ''} btn-bar3`}></div>
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
                    <Offcanvas.Header className={'bg-light justify-content-end'} closeButton></Offcanvas.Header>
                    <Offcanvas.Body className={'dashboard-menu'}>
                        <div className={'menu-title'}>
                            <img src={'./dashboard-icon/setting 1.png'} className={'menu-title-icon'} alt={'setting'} />
                            <span>Dashboard</span>
                            <span>v.01</span>
                        </div>
                        <ListGroup>
                            {
                                dashboard.map((item, i) => <Link to={item.name} 
                                        onClick={() => setMenuItem(i + 1)}
                                        className={`${menuItem === item.id ? 'active-menu-item' : ''} list-group-item`} 
                                        key={i}>
                                    <div className={`menu-item`}>
                                        <img src={`./dashboard-icon/${item.iconName}.png`} 
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
                        <div className={'menu-footer'}>
                            <div className={'user-logo'}></div>
                            <div className={'user-title'}>
                                <p>Evano</p>
                                <p>project manager</p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
            <Col xxl={9} className={'dashboard-right-block'}>
                <div className={'greetings-user'}>
                    <h2>Hello Evano &#128075;,
                    </h2>
                </div>
                <Outlet />
            </Col>
        </Row>
    </Container>
}

export default Dashboard;