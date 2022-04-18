//import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Text from "./components/Text";

function App() {
  return (
      <>
        <Header/>
        <Slider/>
          <Container bgColor={"#f7f7f7"} >
              <Text element={'h1'} italic>
                  Привет мир!
              </Text>
              <Text element={'div'} strong>
                  Привет div!
              </Text>
              <Text element={'div'} disabled={true}>
                  Привет span!
              </Text>
          </Container>
        <Footer/>
      </>

  );
}

export default App;
