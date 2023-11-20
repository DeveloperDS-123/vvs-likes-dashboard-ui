import Login from "../pages/login"
import CustomerConfirmation from "../pages/customer_confirmation";
import Subscription from "../pages/subscription";
import { createBrowserRouter } from "react-router-dom";
import AccountSettings from "../pages/account_settings";
import Billing from "../pages/billing";
import Checkout from "../pages/checkout";

const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: "/customerconfirmation", element: <CustomerConfirmation /> },
    { path: "/subscription", element: <Subscription /> },
    { path: "/accountsettings", element: <AccountSettings /> },
    { path: "/billing", element: <Billing /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "*", element: <h1>404, Page not found</h1> }
])

export default router;