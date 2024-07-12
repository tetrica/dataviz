import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Filter from "./filter";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "wouter";

export interface ContainerProps {
  children: React.ReactNode;
  data: Record<string, unknown>[];
}

function Container({ data, children }: ContainerProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Card>
        <CardHeader>
          <div className="h-2"></div>
          <Filter data={data} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex items-center justify-between w-full">
          <div className="flex-col items-start gap-2 text-sm max-w-[400px] mx-auto">
            <div className="flex gap-2 font-medium leading-none">
              Clique no botão abaixo para selecionar outras fontes de dados
            </div>
            <Link href="/">
              <Button variant="outline" className="w-full">
                <MoveLeft className="mr-2 h-4 w-4" />
                Selecionar fontes de dados
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </FormProvider>
  );
}

export default Container;
