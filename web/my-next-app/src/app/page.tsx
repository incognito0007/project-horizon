type UserProps = {
  name: string;
};

function WelcomeCard({ name }: UserProps) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>Hello, {name}</h1>
      <p>Welcome to Next.js + TypeScript</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <WelcomeCard name="Ankit" />
    </main>
  );
}
