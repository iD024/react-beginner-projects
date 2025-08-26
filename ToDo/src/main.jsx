import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Counter from "./components/Counter.jsx";
import App from "./App.jsx";
import Todo from "./components/Todo.jsx";

createRoot(document.getElementById("root")).render(
  <>
	<App />
  <div> ------ -------  ------ ------</div>
	<Counter />
  <div> ------ -------  ------ ------</div>
  <Todo />
  <div> ------ -------  ------ ------</div>
  </>
);
