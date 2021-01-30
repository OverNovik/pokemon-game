import Footer from './components/Footer';
import Layout from './components/Layout';
import Header from './components/Header';
import Layout2 from './assets/bg2.jpg';
import Layout3 from './assets/bg3.jpg';

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
      urlBg={Layout2}
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
      urlBg={Layout3}
    />
    <Footer />
  </>
  );
}

export default App;
