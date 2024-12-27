import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./components/MainPage/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
