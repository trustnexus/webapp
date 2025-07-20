import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useUpdate = (endpoint: string, invalidateKey: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: FormData | { id: string; [key: string]: any }) => {
//       if (data instanceof FormData) {
//         const id = data.get("id");
//         if (!id || typeof id !== "string") throw new Error("ID missing in FormData");

//         const res = await api.put(`${endpoint}/${id}`, data, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         return res.data;
//       } else {
//         const { id, ...rest } = data;
//         const res = await api.put(`${endpoint}/${id}`, rest);
//         return res.data;
//       }
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
      let id: string;
      let payload: any;
      let headers: Record<string, string> = {};

      if (data instanceof FormData) {
        id = data.get("id") as string;
        if (!id) throw new Error("ID missing in FormData");
        payload = data;
        headers["Content-Type"] = "multipart/form-data";
      } else {
        id = data.id;
        payload = { ...data };
        delete payload.id; // Remove id from payload
        headers["Content-Type"] = "application/json";
      }

      const res = await api.put(`${endpoint}/${id}`, payload, { headers });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] });
    },
  });
};
