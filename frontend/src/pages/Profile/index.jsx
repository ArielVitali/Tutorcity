import ProfileForm from "./ProfileForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { updateUser, uploadImage } from "../../api/apiDataSource";
import { useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../components/Modals/Dialog.jsx";
import ImageUploadSection from "../../components/ImageUpload.jsx";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const index = () => {
  const { openToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const { session, setSession } = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: session.first_name || "",
    last_name: session.last_name || "",
    email: session.email || "",
    degree: session.degree || "",
    experience: session.experience || "",
  });

  const handleImageSelected = useCallback((file) => {
    setImage(file);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await updateUser(formData);
      openToast("User updated successfully", "success");
      setSession({ ...session, ...userData });
      navigate("/ProviderHome");
    } catch (error) {
      openToast("Error updating user", "error");
      console.error("Error trying to update user:", error);
    }
  };

  const handleUploadimage = async () => {
    setIsSubmitting(true);
    try {
      const uploadData = await uploadImage(image);
      openToast("Image uploaded successfully", "success");
      setSession({ ...session, profileImgUrl: uploadData });
    } catch (error) {
      openToast("Error uploading image", "error");
      console.error("Error trying to upload image:", error);
    }
    setIsSubmitting(false);
    closeModal();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const NavButtons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <section className="container mx-auto md:py-6 px-5">
        <ActionsNav items={NavButtons} />
        <h1 className="text-center">
          <span className="text-lg md:text-4xl">Profile</span>
        </h1>
        <div className=" lg:grid lg:grid-cols-12 lg:gap-5 mt-5">
          <div className="lg:col-span-4">
            <div className="col-span-12 flex flex-col items-center justify-center h-full">
              <img
                src={
                  session.profileImgUrl === ""
                    ? "../../avatar.png"
                    : session.profileImgUrl
                }
                className="mx-auto block rounded-full w-40 h-40 md:h-[14rem] md:w-[14rem] object-cover"
              />
              <button
                onClick={openModal}
                className="btn glass bg-slate-300 w-30 mt-4"
              >
                Upload
              </button>
            </div>
            <DialogBox
              open={isModalOpen}
              onClose={closeModal}
              content={
                <ImageUploadSection
                  onImageSelected={handleImageSelected}
                  onSubmit={handleUploadimage}
                  isSubmitting={isSubmitting}
                />
              }
            />
          </div>
          <div className="mt-5 lg:mt-0 col-span-8">
            <ProfileForm
              formData={formData}
              handleInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
