import { randomNicknameService } from "@/services/user";

interface UseUser {
  getRandomNickname: (
    mbti: string
  ) => Promise<{ nickname: string } | undefined>;
}

export default function UseUser() {
  const getRandomNickname: UseUser["getRandomNickname"] = async (mbti) => {
    try {
      const response = await randomNicknameService(mbti);
      console.log(response);

      if ("nickname" in response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getRandomNickname,
  };
}
