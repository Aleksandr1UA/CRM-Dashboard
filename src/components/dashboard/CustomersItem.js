import './CustomersItem.scss';
import { Col, Row, Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CustomersItem() {
    const theadItems = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'];
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        setCustomers([
            {
                name: 'Jane Cooper',
                company: 'Microsoft',
                phone: '(225) 555-0118',
                email: 'jane@microsoft.com',
                country: 'United States',
                status: 'Active'
            },
            {
                name: 'Floyd Miles',
                company: 'Yahoo',
                phone: '(205) 555-0100',
                email: 'floyd@yahoo.com',
                country: 'Kiribati',
                status: 'Inactive'
            },
            {
                name: 'Ronald Richards',
                company: 'Adobe',
                phone: '(302) 555-0107',
                email: 'ronald@adobe.com',
                country: 'Israel',
                status: 'Inactive'
            },
            {
                name: 'Marvin McKinney',
                company: 'Tesla',
                phone: '(252) 555-0126',
                email: 'marvin@tesla.com',
                country: 'Iran',
                status: 'Active'
            },
            {
                name: 'Jerome Bell',
                company: 'Google',
                phone: '(629) 555-0129',
                email: 'jerome@google.com',
                country: 'Réunion',
                status: 'Active'
            },
            {
                name: 'Kathryn Murphy',
                company: 'Microsoft',
                phone: '(406) 555-0120',
                email: 'kathryn@microsoft.com',
                country: 'Curaçao',
                status: 'Active'
            },
            {
                name: 'Jacob Jones',
                company: 'Yahoo',
                phone: '(208) 555-0112',
                email: 'jacob@yahoo.com',
                country: 'Brazil',
                status: 'Active'
            },
            {
                name: 'Kristin Watson',
                company: 'Facebook',
                phone: '(704) 555-0127',
                email: 'kristin@facebook.com',
                country: 'Åland Islands',
                status: 'Inactive'
            }
        ])
    }, []);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);

    const search = e => {
        let value = e.target.value.toLowerCase().trim();
        setSearchValue(value);
        setFilteredCustomers(customers.filter(customer => 
            customer.name.toLowerCase().includes(value) || 
            customer.company.toLowerCase().includes(value) ||
            customer.country.toLowerCase().includes(value)))
    }

    const [page, setPage] = useState(1);
    const totalPages = [0, 1, 2, 3];
    const lastPage = 40;

    return <Row className={'customers-item-block'}>
        <Col className={'d-flex justify-content-between'}>
            <div>
                <h3 className={'header-title'}>all customers</h3>
                <p>active members</p>
            </div>
            <div className={'search-block'}>
                <input className={'search-item'} text={'text'} onKeyUp={search} type={'search'} placeholder={'Search'} />
                {searchValue && !filteredCustomers.length ? <div className={'text-center'}>Not Found</div> : ''}
            </div>
        </Col>
        <Col className={'table-block'}>
            <Table responsive={'xl'}>
                <thead>
                    <tr>
                    {
                        theadItems.map((item, i) => <th scope={'col'} className={'thead-item'} key={i}>{item}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        (searchValue ? filteredCustomers : customers).map((item, i) => <tr className={'row-customer mx-0'} key={i}>
                            <td className={'customer-item'}>{item.name}</td>
                            <td className={'customer-item'}>{item.company}</td>
                            <td className={'customer-item'}>{item.phone}</td>
                            <td className={'customer-item'}>{item.email}</td>
                            <td className={'customer-item'}>{item.country}</td>
                            <td className={'customer-item'}>
                                <button className={`${item.status === 'Active' ? 'btn-customer-green' : 'btn-customer-red'}`}>
                                    {item.status}
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Col>
        <Col className={'pagination-block'}>
            <div className={'left-pagination-block'}>
                <p>Showing data {page} to 8 of 256K entries</p>
            </div>
            <div className={'right-pagination-block'}>
                <div className={'pagination'}>
                    <Link to='#' className={'page-item'}>{'<'}</Link>
                    {
                        totalPages.map((num, i) => <Link 
                                className={`${page === num + 1 ? 'active-page' : ''} page-item`} 
                                onClick={() => setPage(num + 1)} 
                                href='#' 
                                key={i}>
                            {num + 1}
                        </Link>)
                    }
                    <Link className={'page-ellipsis page-item'}>...</Link>
                    <Link className={`${page === lastPage ? 'active-page' : ''} page-item`} 
                            onClick={() => setPage(lastPage)} 
                            to='#'>
                        {lastPage}
                    </Link>
                    <Link to='#' className={'page-item'}>{'>'}</Link>
                </div>
            </div>
        </Col>
    </Row>
}

export default CustomersItem;