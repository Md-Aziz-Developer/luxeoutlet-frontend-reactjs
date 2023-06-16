/* eslint-disable import/no-anonymous-default-export */
import Authentication from "pages/Authentication"
import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import Contact from "pages/Contact"
import Faq from "pages/Faq"
import Home from "pages/Home"
import Login from "pages/Login"
import OrderComplete from "pages/OrderComplete"
import Page404 from "pages/Page404"
import Privacy from "pages/Privacy"
import ProductDetail from "pages/ProductDetail"
import Products from "pages/Products"
import Shipping from "pages/Shipping"
import Signup from "pages/Signup"
import Terms from "pages/Terms"
import Whower from "pages/Whower"
import Wishlist from "pages/Wishlist"

const publicRoutes = [
    { path: "*", component: Page404 },
    { path: '/', component: Home },
]

const protectedRoutes = [
    { path: "/signup", component: Signup },
    { path: "/Whower", component: Whower },
    { path: "/Privacy", component: Privacy },
    { path: "/Terms", component: Terms },
    { path: "/Authentication", component: Authentication },
    { path: "/Faq", component: Faq },
    { path: "/Shipping", component: Shipping },
    { path: "/Contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/products", component: Products },
    { path: "/products/:id", component: ProductDetail },
    { path: "/cart", component: Cart },
    { path: "/checkout", component: Checkout },
    { path: "/order-complete", component: OrderComplete },
    { path: "/wishlist", component: Wishlist },
]



export default { publicRoutes, protectedRoutes }