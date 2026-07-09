import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Documents from "./pages/Documents/Documents";
import AIAssistant from "./pages/AIAssistant/AIAssistant";

const Decision = () => <h1>Decision</h1>;
const Risks = () => <h1>Risks</h1>;
const Reports = () => <h1>Reports</h1>;
const Settings = () => <h1>Settings</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/ai-chat" element={<AIAssistant />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/risks" element={<Risks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;