import { useState } from "react";
import { useGetPersonDetails } from "@/utils/react-query/person/queries";
import { PersonType } from "@/types";

export const usePersonDetails = () => {
  const [selectedPerson, setSelectedPerson] = useState<PersonType>(null);
  const { data, error, isLoading, isFetching } =
    useGetPersonDetails(selectedPerson);
  const handlePerson = (person: PersonType) => setSelectedPerson(person);

  return {
    isLoading: isLoading || isFetching,
    person: data,
    error,
    selectedPerson,
    onPersonSelect: handlePerson,
  };
};
