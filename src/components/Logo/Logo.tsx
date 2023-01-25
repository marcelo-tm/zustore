import storeLogo from "../../assets/zustore_logo.png";
import storeLogoWhite from "../../assets/zustore_logo_white.png";

type LogoProps = {
  height?: number;
  white?: boolean;
};

export function Logo({ height = 60, white = false }: LogoProps) {
  return white ? (
    <img src={storeLogoWhite} alt="Zustand Store" style={{ height }} />
  ) : (
    <img src={storeLogo} alt="Zustand Store" style={{ height }} />
  );
}
