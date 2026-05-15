import { CardDashboard } from "@/components/cardDashboard";
import { ChartDashboard } from "@/components/chartDashboard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-4 px-4">
        <CardDashboard
          type={"balance"}
          value={10000000.54}
          rangeTrace={true}
          range={4.2}
          lastMonth={"Abril"}
          year={26}
        />
        <CardDashboard
          type={"spent"}
          value={6000.54}
          rangeTrace={true}
          range={8.2}
          lastMonth={"Abril"}
          year={26}
        />
        <CardDashboard
          type={"received"}
          value={100.54}
          rangeTrace={false}
          range={5.3}
          lastMonth={"Abril"}
          year={26}
        />
        <CardDashboard
          type={"lunge"}
          value={10000.54}
          rangeTrace={true}
          range={4.2}
          lastMonth={"Abril"}
          year={26}
        />
      </div>
      <div className="grid lg-grid-cols-2">
        <ChartDashboard />
      </div>
    </div>
  );
}
