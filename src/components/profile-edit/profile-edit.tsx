import SelectOptionalUserData from "../auth/select-optional-user-data/select-optional-user-data";

export default function ProfileEdit() {
  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="mb-4 font-bold">프로필 수정</h1>
        <p className="text-sm">MBTI가 바뀌셨나요?</p>
      </div>
      <div className="overflow-y-scroll scrollbar-hide">
        <SelectOptionalUserData />
      </div>
    </>
  );
}
