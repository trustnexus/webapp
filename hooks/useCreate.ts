// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { api } from "@/lib/axios";

import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useCreate = <T>(endpoint: string, invalidateKey: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: T | FormData) => {
//       const res = await api.post(endpoint, data, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return res.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [invalidateKey] });
//     },
//   });
// };

export const useCreate = <T>(endpoint: string, invalidateKey: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: T | FormData) => {
      const isFormData = data instanceof FormData;

      const res = await api.post(endpoint, data, {
        withCredentials: true,
        headers: {
          "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        },
      });

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] });
    },
  });
};
