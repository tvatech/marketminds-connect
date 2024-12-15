import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioManagement = () => {
  const techniques = [
    "Asset Allocation",
    "Risk Management",
    "Portfolio Rebalancing",
    "Diversification Strategy",
    "Performance Tracking",
    "Investment Goals"
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Portfolio Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {techniques.map((technique, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              {technique}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PortfolioManagement;