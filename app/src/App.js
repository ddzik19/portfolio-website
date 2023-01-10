import Layout from "./components/layout";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import About from "./partials/about";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
        <div>hello</div>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
