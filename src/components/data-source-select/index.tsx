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
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { useLocation } from "wouter";

interface FormData {
  url: string;
  datasource: string;
}

function DataSourceSelect() {
  const [, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>();

  const selectedDatasource = watch("datasource");

  const validateURL = (url: string) => {
    if (selectedDatasource === "other" && !url) {
      return "URL é obrigatória.";
    }
    const pattern = new RegExp("^(https?:\\/\\/)?");
    return pattern.test(url) || "URL inválida.";
  };

  const onSubmit = (data: FormData) => {
    if (data.datasource === "other") {
      setLocation(`/visualizer?datasource=${data.url}`);
      return;
    }

    setLocation(`/visualizer?datasource=${data.datasource}`);
  };

  const handleDatasourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("datasource", e.target.value);
    if (e.target.value === "other") {
      trigger("url");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Selecione a fonte de dados para visualizar</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="w-full">
            <RadioGroup
              defaultValue="/data/fonte de dados 1.json"
              {...register("datasource")}
              onChange={handleDatasourceChange}
            >
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
              <DatasourceOption value="other" label="Outra:" id="other" />
            </RadioGroup>
            {selectedDatasource === "other" && (
              <>
                <div className="h-1"></div>
                <Input
                  placeholder="URL"
                  {...register("url", {
                    validate: validateURL,
                  })}
                />

                {errors.url && (
                  <Label className="text-sm text-red-500">
                    {errors.url.message}
                  </Label>
                )}
              </>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            <MoveRight className="mr-2 h-4 w-4" /> Visualizar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default DataSourceSelect;
