import { LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalAnalysis = () => {
  const techniques = [
    "Moving Averages",
    "Relative Strength Index (RSI)",
    "MACD Indicator",
    "Bollinger Bands",
    "Support & Resistance Levels",
    "Volume Analysis"
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5" />
          Technical Analysis
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

export default TechnicalAnalysis;