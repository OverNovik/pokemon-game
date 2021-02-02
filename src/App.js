import Footer from './components/Footer';
import Layout from './components/Layout';
import Header from './components/Header';
import Layout2 from './assets/bg2.jpg';
import Layout3 from './assets/bg3.jpg';
import PokemonCard from './components/pokemonCard';
import appStyle from './style.module.css';
import Pokemons from './data/pokemons.json';

const App = () => {
  return (
  <>
    <Header 
      title="This pokemon-game!!!"
      descr="This is Description!"
    >
    </Header>
    <Layout 
      title="This is title Layout 1"
      descr="This is Description Layout 1"
      id="first"
      urlBg={Layout2}
      children= 'In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.'
      >

      </Layout>
    <Layout
      title="This is title Layout 2"
      descr="This is Description Layout 2"
      id="second"
      colorBg="green"
      
    >
      <div className={appStyle.flex}>
        {
          Pokemons.map((item) => <PokemonCard id={item.id} name={item.name} img={item.img} type={item.type} values={item.values} />)
        }
      </div>

    </Layout>
    <Layout 
      title="This is title Layout 3"
      descr="This is Description Layout 3"
      id="three"
      urlBg={Layout3}
    >
    </Layout>

    <Footer>
    </Footer>
  </>
  );
}

export default App;
