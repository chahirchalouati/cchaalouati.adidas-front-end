import React from 'react'
import { Route } from 'react-router-dom'
import AdminAddProduct from '../AdminAddProduct'
import AdminBills from '../AdminBills'
import AmdinCharts from '../AdminCharts'
import AdminCostumers from '../AdminCostumers'
import AmdinDashboard from '../AdminDashboard'
import AdminInvoice from '../AdminInvoice'
import AdminMails from '../AdminMails'
import AdminOrders from '../AdminOrders'
import AmdinProduts from '../AdminProduts'
import AdminReports from '../AdminReports'

function AdminContainer() {
    return (
        <main className='admin__main__container'>
            <Route path="/dashboard" component={AmdinDashboard}></Route>
            <Route exact path="/products" component={AmdinProduts}></Route>
            <Route exact path="/products/create" component={AdminAddProduct}></Route>
            <Route path="/bills" component={AdminBills}></Route>
            <Route path="/invoices" component={AdminInvoice}></Route>
            <Route path="/mails" component={AdminMails}></Route>
            <Route path="/orders" component={AdminOrders}></Route>
            <Route path="/charts" component={AmdinCharts}></Route>
            <Route path="/costumers" component={AdminCostumers}></Route>
            <Route path="/reports" component={AdminReports}></Route>
        </main>
    )
}

export default AdminContainer
