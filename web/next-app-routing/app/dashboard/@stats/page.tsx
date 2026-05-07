const waitFor = (sec: number) =>
  //   new Promise((resolve) => setTimeout(resolve, sec * 1000));
  new Promise((res) => setTimeout(res, sec * 1000));

export default async function StatsPage() {
  await waitFor(12); // Simulate a delay for loading data
  return (
    <div>
      <h1 className="text-2xl font-bold">Stats</h1>
      <p>Welcome to the stats page!</p>
    </div>
  );
}
