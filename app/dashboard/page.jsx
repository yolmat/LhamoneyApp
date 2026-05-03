import { CardDashboard } from "@/components/cardDashboard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <CardDashboard type={"balance"} value={1000.54} />
        <CardDashboard type={"spent"} value={1000.54} />
        <CardDashboard type={"received"} value={1000.54} />
        <CardDashboard type={"lunge"} value={1000.54} />
      </div>
      <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
}
