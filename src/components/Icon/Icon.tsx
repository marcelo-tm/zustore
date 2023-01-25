type IconProps = {
  iconData: React.ReactNode;
};

export function Icon({ iconData }: IconProps) {
  return <div className="w-6 h-6">{iconData}</div>;
}
