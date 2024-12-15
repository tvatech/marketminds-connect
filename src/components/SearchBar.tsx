import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Ticker</h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for stocks..."
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default SearchBar;