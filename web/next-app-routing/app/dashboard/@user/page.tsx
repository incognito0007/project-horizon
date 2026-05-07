const waitFor = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));
// new Promise((res, rej) => setTimeout(rej, sec * 1000));

const UserPage = async () => {
  await waitFor(5); // Simulate a delay for loading data
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard User</h1>
      <p>Welcome to the dashboard User page!</p>
    </div>
  );
};

export default UserPage;
