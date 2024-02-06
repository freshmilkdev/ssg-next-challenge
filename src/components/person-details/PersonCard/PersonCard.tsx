"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import { User } from "@/pages/api/person";
import { CardItem } from "@/components/person-details/PersonCard/CardItem";
import { CardBackground } from "@/components/person-details/PersonCard/CardBackground";
import { CardAvatar } from "@/components/person-details/PersonCard/CardAvatar";
import { DefaultMessage } from "@/components/person-details/PersonCard/DefaultMessage";
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
    <>
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
    </>
  );
};
