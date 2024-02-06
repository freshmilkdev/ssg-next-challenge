import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";
import PersonDetails from "@/components/person-details/PersonDetails";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <PersonDetails />
    </MainLayout>
  );
};

export default Home;
