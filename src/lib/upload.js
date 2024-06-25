import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
  const date = new Date();
  const storageRef = ref(storage, `images/${date + file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.error("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload error:", error);
        if (error.serverResponse) {
          console.error("Server response:", error.serverResponse);
        }
        reject(`Something went wrong! ${error.code}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        }).catch(error => {
          console.error("Failed to get download URL:", error);
          if (error.serverResponse) {
            console.error("Server response:", error.serverResponse);
          }
          reject("Failed to get download URL");
        });
      }
    );
  });
};

export default upload;
