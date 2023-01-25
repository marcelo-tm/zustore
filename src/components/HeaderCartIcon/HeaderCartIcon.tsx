interface HeaderCartIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  quantity: number;
}

export function HeaderCartIcon({
  icon,
  quantity,
  ...rest
}: HeaderCartIconProps) {
  return (
    <div className="relative h-9 w-9 flex flex-col justify-end" {...rest}>
      <span className="absolute top-0 right-0 bg-primary rounded-full w-6 h-6 text-white text-xs flex justify-center items-center">
        {quantity}
      </span>
      {icon}
    </div>
  );
}
