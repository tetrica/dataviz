import useGetData from "@/lib/hooks/useGetData";
import { ChartVizualizer } from "./chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "./container";
import TableVisualizer from "./table";

function Visualizer() {
  const { data, loading } = useGetData();

  if (loading) return <div>Loading...</div>;

  return (
    <Container data={data}>
      <Tabs defaultValue="graph" className="min-w-[200px]">
        <TabsList>
          <TabsTrigger value="graph">Gráfico</TabsTrigger>
          <TabsTrigger value="table">Tabela</TabsTrigger>
        </TabsList>
        <TabsContent value="graph">
          <ChartVizualizer data={data} />
        </TabsContent>
        <TabsContent value="table">
          <TableVisualizer data={data} />
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default Visualizer;
