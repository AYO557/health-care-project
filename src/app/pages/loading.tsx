export default function LoadingPage() {
  return (
    <div className="h-screen bg-darkgreen text-white flex flex-col justify-center items-center gap-10">
      <div className="size-40 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      <p className="text-2xl">Fetching data, please wait...</p>
    </div>
  );
}
