import { PopOver } from "./popover";
import { BellIcon, BellAlertIcon } from "@heroicons/react/24/outline";

export const NotificationPopover = () => {
  return (
    <PopOver
      className={""}
      popButton={<BellIcon className="w-8 h-8 hover:text-slate-500" />}
    >
      <div>Create a note</div>
      <div>Time for a letter?</div>
    </PopOver>
  );
};
