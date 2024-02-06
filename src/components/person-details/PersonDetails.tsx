import classNames from "classnames";
import { FunctionComponent } from "react";
import { Person } from "@/utils/common/person";
import { Button } from "@/components/Button";
import { usePersonDetails } from "@/components/person-details/usePersonDetails";
import { PersonCard } from "@/components/person-details/PersonCard/PersonCard";

export const PersonDetails: FunctionComponent = () => {
  const { data, person, isLoading, error, onPersonSelect } = usePersonDetails();
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
          <div
            className="w-full mx-4 flex items-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <p className="font-medium">{error.message}</p>
            </div>
          </div>
        ) : (
          <PersonCard data={data} person={person} isLoading={isLoading} />
        )}
      </div>
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button key={person} onClick={() => onPersonSelect(person)}>
            {person}
          </Button>
        ))}
        <button />
      </div>
    </div>
  );
};
