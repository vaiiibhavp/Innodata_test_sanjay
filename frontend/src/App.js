import { BrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
