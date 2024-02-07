import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </main>
  );
};
