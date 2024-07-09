import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./components/layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
