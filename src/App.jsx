import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnboardingDashboard from "./components/OnboardingDashboard.jsx";
import DigitalScanScreen from "./components/DigitalScanScreen.jsx";
import ExtractionResultsScreen from "./components/ExtractionResultsScreen.jsx";
import CustomerCardScreen from "./components/CustomerCardScreen.jsx";
import OnboardingPersonalized from "./components/OnboardingPersonalized.jsx";
import CrmRecord from "./components/CrmRecord.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingDashboard />} />
        <Route path="/digital-scan" element={<DigitalScanScreen />} />
        <Route
          path="/extraction-results"
          element={<ExtractionResultsScreen />}
        />
        <Route path="/customer-card" element={<CustomerCardScreen />} />
        <Route
          path="/onboarding-script"
          element={<OnboardingPersonalized />}
        />
        <Route path="/crm-record" element={<CrmRecord />} />
      </Routes>
    </BrowserRouter>
  );
}