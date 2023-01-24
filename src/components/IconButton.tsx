interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export function IconButton({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button type="button" className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
