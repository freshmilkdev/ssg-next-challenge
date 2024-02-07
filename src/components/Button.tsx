import { FunctionComponent, PropsWithChildren, MouseEvent } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { BarLoader } from "@/components/BarLoader";

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
        "h-10 text-sm transition-colors px-2.5 py-2 rounded-md relative text-white hover:text-white bg-blue-700 hover:bg-blue-800",
      )}
    >
      <span className="relative z-10 w-full">
        {isLoading ? <BarLoader /> : children}
      </span>
      {isLoading && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute text-white inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
         />
      )}
    </button>
  );
};
