import { startTransition, useEffect, useState } from "react";
import { useLocation, useSearch } from "wouter";

function useGetData() {
  const searchstring = useSearch();
  const [, setLocation] = useLocation();

  const [reqState, setReqState] = useState<{
    data: Record<string, unknown>[];
    loading: boolean;
    error: Error | null;
  }>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const search = new URLSearchParams(searchstring);
    const datasource = search.get("datasource");

    if (datasource === null) {
      setLocation("/");
      return;
    }

    startTransition(() => {
      fetch(datasource)
        .then((response) => response.json())
        .then((data) => {
          setReqState({
            data,
            loading: false,
            error: null,
          });
        })
        .catch((error) => {
          setReqState({
            data: [],
            loading: false,
            error,
          });

          setLocation("/");
        });
    });
  }, [searchstring]);

  return reqState;
}

export default useGetData;
