import { memo } from "react";

type InputProps = {
  label: string;
  name: string;
  error?: string | undefined;
  size: "small" | "regular" | "large";
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const getInputClass = (size) => {
  switch (size) {
    case "large":
      return "h-12 px-4 text-lg";
      break;
    case "small":
      return "h-8 px-2 text-sm";
    default:
      return "h-10 px-3 text-base";
      break;
  }
};

const Input = memo(({ label, name, error, size, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        className={`w-auto text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ${getInputClass(
          size
        )}`}
        type="text"
        {...props}
        id={name}
        name={name}
      />
      {error ? (
        <span role="alert" className="text-red-500 text-sm">
          {error}
        </span>
      ) : null}
    </>
  );
});

export { Input };
