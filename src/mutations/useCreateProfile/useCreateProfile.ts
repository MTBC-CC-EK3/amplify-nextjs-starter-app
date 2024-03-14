import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { CONFIG, MutationKey } from "../../constants";
import { User } from "types";

export const useCreateProfile = () => {
  const mutationKey = [MutationKey.CreateProfile];

  const mutationFn = async (profile: FormData) => {
    const { data } = await axios.post<User>(
      `${CONFIG.BACKEND_URL}/profiles/create`,
      profile,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return data;
  };

  return useMutation({
    mutationKey: mutationKey,
    mutationFn: mutationFn,
  });
};
