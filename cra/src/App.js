import logo from "./logo.svg";
import "./App.css";
import WorkspaceA from "workspace-a";
import WorkspaceB from "workspace-b";

function App() {
  return (
    <>
      <p>WorkspaceA: {JSON.stringify(WorkspaceA)}</p>
      <p>WorkspaceB: {JSON.stringify(WorkspaceB)}</p>
    </>
  );
}

export default App;
