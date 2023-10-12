import {
  PiGuitarDuotone,
  PiCameraDuotone,
  PiBabyDuotone,
} from "react-icons/pi";
import { FaChessKnight } from "react-icons/fa";

export const servicesMock = [
  {
    //this is a mock object, it will be replaced by the data from the database
    icon: <PiGuitarDuotone className="text-3xl " />,
    name: "Clase de Guitarra",
    admin: "Juan Perez",
    duration: "2:30 HS",
    frequency: "Weekly",
    rating: "4.5",
    description:
      "Clases de guitarra para principiantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat harum, architecto, ullam unde minima autem, maxime asperiores eius voluptatibus pariatur quidem! Error ut exercitationem consequatur reiciendis vel consectetur veritatis.",
    isPublished: true,
  },
  {
    //this is a mock object, it will be replaced by the data from the database
    icon: <FaChessKnight className="text-3xl " />,
    name: "Chess Lessons",
    admin: "Juan Perez",
    duration: "2:30 HS",
    frequency: "Weekly",
    rating: "4.5",
    description:
      "Clases de guitarra para principiantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat harum, architecto, ullam unde minima autem, maxime asperiores eius voluptatibus pariatur quidem! Error ut exercitationem consequatur reiciendis vel consectetur veritatis.",
    isPublished: true,
  },
  {
    //this is a mock object, it will be replaced by the data from the database
    icon: <PiCameraDuotone className="text-3xl " />,
    name: "Content Making",
    admin: "Santiago Gonzalez",
    duration: "1:30 HS",
    frequency: "Monthly",
    rating: "3.5",
    description:
      "Clases de guitarra para principiantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat harum, architecto, ullam unde minima autem, maxime asperiores eius voluptatibus pariatur quidem! Error ut exercitationem consequatur reiciendis vel consectetur veritatis.",
    isPublished: true,
  },
  {
    //this is a mock object, it will be replaced by the data from the database
    icon: <PiBabyDuotone className="text-3xl " />,
    name: "Baby Sitting",
    admin: "Maria Rodriguez",
    duration: "1:30 HS",
    frequency: "daily",
    rating: "3.5",
    description: "hola",
    isPublished: false,
  },
];

export const categoriesMock = [
  { name: "Music" },
  { name: "Baby Sitting" },
  { name: "Content Making" },
  { name: "Chemistry" },
  { name: "Math" },
  { name: "Physics" },
  { name: "Biology" },
  { name: "English" },
];

export const typeMock = [
  { name: "Private" },
  { name: "Group" },
  { name: "Public" },
];

export const frequencyMock = [
  { name: "Daily" },
  { name: "Weekly" },
  { name: "Monthly" },
];

export const ratingMock = [{ name: "ascendent" }, { name: "descendent" }];
