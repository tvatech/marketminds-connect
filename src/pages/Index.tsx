import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, LineChart, PieChart } from "lucide-react";

const Index = () => {
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
            <Button variant="outline" onClick={() => console.log("Logout clicked")}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to StockPred</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your advanced AI-powered platform for stock market prediction and analysis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Predictions
              </CardTitle>
              <CardDescription>AI-powered market trend predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get accurate predictions for market trends using our advanced machine learning algorithms
                that analyze historical data and market patterns.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                Technical Analysis
              </CardTitle>
              <CardDescription>Comprehensive technical indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Access detailed technical analysis including moving averages, RSI, MACD, and other key
                indicators for informed decision-making.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Portfolio Analytics
              </CardTitle>
              <CardDescription>Smart portfolio management</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Track and analyze your portfolio performance with real-time updates and personalized
                recommendations for optimization.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;