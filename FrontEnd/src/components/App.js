import CenterDiv from "./CenterDiv";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeatExchanger from "./HeatExchanger";
import HeatExchangerAnswer from "./HeatExchangerAnswer";
import AdiabaticTubular from "./AdiabaticTubular";
import AdiabaticTubularAnswer from "./AdiabaticTubularAnswer";
import EquilibriumConversion from "./EquilibriumConversion";
import EquilibriumConversionAnswer from "./EquilibriumConversionAnswer";
import CstrSizing from "./CstrSizing";
import CstrSizingAnswer from "./CstrSizingAnswer";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="HeatExchanger/HeatExchangerAnswer" element={<HeatExchangerAnswer/>} />
      <Route path="/HeatExchanger" element={<HeatExchanger/>} />
      <Route path="/AdiabaticTubular" element={<AdiabaticTubular/>} />
      <Route path="/AdiabaticTubular/AdiabaticTubularAnswer" element={<AdiabaticTubularAnswer/>} />
      <Route path="/EquilibriumConversion" element={<EquilibriumConversion/>} />
      <Route path="/CstrSizing" element={<CstrSizing/>} />
      <Route path="EquilibriumConversion/EquilibriumConversionAnswer" element={<EquilibriumConversionAnswer/>} />
      <Route path="CstrSizing/CstrSizingAnswer" element={<CstrSizingAnswer/>} />
      <Route path="/" element={<CenterDiv/>} />
      
      </Routes>
  </Router>
  );
}
export default App;
