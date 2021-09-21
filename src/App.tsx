import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { Legado } from './page/Legado';

export function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/legado" component={Legado} />
    </BrowserRouter>
  );
}