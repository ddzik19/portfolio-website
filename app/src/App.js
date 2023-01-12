import Layout from "./components/layout";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import About from "./partials/about";
import Intro from "./partials/intro";
import LeftNav from "./partials/left-nav";
import CompanyList from "./partials/company-list";
import Projects from "./partials/projects";
import ContactForm from "./partials/contact-form";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Intro />
        {/* <About /> */}
        {/* <CompanyList /> */}
        <Projects />
        <ContactForm />
      </Layout>
      <LeftNav />
      <Footer />
    </>
  );
}

export default App;
