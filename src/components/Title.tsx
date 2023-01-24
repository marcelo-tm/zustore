interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  label: string;
}

export function Title({ label, ...rest }: TitleProps) {
  return (
    <h3
      className={`font-bold text-base uppercase ${
        rest.className ? rest.className : ""
      }`}
    >
      {label}
    </h3>
  );
}
