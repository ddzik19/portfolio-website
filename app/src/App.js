import Layout from "./components/layout";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import About from "./partials/about";
import LeftNav from "./partials/left-nav";
import CompanyList from "./partials/company-list";
function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
        <CompanyList />
      </Layout>
      <LeftNav />
      <Footer />
    </>
  );
}

export default App;
