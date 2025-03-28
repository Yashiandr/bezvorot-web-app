import { ThemeSwitcher } from "@/features/theme-switcher";
import { Button } from "@/shared/ui";

export default function RootPage() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-y-2">
      <p>Hello i`m work</p>
      <Button>hi hi hi</Button>
      <ThemeSwitcher />
    </div>
  );
}
