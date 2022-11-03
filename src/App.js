import React from "react";
import {
  NavHeader,
  HeroSection,
  ServicesSection,
  FeaturesSection,
  ClientsSection,
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <NavHeader />
      <main className="h-full w-full">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ClientsSection />
      </main>
    </React.Fragment>
  );
};

export default App;
