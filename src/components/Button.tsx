interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ onClick, children, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-default text-white rounded-md px-5 py-3 ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
