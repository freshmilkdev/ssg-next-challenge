import { useQuery } from "@tanstack/react-query";
import { Person } from "@/utils/common/person";
import { PersonType } from "@/types";

const fetchPersonDetails = async (person: PersonType, signal: any) => {
  const res = await fetch(`api/person?person=${person}`, { signal });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json();
};
export const useGetPersonDetails = (person: PersonType) => {
  return useQuery({
    queryKey: ["personDetails", person],
    queryFn: ({ signal }) => fetchPersonDetails(person, signal),
    enabled: !!person,
    retry: 0,
  });
};
