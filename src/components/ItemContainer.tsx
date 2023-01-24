interface ItemContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  children: React.ReactNode;
}

export function ItemContainer({
  imageUrl,
  children,
  className,
}: ItemContainerProps) {
  return (
    <div
      className={`rounded-md border border-border bg-white p-5 w-[300px] ${
        className ? className : ""
      }`}
    >
      <img
        src={imageUrl}
        className="object-contain h-[260px]"
        alt="Item image"
      />
      {children}
    </div>
  );
}
