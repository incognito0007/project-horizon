import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children?: ReactNode;
  user?: ReactNode;
  stats?: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard Layout</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/dashboard/@stats" className="text-blue-500">
              Stats
            </a>
          </li>
          <li>
            <a href="/dashboard/@user" className="text-blue-500">
              User
            </a>
          </li>
        </ul>
      </nav>
      <div>{props.children}</div>
      <div>{props.user}</div>
      <div>{props.stats}</div>
    </div>
  );
};

export default DashboardLayout;
