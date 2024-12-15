import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SearchBarProps {
  onSearch: (ticker: string) => void;
}

interface StockSuggestion {
  ticker: string;
  company_name: string;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data: suggestions } = useQuery({
    queryKey: ['stockSuggestions', searchValue],
    queryFn: async () => {
      console.log('Fetching suggestions for:', searchValue);
      const { data, error } = await supabase
        .from('stocks')
        .select('ticker, company_name')
        .or(`ticker.ilike.%${searchValue}%,company_name.ilike.%${searchValue}%`)
        .limit(5);

      if (error) throw error;
      return data as StockSuggestion[];
    },
    enabled: searchValue.length > 0,
  });

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Ticker</h2>
      <div className="relative">
        <Command className="border rounded-lg shadow-sm">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Search for stocks..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
          </div>
          {searchValue.length > 0 && (
            <CommandList>
              <CommandEmpty>No stocks found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {suggestions?.map((stock) => (
                  <CommandItem
                    key={stock.ticker}
                    value={stock.ticker}
                    onSelect={(value) => {
                      onSearch(value);
                      setSearchValue("");
                    }}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{stock.ticker}</span>
                      <span className="text-sm text-gray-500">{stock.company_name}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </div>
    </div>
  );
};

export default SearchBar;