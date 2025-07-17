// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { api } from "@/lib/axios";

import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useUpdate = <T>(endpoint: string, invalidateKey: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: { id: string }) => {
//       const { id, ...rest } = data;
//       const res = await api.put(`${endpoint}/${id}`, rest);
//       return res.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [invalidateKey] });
//     },
//   });
// };

export const useUpdate = (endpoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData | { id: string; [key: string]: any }) => {
      if (data instanceof FormData) {
        const id = data.get("id");
        if (!id || typeof id !== "string") throw new Error("ID missing in FormData");

        const res = await api.put(`${endpoint}/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return res.data;
      } else {
        const { id, ...rest } = data;
        const res = await api.put(`${endpoint}/${id}`, rest);
        return res.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] });
    },
  });
};
