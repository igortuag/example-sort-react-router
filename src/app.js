import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Content } from "./content";
import Sort from "./sort";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function App() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.

function QueryParamsDemo() {
  return (
    <div>
      <div>
        <Sort />
        <Content />
      </div>
    </div>
  );
}


