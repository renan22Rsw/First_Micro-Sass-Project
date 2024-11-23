import { RocketIcon } from "@radix-ui/react-icons";

const Logo = () => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
      <RocketIcon className="h-5 w-5 text-primary-foreground" />;
    </div>
  );
};

export default Logo;
