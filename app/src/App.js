import Layout from "./components/layout";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import About from "./partials/about";
import LeftNav from "./partials/left-nav";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
        <div>hello</div>
      </Layout>
      <LeftNav />
      <Footer />
    </>
  );
}

export default App;
