import { Route } from 'react-router';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import './custom.css';

const App = () => {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
  return (
    <BrowserRouter basename={baseUrl}>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
