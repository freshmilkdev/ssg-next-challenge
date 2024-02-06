import { useState } from "react";
import { useGetPersonDetails } from "@/utils/react-query/person/queries";
import { PersonType } from "@/types";

export const usePersonDetails = () => {
  const [person, setPerson] = useState<PersonType>(null);
  const { data, error, isLoading, isFetching } = useGetPersonDetails(person);
  const handlePerson = (person: PersonType) => setPerson(person);

  return {
    isLoading: isLoading || isFetching,
    data,
    selectedPerson: person,
    error,
    onPersonSelect: handlePerson,
  };
};
