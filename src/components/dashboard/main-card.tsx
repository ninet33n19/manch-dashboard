import { Card } from "../ui/card";

type MainCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

export function MainCard({ icon, title, value }: MainCardProps) {
  return (
    // REMOVED `w-fit` and `max-w-sm` to allow the card to expand and fill available space.
    <Card className="flex flex-col gap-2 p-4">
      {/* Header Row */}
      <div className="flex items-center gap-3">
        {/* Icon Wrapper */}
        <div className="flex h-fit w-fit items-center justify-center rounded-md bg-[#D8F9B8] p-2">
          {icon}
        </div>
        {/* Title */}
        <p className="font-semibold text-slate-600">{title}</p>
      </div>

      {/* Value Row */}
      <div>
        <span className="text-3xl font-bold text-slate-900">{value}</span>
      </div>
    </Card>
  );
}
