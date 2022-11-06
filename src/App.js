
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomersItem from './components/dashboard/CustomersItem';
import DashboardItem from './components/dashboard/DashboardItem';
import ProductItem from './components/dashboard/ProductItem';
import IncomeItem from './components/dashboard/IncomeItem';
import PromoteItem from './components/dashboard/PromoteItem';
import HelpItem from './components/dashboard/HelpItem';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='dashboard' element={<DashboardItem />} />
        <Route path='product' element={<ProductItem />} />
        <Route path='customers' element={<CustomersItem />} />
        <Route path='income' element={<IncomeItem />} />
        <Route path='promote' element={<PromoteItem />} />
        <Route path='help' element={<HelpItem />} />
      </Route>
    </Routes>
  </>
}

export default App;
