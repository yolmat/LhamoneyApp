import { AvatarDemo } from "./avatarDemo";
import { ModeToggle } from "./modeToggle";
import { NotificationButton } from "./notificationButton";
import { SidebarTrigger } from "./ui/sidebar";

export function HeaderDashboard() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="flex gap-5">
        <NotificationButton />
        <ModeToggle />
        <AvatarDemo />
      </div>
    </header>
  );
}
