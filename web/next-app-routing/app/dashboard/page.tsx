"use client"; // This is a client component, which means it will be rendered on the client side, and will be sent to the client. So you can write code here that you want to be exposed to the client, such as event handlers, state management, etc. example: any console.log here will be visible in the browser console.

const DashboardPage = () => {
  // Whatever written here will be rendered on server side, and will not be sent to the client. So you can write code here that you don't want to be exposed to the client, such as database queries, API calls, etc. example: any console.log here will not be visible in the browser console, but will be visible in the server console.

  console.log(
    "This will be logged on the server side, and will not be visible in the browser console.",
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
    </div>
  );
};

export default DashboardPage;
