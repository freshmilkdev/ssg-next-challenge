import { useState } from "react";
import { useGetPersonDetails } from "@/utils/react-query/person/queries";
import { PersonType } from "@/types";

export const usePersonDetails = () => {
  const [person, setPerson] = useState<PersonType>(null);
  const handlePerson = (person: PersonType) => setPerson(person);

  return {
    selectedPerson: person,
    onPersonSelect: handlePerson,
  };
};
