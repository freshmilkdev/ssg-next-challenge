import classNames from "classnames";
import { FunctionComponent } from "react";
import { usePersonDetails } from "@/components/person-details/usePersonDetails";
import { PersonCard } from "@/components/person-details/PersonCard/PersonCard";
import { ErrorMessage } from "@/components/ErrorMessage";
import { PersonButtons } from "@/components/person-details/PersonButtons";
import { useGetPersonDetails } from "@/utils/react-query/person/queries";

export const PersonDetails: FunctionComponent = () => {
  const { selectedPerson, onPersonSelect } = usePersonDetails();

  const { data, error, isLoading, isFetching, isRefetching } =
    useGetPersonDetails(selectedPerson);

  const loading = isLoading || isFetching || isRefetching;

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
            "animate-pulse": loading,
          },
        )}
      >
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <PersonCard data={data} person={selectedPerson} isLoading={loading} />
        )}
      </div>
      <PersonButtons
        selectedPerson={selectedPerson}
        onPersonSelect={onPersonSelect}
        isLoading={loading}
      />
    </div>
  );
};
