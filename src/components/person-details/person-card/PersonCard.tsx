"use client";
import { motion } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";
import { User } from "@/pages/api/person";
import { CardItem } from "@/components/person-details/person-card/CardItem";
import { CardBackground } from "@/components/person-details/person-card/CardBackground";
import { CardAvatar } from "@/components/person-details/person-card/CardAvatar";
import { DefaultMessage } from "@/components/person-details/person-card/DefaultMessage";
import { PersonType } from "@/types";

type Props = {
  data: User;
  person: PersonType;
  isLoading: boolean;
};
export const PersonCard: FunctionComponent<PropsWithChildren<Props>> = ({
  data,
  person,
  isLoading,
}) => {
  if (!person) {
    return <DefaultMessage />;
  }
  const { backgroundImageUrl, profilePictureUrl, name, title, metrics } =
    data || {};
  return (
    <motion.div
      key={isLoading.toString()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: isLoading ? 0 : 1 }}
    >
      <CardBackground isLoading={isLoading} url={backgroundImageUrl} />
      <figure className="p-4">
        <figcaption className="flex items-center justify-between font-medium dark:text-white">
          <CardAvatar isLoading={isLoading} url={profilePictureUrl} />
          <CardItem title={name} subTitle={title} isLoading={isLoading} />
          <CardItem
            title={metrics?.followers}
            subTitle={"Followers"}
            isLoading={isLoading}
          />
          <CardItem
            title={metrics?.following}
            subTitle={"Following"}
            isLoading={isLoading}
          />
        </figcaption>
      </figure>
    </motion.div>
  );
};
