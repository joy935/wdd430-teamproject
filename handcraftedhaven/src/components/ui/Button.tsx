import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "login" | "register" | "primary" | "secondary" | "product";
}

export function Button({ children, variant, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "px-4 py-2 rounded transition",
        {
            "border border-electricBlue hover:bg-electricBlue" : variant === "login",
            "bg-neonPink hover:bg-electricBlue" : variant === "register",
            "bg-electricBlue text-white hover:bg-neonPink" : variant === "primary",
            "bg-backgroundDark border border-neonPink text-white hover:bg-neonPink" : variant === "secondary",
            "w-full py-2 border border-electricBlue text-electricBlue rounded hover:bg-electricBlue hover:text-white transition-colors" : variant === "product"
        },
        className,
      )}
    >
      {children}
    </button>
  );
}