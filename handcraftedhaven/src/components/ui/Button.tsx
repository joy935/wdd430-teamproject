import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "login" | "register" | "primary" | "secondary" | "product" | "seller";
}

export function Button({ children, variant, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "px-4 py-2 rounded transition",
        {
            "border border-electricBlue hover:bg-electricBlue" : variant === "login",
            "bg-neonPinkDark hover:bg-electricBlue" : variant === "register",
            "bg-electricBlue text-white hover:bg-neonPink" : variant === "primary",
            "bg-backgroundDark border border-neonPink text-white hover:bg-neonPink" : variant === "secondary",
            "w-full py-2 border border-electricBlue text-electricBlue rounded hover:bg-electricBlue hover:text-white transition-colors" : variant === "product",
            "w-full py-2 border border-neonPink text-neonPink rounded hover:bg-neonPink hover:text-white transition-colors" : variant === "seller",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}