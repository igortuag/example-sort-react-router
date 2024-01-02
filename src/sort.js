import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom/cjs/react-router-dom.min";

export default function Sort() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const orderBy = query.get("orderBy") || "name";
  const sortBy = query.get("sortBy") || "asc";
  let history = useHistory();

  function handleChangeUrlParams(orderBy, sortBy) {
    history.push(`/table?orderBy=${orderBy}&sortBy=${sortBy}`);
  }

  return (
    <nav>
      <h2>Ordernar Por</h2>
      <ul>
        <li
          style={{
            color: orderBy === "name" && sortBy === "desc" ? "red" : "black"
          }}
        >
          <button
            onClick={() => {
              handleChangeUrlParams("name", "desc");
            }}
          >
            Nome decrescente
          </button>
        </li>
        <li
          style={{
            color: orderBy === "name" && sortBy === "asc" ? "red" : "black"
          }}
        >
          <button
            onClick={() => {
              handleChangeUrlParams("name", "asc");
            }}
          >
            Nome crescente
          </button>
        </li>
        <li
          style={{
            color: orderBy === "age" && sortBy === "desc" ? "red" : "black"
          }}
        >
          <button
            onClick={() => {
              handleChangeUrlParams("age", "desc");
            }}
          >
            Idade decrescente
          </button>
        </li>
        <li
          style={{
            color: orderBy === "age" && sortBy === "asc" ? "red" : "black"
          }}
        >
          <button
            onClick={() => {
              handleChangeUrlParams("age", "asc");
            }}
          >
            Idade crescente
          </button>
        </li>
      </ul>
    </nav>
  );
}
