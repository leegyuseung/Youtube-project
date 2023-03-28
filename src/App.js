import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      {/* Outlet에 우산을 씌워준다. */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
