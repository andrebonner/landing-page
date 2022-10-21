import React from "react";
import {
  NavHeader,
  HeroSection,
  ServicesSection,
  FeaturesSection,
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <NavHeader />
      <main className="h-full md:h-screen w-full top-0">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
      </main>
    </React.Fragment>
  );
};

export default App;
