import React from "react";
import {
  NavHeader,
  HeroSection,
  ServicesSection,
  FeaturesSection,
  ClientsSection,
  PriceSection,
  DownloadSection,
  SiteFooter,
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
        <PriceSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </React.Fragment>
  );
};

export default App;
