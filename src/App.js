import { Container } from '@mui/material';
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Meals />
      </main>
    </Container>
  );
}

export default App;
