import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './ui/Heading';

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-500);
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading>Hello world</Heading>
        <Button>Check in</Button>
      </div>
    </>
  );
}

export default App;
