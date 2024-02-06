import classNames from "classnames";
import { Person } from "@/utils/common/person";
import { Button } from "@/components/Button";
import { usePersonDetails } from "@/components/person-details/usePersonDetails";

export default function PersonDetails() {
  const { selectedPerson, onPersonSelect } = usePersonDetails();

  return (
    <div className={classNames("flex gap-2")}>
      {Object.values(Person).map((person) => (
        <Button key={person} onClick={() => onPersonSelect(person)}>
          {person}
        </Button>
      ))}
      <button />
    </div>
  );
}
