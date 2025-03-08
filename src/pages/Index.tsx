
import { useEffect } from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  // Add smooth transition effect on page load
  useEffect(() => {
    document.body.classList.add("animate-fade-in");
    
    // Clean up
    return () => {
      document.body.classList.remove("animate-fade-in");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-nutrihealth-50/30">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
