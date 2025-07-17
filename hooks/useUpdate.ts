import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export const useUpdate = <T>(endpoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data:( T | FormData) & { id: string }) => {
      const { id, ...rest } = data;
      const res = await api.put(`${endpoint}/${id}`, rest);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] });
    },
  });
};
