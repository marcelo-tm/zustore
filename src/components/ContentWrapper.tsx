interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  row?: boolean;
  center?: boolean;
}

export function ContentWrapper({
  children,
  row,
  center,
  ...rest
}: ContentWrapperProps) {
  return (
    <div
      className={`flex justify-center w-full ${
        rest.className ? rest.className : ""
      }`}
      aria-label="content-wrapper"
    >
      <div
        className={`max-w-5xl w-full p-5 ${row ? "flex" : ""} ${
          center ? "justify-between items-center" : ""
        }`}
        aria-label="inner-wrapper"
      >
        {children}
      </div>
    </div>
  );
}
