import { useEffect, useMemo, useState } from "react";
import { getPeopleOrderedBy } from "./mock-api";
import Tabela from "./tabela";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function Content() {
  const [pessoas, setPessoas] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search)

  // pegar o orderBy e o sortBy da query string
  const orderBy = query.get("orderBy") || "name";
  const sortBy = query.get("sortBy") || "asc";

  useEffect(() => {
    // chamar a api passando os parametros
    const pessoasFromMock = getPeopleOrderedBy(orderBy, sortBy);
    setPessoas(pessoasFromMock);
  }, [orderBy, sortBy]);

  return (
    <div>
      <Tabela pessoas={pessoas} />
    </div>
  );
}