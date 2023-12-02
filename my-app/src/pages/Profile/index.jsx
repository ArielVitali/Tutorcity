import ProfileForm from "./ProfileForm";
import { UserContext } from "../../context/UserContext/UserContext";
import { updateUser, uploadImage } from "../../api/apiDataSource";
import { useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../components/Modals/DialogBox.jsx";
import ImageUploadSection from "../../components/ImageUpload.jsx";

const index = () => {
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

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const userData = await updateUser(formData);
      console.log(userData);
      setSession({ ...session, ...userData });
      navigate("/ProviderHome");
    } catch (error) {
      console.error("Error trying to update user:", error);
    }
  };

  const handleUploadimage = async () => {
    setIsSubmitting(true);
    try {
      const uploadData = await uploadImage(image);
      console.log(uploadData);
      setSession({ ...session, profileImgUrl: uploadData });
    } catch (error) {
      console.error("Error trying to upload image:", error);
    }
    setIsSubmitting(false);
    closeModal();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <section className="container mx-auto md:py-6 px-5">
        <h1 className="text-center">
          <span className="text-lg md:text-4xl">Profile</span>
        </h1>
        <div className="lg:grid lg:grid-cols-12 lg:gap-5 mt-5">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-12 gap-5 items-center">
              <div className="col-span-12 text-center">
                <img
                  src={
                    session.profileImgUrl === ""
                      ? "../../public/deadmau.png"
                      : session.profileImgUrl
                  }
                  alt="Profile"
                  className="mx-auto block rounded-full h-40 w-40 object-cover"
                />
              </div>
              <div className="col-span-12 text-center">
                <button
                  onClick={openModal}
                  className="btn glass bg-slate-300 w-40"
                >
                  Upload Image
                </button>
              </div>
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
          <div className="mt-5 lg:mt-0 col-span-9">
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
