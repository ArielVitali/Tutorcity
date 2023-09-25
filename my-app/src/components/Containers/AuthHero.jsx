import { PiChalkboardTeacherDuotone } from "react-icons/pi";

const AuthContainer = ({ title, description }) => {
  return (
    <div className="text-center">
      <div>
        <PiChalkboardTeacherDuotone className="mx-auto text-7xl md:text-9xl " />
      </div>
      <div className="mt-5 space-y-2">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AuthContainer;
