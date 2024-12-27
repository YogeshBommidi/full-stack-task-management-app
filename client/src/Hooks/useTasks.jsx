import { useQuery } from "react-query";
import { getAllTasks } from "../util/api";

const useTasks = () => {
  const { data, isError, isLoading } = useQuery("allTasks", getAllTasks, {
    refetchOnWindowFocus: false,
  });
  return { data, isError, isLoading };
};

export default useTasks;
