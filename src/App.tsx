import { BrowserRouter, Route } from 'react-router-dom';
import { HomePage } from './page/Home';
import { LegacyPage } from './page/Legacy';

export function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/legacy" component={LegacyPage} />
      <LegacyPage />
    </BrowserRouter>
  );
}