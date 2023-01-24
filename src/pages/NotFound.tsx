import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

import { ContentWrapper } from "../components/ContentWrapper";

export function NotFound() {
  return (
    <ContentWrapper>
      <div className="flex flex-col items-center text-center mt-10">
        <ExclamationCircleIcon className="w-28" />
        <p className="mt-5 text-xl font-semibold">Page not found!</p>
      </div>
    </ContentWrapper>
  );
}
