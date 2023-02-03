import HomePage from 'pages/HomePage/HomePage';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

export const App = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <HomePage />
      </Container>
    </>
  );
};
