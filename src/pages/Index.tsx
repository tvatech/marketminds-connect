import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import SearchBar from "@/components/SearchBar";
import FundamentalAnalysis from "@/components/FundamentalAnalysis";
import TechnicalAnalysis from "@/components/TechnicalAnalysis";
import PortfolioManagement from "@/components/PortfolioManagement";

const Index = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out successfully",
        duration: 2000,
      });
      
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      toast({
        title: "Error logging out",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">StockPred</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FundamentalAnalysis />
          <TechnicalAnalysis />
          <PortfolioManagement />
        </div>
      </main>
    </div>
  );
};

export default Index;