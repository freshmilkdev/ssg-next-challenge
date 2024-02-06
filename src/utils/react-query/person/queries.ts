import { useQuery } from "@tanstack/react-query";
import { Person } from "@/utils/common/person";
import { PersonType } from "@/types";

const fetchPersonDetails = async (person: PersonType) => {
  const res = await fetch(`api/person?person=${person}`);
  return res.json();
};
export const useGetPersonDetails = (person: PersonType) => {
  return useQuery({
    queryKey: ["personDetails", person],
    queryFn: () => fetchPersonDetails(person),
    enabled: !!person,
  });
};
