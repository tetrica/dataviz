import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./components/layout";
import Routes from "./components/routes";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
