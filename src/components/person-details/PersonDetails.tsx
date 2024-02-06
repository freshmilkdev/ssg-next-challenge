import classNames from "classnames";
import { FunctionComponent } from "react";
import { Person } from "@/utils/common/person";
import { Button } from "@/components/Button";
import { usePersonDetails } from "@/components/person-details/usePersonDetails";
import { PersonCard } from "@/components/person-details/PersonCard/PersonCard";
import { ErrorMessage } from "@/components/ErrorMessage";

export const PersonDetails: FunctionComponent = () => {
  const { data, selectedPerson, isLoading, error, onPersonSelect } =
    usePersonDetails();
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-4 px-4 w-full sm:max-w-md",
      )}
    >
      <div
        className={classNames(
          "w-full h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
          {
            "flex items-center": error,
            "animate-pulse": isLoading,
          },
        )}
      >
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <PersonCard
            data={data}
            person={selectedPerson}
            isLoading={isLoading}
          />
        )}
      </div>
      <div className={classNames("grid grid-cols-2 gap-2 w-full")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            onClick={() => onPersonSelect(person)}
            isLoading={isLoading && person === selectedPerson}
          >
            {person}
          </Button>
        ))}
        <button />
      </div>
    </div>
  );
};
