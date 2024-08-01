import { Header } from "./organisms/header";
import { Presentation } from "./organisms/presentation";

export default function Home() {
  return (
    <main className="w-screen h-screen
    flex items-center justify-between">
      <Header />
      <Presentation />
    </main>
  );
}
