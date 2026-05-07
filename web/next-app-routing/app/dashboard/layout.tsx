export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
        <h1>Dashboard Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
