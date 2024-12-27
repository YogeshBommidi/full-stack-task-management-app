import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
