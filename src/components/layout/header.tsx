import { BarChartIcon } from "lucide-react";
import ThemeSelect from "./theme-select";

function Header() {
  return (
    <header className="flex items-center justify-between mx-4 py-2 border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Data Viz</h1>
        <BarChartIcon className="h-5 w-5" />
      </div>
      <div>
        <ThemeSelect />
      </div>
    </header>
  );
}

export default Header;
