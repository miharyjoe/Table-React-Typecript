import React,{ FunctionComponent }from 'react';
import TableCard from './component/TableCard';
import Table from './component/Table';
import NavBar from './component/NavBar'
import Footer from './component/Footer';
import SideBar from './component/SideBar';


const App: FunctionComponent = () => {
  return (
    <div>
        <NavBar/>
        <div id="layoutSidenav">
             <SideBar/>
             <div id="layoutSidenav_content">
                  <main>
                  <TableCard>
                    <Table/>
                  </TableCard>
                  </main>
                  <Footer/>
              </div>
        </div>
    </div>
   


  )
}
export default App;
