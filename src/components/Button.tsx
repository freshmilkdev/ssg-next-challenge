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
      className={classNames("px-2 py-1 border border-black")}
    >
      {children}
    </button>
  );
};
