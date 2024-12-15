import { Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FundamentalAnalysis = () => {
  const techniques = [
    "Price-to-Earnings (P/E) Ratio",
    "Price-to-Book (P/B) Ratio",
    "Debt-to-Equity Ratio",
    "Return on Equity (ROE)",
    "Earnings Per Share (EPS)",
    "Dividend Yield"
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Fundamental Analysis
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

export default FundamentalAnalysis;