export const DashboardCell = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div>
      <p className="text-lg font-medium opacity-90">{value}</p>
      <p className="text-sm opacity-60">{title}</p>
    </div>
  );
};
