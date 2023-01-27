import { ContentWrapper } from "./ContentWrapper";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <ContentWrapper className="bg-default text-white mt-auto" row center>
      <div>
        <Logo white height={50} />
        <p className="text-xs w-72 mt-2">
          Zustore is a fictional store mode to test the Zustand state manager
          library
        </p>
      </div>
    </ContentWrapper>
  );
}
