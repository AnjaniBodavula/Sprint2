import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Customer from './AdminComponent/Customer';
import AdminLandingPage from './AdminComponent/AdminLandingPage'
import Medicine from './AdminComponent/Medicine';
import CreateMedicineComponent from './components/CreateMedicineComponent';
import Order from './AdminComponent/Order';
import GetMedicineByIdComponent from './components/GetMedicineByIdComponent';
import UpdateComponent from './components/UpdateComponent';
import LoginComponent from './components/LoginComponent';
import LandingComponent from './components/LandingComponent';
import GetCustomerByIdComponent from './components/GetCustomerByIdComponent';
import AboutPage from './components/AboutPage';
import GetOrderByIdComponent from './components/GetOrderByIdComponent';
import CustomerLandingComponent from './CustomerComponent/CustomerLandingComponent';
import CustomerMedicine from './CustomerComponent/CustomerMedicine';
import RegisterComponent from './components/RegisterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ContactDetails from './components/ContactDetails'
import Blog from './components/Blog';
import  updateCustomer  from './CustomerComponent/UpdateCustomer';
import GetOrdByCust from './components/GetOrdByCust';
import UpdateOrder from './components/UpdateOrder';
import GetMedicine from './CustomerComponent/GetMedicineByIdComponent';



const Routes = () => (
    <BrowserRouter>
    <Switch>
    
        <Route path='/' component={LandingComponent} exact/>
        <Route path='/login' exact={true} component={LoginComponent}/>
        <Route path='/logout' exact={true} component={LandingComponent}/>
        <Route path='/about' exact={true} component={AboutPage}/>
        <Route path='/contactus' exact={true} component={ContactDetails}/>
        <Route path='/blog' exact={true} component={Blog}/>
        <Route path='/register' exact={true} component={RegisterComponent}/>


        <Route path='/admin' exact={true} component={AdminLandingPage}/>
        <Route path='/admin/customer' exact={true} component={Customer}/>
        <Route path='/admin/customer/:id' exact={true} component={GetCustomerByIdComponent}/>
        <Route path='/admin/medicine' exact={true} component={Medicine}/>
        <Route path='/admin/medicine/view/:id' exact={true} component={GetMedicineByIdComponent}/>
        <Route path='/admin/medicine/new' exact={true} component={CreateMedicineComponent}/>
        <Route path='/admin/medicine/update/:id' exact={true} component={UpdateComponent}/>
        <Route path='/admin/orders' exact={true} component={Order}/>
        <Route path='/admin/order/view/:id' exact={true} component={GetOrderByIdComponent}/>
        <Route path='/admin/updateorder/:id' exact={true} component={UpdateOrder}/>
        
        
        
        <Route path='/customer/:id' exact={true} component={CustomerLandingComponent}/>
        <Route path='/medicineview/:id' exact={true} component={GetMedicineByIdComponent}/>
        <Route path='/medicine/shop' exact={true} component={CustomerMedicine}/>
        <Route path='/register/addcustomer' exact={true} component={CreateCustomerComponent}/>       
        <Route path='/customer/update/:id' exact={true} component={updateCustomer}/>
        <Route path='/customer/order/:id' exact={true} component={GetOrdByCust}/>
        <Route path='/customer/medicine/view/:id' exact={true} component={GetMedicine}/>
        
        
   
    </Switch>
    </BrowserRouter>
    );
export default Routes;
