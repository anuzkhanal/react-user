import { BrowserRouter } from 'react-router-dom';
import Body from './Component/Body';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='content'>
          <Body />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
