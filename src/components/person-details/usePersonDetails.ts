import { useState } from "react";
import { Person } from "@/utils/common/person";

export const usePersonDetails = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | string | null>(
    null,
  );

  const handlePerson = (person: Person | string) => setSelectedPerson(person);

  return {
    selectedPerson,
    onPersonSelect: handlePerson,
  };
};
