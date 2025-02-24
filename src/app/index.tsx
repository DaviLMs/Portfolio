
import { PrimeReactProvider } from 'primereact/api';
import Home from './page';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function App() {
    return (
      <PrimeReactProvider>
        <Home />
      </PrimeReactProvider>
    );
  }        