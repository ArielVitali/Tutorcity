import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Spinner from "../components/Spinner/index.jsx";

const ImageUploadSection = ({ onImageSelected, onSubmit, isSubmitting }) => {
  const [previewSrc, setPreviewSrc] = useState(null); // Estado para la URL de previsualización

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      onImageSelected(file);

      // Generar la URL de previsualización
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    },
    [onImageSelected]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  return (
    <div className="px-8 py-4">
      <div
        {...getRootProps()}
        className="cursor-pointer border-2 border-dotted border-gray-400 rounded-md p-4 text-center"
      >
        <input {...getInputProps()} />
        <p className="text-gray-700 py-10">
          Drag and drop an image, or click to select one.
        </p>
      </div>
      {previewSrc && (
        <div className="mt-4 flex justify-center">
          <img src={previewSrc} alt="Preview" className="max-w-xs" />
        </div>
      )}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onSubmit()}
          className="w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default ImageUploadSection;
