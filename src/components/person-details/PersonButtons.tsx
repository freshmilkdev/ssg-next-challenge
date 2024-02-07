import classNames from "classnames";
import { Person } from "@/utils/common/person";
import { Button } from "@/components/Button";
import { FunctionComponent, PropsWithChildren } from "react";
import { PersonType } from "@/types";

type Props = {
  selectedPerson: PersonType;
  onPersonSelect: (person: PersonType) => void;
  isLoading: boolean;
};
export const PersonButtons: FunctionComponent<PropsWithChildren<Props>> = ({
  selectedPerson,
  isLoading,
  onPersonSelect,
}) => {
  return (
    <div className={classNames("grid grid-cols-3 gap-2 w-full")}>
      {Object.values(Person).map((person) => (
        <Button
          key={person}
          onClick={() => onPersonSelect(person)}
          isLoading={isLoading && person === selectedPerson}
        >
          {person}
        </Button>
      ))}
      {/*<button />*/}
    </div>
  );
};
