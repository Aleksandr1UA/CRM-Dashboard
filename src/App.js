
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomersItem from './components/dashboard/CustomersItem';
import DashboardItem from './components/dashboard/DashboardItem';

function App() {
  return <div>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='dashboard' element={<DashboardItem />} />
        <Route path='customers' element={<CustomersItem />} />
      </Route>
    </Routes>
  </div>
}

export default App;
