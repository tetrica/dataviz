import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { RadioGroup } from "../ui/radio-group";
import DatasourceOption from "./option";
import { Input } from "../ui/input";

function DataSourceSelect() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Selecione a fonte de dados para visualizar</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-full">
          <RadioGroup defaultValue="/data/fonte de dados 1.json">
            <DatasourceOption
              value="/data/fonte de dados 1.json"
              label="Fonte de dados 1"
              id="f1"
            />
            <DatasourceOption
              value="/data/fonte de dados 2.json"
              label="Fonte de dados 2"
              id="f2"
            />
            <DatasourceOption
              value="/data/fonte de dados 3.json"
              label="Fonte de dados 3"
              id="f3"
            />
            <DatasourceOption
              value="/data/fonte de dados 4.json"
              label="Fonte de dados 4"
              id="f4"
            />
            <DatasourceOption
              value="/data/fonte de dados 5.json"
              label="Fonte de dados 5"
              id="f5"
            />
            <DatasourceOption value="" label="Outra:" id="other" />
            <Input placeholder="URL" />
          </RadioGroup>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">
          <MoveRight className="mr-2 h-4 w-4" /> Visualizar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DataSourceSelect;
