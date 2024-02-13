import Home from "./page/home/Home"



import { ColorProvider } from './context/ColorContext';

const App = () => {
  return (
    <ColorProvider>
      <Home/>
    </ColorProvider>
  );
};

export default App; 

