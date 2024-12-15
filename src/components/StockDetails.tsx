import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface StockDetailsProps {
  ticker: string;
}

interface StockData {
  ticker: string;
  company_name: string;
  pe_ratio: number;
  pb_ratio: number;
  debt_equity_ratio: number;
  roe: number;
  eps: number;
  dividend_yield: number;
}

const StockDetails = ({ ticker }: StockDetailsProps) => {
  const { data: stock, isLoading } = useQuery({
    queryKey: ['stock', ticker],
    queryFn: async () => {
      console.log('Fetching stock data for:', ticker);
      const { data, error } = await supabase
        .from('stocks')
        .select('*')
        .eq('ticker', ticker.toUpperCase())
        .single();

      if (error) throw error;
      return data as StockData;
    },
    enabled: !!ticker,
  });

  if (isLoading) {
    return <div className="text-center">Loading stock details...</div>;
  }

  if (!stock) {
    return <div className="text-center">No data found for {ticker}</div>;
  }

  const metrics = [
    { label: "Company Name", value: stock.company_name },
    { label: "P/E Ratio", value: stock.pe_ratio.toFixed(2) },
    { label: "P/B Ratio", value: stock.pb_ratio.toFixed(2) },
    { label: "Debt/Equity Ratio", value: stock.debt_equity_ratio.toFixed(2) },
    { label: "Return on Equity (ROE)", value: `${(stock.roe * 100).toFixed(2)}%` },
    { label: "Earnings Per Share (EPS)", value: `$${stock.eps.toFixed(2)}` },
    { label: "Dividend Yield", value: `${(stock.dividend_yield * 100).toFixed(2)}%` },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Stock Details - {stock.ticker}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-lg font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockDetails;