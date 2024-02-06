import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = ({ children }) => {
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      {children}
    </main>
  );
};
