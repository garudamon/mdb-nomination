import { memo } from "react";
type ButtonProps = {
  children: React.ReactElement;
  size?: string | "small" | "regular" | "large";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const getButtonClass = (size: string) => {
  switch (size) {
    case "large":
      return "h-12 px-6 text-lg";
      break;
    case "small":
      return "h-8 px-4 text-sm ";
    default:
      return "h-10 px-5";
      break;
  }
};

export const Button = memo(({ children, size, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 ${getButtonClass(
        size
      )}`}
      {...props}
    >
      {children}
    </button>
  );
});
