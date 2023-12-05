import { PiBellDuotone, PiChalkboardTeacherDuotone } from "react-icons/pi";

export const Menus = [
  {
    title: "Inbox",
    src: <PiBellDuotone className="text-3xl" />,
    to: "/CommentsInbox",
  },
  {
    title: "Hiring",
    src: <PiChalkboardTeacherDuotone className="text-3xl" />,
    to: "/Hirings",
  },
];
