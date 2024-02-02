"use client";
import Breakdown from "@/components/Breakdown/Breakdown";
import Categories from "@/components/Categories/Categories";
import History from "@/components/History/History";
import Portfolio from "@/components/Portfolio/Portfolio";
import Summary from "@/components/Summary/Summary";

export default function Home() {
  return (
    <main className="flex flex-1 gap-x-10">
      <div className="flex flex-1 flex-col gap-y-12">
        <Summary />
        <Breakdown />
        {/* <History /> */}
      </div>
      <div className="rounded-xl bg-purple-2 p-6">
        <Portfolio />
        <Categories />
      </div>
    </main>
  );
}
