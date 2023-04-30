import logo from './logo.svg';
import './App.css';
import MainScreen from './components/screens/MainScreen';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Container>
      <MainScreen/>
    </Container>
    </BrowserRouter>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
