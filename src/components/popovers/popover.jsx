import { Popover } from "@headlessui/react";

export const PopOver = ({ popButton, className, children, ...rest }) => {
  return (
    <Popover className={"relative"} {...rest}>
      <div className="flex flex-col place-self-center">
        <Popover.Button className="">{popButton}</Popover.Button>
        <Popover.Panel className="absolute bg-blue-600 w-52 rounded-lg top-10 left-[-90px]">
          {children}
        </Popover.Panel>
      </div>
    </Popover>
  );
};
