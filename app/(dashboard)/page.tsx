import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";

const DashboardPageContent = () => {
  return (
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <DataGrid />

      <DataCharts />
    </div>
  );
};

const DashboardPage = () => {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="size-6 animate-spin" /></div>}>
      <DashboardPageContent />
    </Suspense>
  );
};

export default DashboardPage;
