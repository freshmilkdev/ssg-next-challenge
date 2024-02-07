import { FunctionComponent, PropsWithChildren } from "react";
import { Counter } from "@/components/person-details/person-card/Counter";

type Props = {
  isLoading: boolean;
  title: string | number;
  subTitle: string;
};

export const CardItem: FunctionComponent<PropsWithChildren<Props>> = ({
  title,
  subTitle,
  isLoading,
}) => {
  return isLoading ? (
    <div className="ml-2 min-h-12 flex flex-col justify-around space-y-0.5">
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-14" />
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20" />
    </div>
  ) : (
    <div className="ml-2 min-h-12 flex flex-col justify-aroundspace-y-0.5">
      {Number.isInteger(title) ? (
        <Counter from={0} to={+title} />
      ) : (
        <div>{title}</div>
      )}
      <div className="text-sm text-gray-500 dark:text-gray-400">{subTitle}</div>
    </div>
  );
};
