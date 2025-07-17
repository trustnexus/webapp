import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export const useFetch = <T>(key: string, endpoint: string) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      const res = await api.get(endpoint,{withCredentials:true});
      return res.data;
    },
  });
};
