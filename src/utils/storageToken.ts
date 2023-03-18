import Cookies from "js-cookie";

export function saveToken(appToken: string) {
  Cookies.set("appToken", appToken);
}

export function getToken(): string | undefined {
  const storedToken = Cookies.get("appToken");

  return storedToken;
}

export function removeToken() {
  Cookies.remove("appToken");
}
