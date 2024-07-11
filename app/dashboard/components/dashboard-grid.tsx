import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
export const DashboardGrid = ({ title, children }: Props) => {
  return (
    <div>
      <p className="text-lg font-medium bg-accent_one text-white px-4 py-2">
        {title}
      </p>
      <div className="grid grid-cols-4 justify-between  gap-8  p-4 border">
        {children}
      </div>
    </div>
  );
};
