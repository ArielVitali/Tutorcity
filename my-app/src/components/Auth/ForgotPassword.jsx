import { PiChalkboardTeacherDuotone } from "react-icons/pi";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-sm w-full h-[60vh] text-gray-600">
        <div className="text-center">
          <div>
            <PiChalkboardTeacherDuotone className="mx-auto text-7xl md:text-9xl " />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Reset your password
            </h3>
            <p className="">
              To reset your password, enter your email below and submit. An
              email will be sent to you with instructions about how to complete
              the process.
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>

          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
