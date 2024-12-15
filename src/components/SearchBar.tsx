import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (ticker: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [ticker, setTicker] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticker.trim()) {
      onSearch(ticker.trim());
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Ticker</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for stocks..."
            className="pl-10"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
        </div>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;