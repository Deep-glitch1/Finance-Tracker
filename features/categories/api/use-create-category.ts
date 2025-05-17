import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.categories.$post>;
type RequestType = InferRequestType<typeof client.api.categories.$post>["json"];

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      try {
        console.log('Attempting to create category:', json);
        const response = await client.api.categories.$post({ json });
        console.log('API Response:', response);
        const data = await response.json();
        console.log('Response data:', data);
        return data;
      } catch (error) {
        console.error('Error creating category:', error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Category created.");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error('Mutation error:', error);
      toast.error(`Failed to create category: ${error.message}`);
    },
  });

  return mutation;
};
