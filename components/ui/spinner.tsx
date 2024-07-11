import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const Spinner = () => {
  return (
    <div className="w-fit mx-auto">
      <DotsHorizontalIcon className="animate-bounce" />
    </div>
  );
};
