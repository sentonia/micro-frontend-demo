import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));
const Sidebar = React.lazy(() => import('sidebar/Sidebar'));
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <Suspense fallback={<div>Loading Sidebar...</div>}>
      <Sidebar />
    </Suspense>
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <Dashboard />
    </Suspense>
  </div>
);

export default App;
