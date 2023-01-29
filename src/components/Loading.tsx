import { Spinner } from "./Spinner";

export function Loading() {
  return (
    <div className="fixed w-full h-screen bg-slate-700 bg-opacity-70 flex justify-center items-center z-[60]">
      <Spinner />
    </div>
  );
}
