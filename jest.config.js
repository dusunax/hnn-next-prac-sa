const nextJest = require("next/jest");
// next/jest 모듈을 가져와서 nextJest() 함수를 호출

// nextJest() 함수에 dir 옵션으로 프로젝트의 루트 경로 전달
const createJestConfig = nextJest({
  dir: "./",
});
// nextJest() 함수는 Next.js와 Jest를 함께 사용하기 위한 Jest 설정 객체를 생성합니다.

// customJestConfig 객체에는 사용자 정의 Jest 설정을 추가합니다
const customJestConfig = {
  // Jest가 실행되기 전에 실행할 스크립트 파일의 경로
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  // moduleNameMapper 항목에는 모듈 이름을 실제 경로로 매핑
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig() 함수에 사용자 정의 Jest 설정을 전달하여 최종 Jest 구성을 생성하고, module.exports를 통해 Jest 구성을 내보냅니다.
module.exports = createJestConfig(customJestConfig);
