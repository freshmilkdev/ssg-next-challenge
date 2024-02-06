import { FunctionComponent, PropsWithChildren, MouseEvent } from "react";
import classNames from "classnames";
import CircularLoader from "@/components/CircularLoader";

type ButtonProps = {
  isLoading?: boolean;
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  isLoading,
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={classNames(
        "sm:min-w-24 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      )}
    >
      {isLoading ? <CircularLoader /> : children}
    </button>
  );
};
