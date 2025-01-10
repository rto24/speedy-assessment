import DataCards from "@/components/DataCards";
import TotalActiveUsersChart from "@/components/TotalActiveUsers";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-4xl font-bold">Streamify Dashboard</h1>
      <DataCards />
      <TotalActiveUsersChart />
    </div>
  );
}
