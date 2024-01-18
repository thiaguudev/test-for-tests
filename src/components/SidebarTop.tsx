import { UserNav } from "./UserNav";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-5">
      <h2 className="text-2xl text-black font-bold"></h2>
      <div className="flex gap-3 items-center">
        <div>
          <p>Thiago Luiz S.</p>
          <span className="text-muted-foreground">Survey Apoli Co.</span>
        </div>
        <UserNav />
      </div>
    </div>
  );
}
