import { FunctionComponent, PropsWithChildren, MouseEvent } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick(event: MouseEvent<HTMLButtonElement>): void;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      )}
    >
      {children}
    </button>
  );
};
