import Breakdown from "@/components/Breakdown/Breakdown";
import Categories from "@/components/Categories/Categories";
import History from "@/components/History/History";
import Portfolio from "@/components/Portfolio/Portfolio";
import Summary from "@/components/Summary/Summary";

export default function Home() {
  return (
    <main className="flex flex-1 gap-x-10">
      <div className="flex-1">
        <Summary />
        <Breakdown />
        <History />
      </div>
      <div className="bg-purple-2 rounded-xl p-6">
        <Portfolio />
        <Categories />
      </div>
    </main>
  );
}
