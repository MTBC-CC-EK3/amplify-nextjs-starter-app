import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CONFIG, QueryKey } from "../../constants";
import { User } from "types";

export const useListProfiles = () => {
  const queryKey = [QueryKey.ListProfiles];

  const queryFn = async () => {
    const { data } = await axios.get<User[]>(
      `${CONFIG.BACKEND_URL}/profiles/getAllProfiles`
    );

    return data;
  };

  return useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });
};
