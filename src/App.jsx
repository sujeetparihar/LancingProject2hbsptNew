import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Topnavbar from "./components/Topnavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Customer from "./components/CustomerSupport/Customer";
import ContactRoutes from "./components/ContactSales/ContactRoutes";

// Content
import Contentone from "./components/Contentsection/Contentone";
import Contenttwo from "./components/Contentsection/Contenttwo";
import Contentthree from "./components/Contentsection/Contentthree";
import Contentfour from "./components/Contentsection/Contentfour";
import Contentvideoone from "./components/Contentsection/ContentVideoone";
import Contentfive from "./components/Contentsection/Contentfive";
import ContentEight from "./components/Contentsection/ContentEight";
import Contentnine from "./components/Contentsection/ContentNine";
import Contenttenth from "./components/Contentsection/Contenttenth";
import ContentEleven from "./components/Contentsection/Contenteleven";
import DemoRoutes from "./components/Demo/DemoRoutes";
import StarterRoutes from "./Starter/StarterRoutes";

const AppLayoutWithHeader = ({ children }) => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const AppLayoutWithoutHeader = ({ children }) => {
  return <>{children}</>;
};

const AppRoutes = () => {
  const location = useLocation();

  // Routes where we don't want to show header/footer
  const noHeaderFooterRoutes = ["/customer", "/contact", "/starter"];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.some((path) =>
    location.pathname.toLowerCase().startsWith(path)
  );

  const Layout = shouldHideHeaderFooter
    ? AppLayoutWithoutHeader
    : AppLayoutWithHeader;

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Contentone />
              <Contentthree />
              <Contentfour />
              <Contenttwo />
              <Contentvideoone />
              <Contentfive />
              <ContentEight />
              <Contentnine />
              <Contenttenth />
              <ContentEleven />
              <Home />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/contact" element={<ContactRoutes />} />
        <Route path="/demo" element={<DemoRoutes />} />
        <Route path="/starter" element={<StarterRoutes />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
