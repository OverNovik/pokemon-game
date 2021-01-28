import Footer from './components/Footer';
import Layout from './components/Layout';
import Header from './components/Header';

const  App = () => {
  return (
  <>
    <Header 
      title="This is title"
      descr="This is Description!"
    />
    <Layout 
      title="This is title Layout 1"
      descr="This is Description Layout 1"
      id="first"
      urlBg="./bg2.jpg"
    />
    <Layout
      title="This is title Layout 2"
      descr="This is Description Layout 2"
      id="second"
      colorBg="green"
     />
    <Layout 
      title="This is title Layout 3"
      descr="This is Description Layout 3"
      id="three"
      urlBg="/bg3.jpg"
    />
    <Footer />
  </>
  );
}

export default App;
