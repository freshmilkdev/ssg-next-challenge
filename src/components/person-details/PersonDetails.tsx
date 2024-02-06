import classNames from "classnames";
import { Person } from "@/utils/common/person";
import { Button } from "@/components/Button";

export default function PersonDetails() {
  return (
    <div className={classNames("flex gap-2")}>
      {Object.values(Person).map((person) => (
        <Button key={person}>{person}</Button>
      ))}
      <button />
    </div>
  );
}
