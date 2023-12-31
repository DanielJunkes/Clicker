import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import { ProviderValores } from "./RouterProvider";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <ProviderValores>
          <Router />
        </ProviderValores>
        </BrowserRouter>
      </div>
  );
}

export default App;
