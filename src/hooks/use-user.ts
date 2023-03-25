import { updateUserAvatarService } from "@/services/user";

export default function useUser() {
  const userAvatarUpdate = (newFile: File) => {
    try {
      if (newFile) {
        const formData = new FormData();
        formData.append("avatar", newFile);

        updateUserAvatarService(formData);
      }
    } catch (err) {
      console.log(err);
      alert("이미지를 업로드할 수 없습니다.");
    }
  };

  return { userAvatarUpdate };
}
