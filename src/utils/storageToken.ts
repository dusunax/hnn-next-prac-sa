import Cookies from "js-cookie";

export function saveToken(appToken: string) {
  Cookies.set("appToken", JSON.stringify(appToken));
}

export function getToken(): string | undefined {
  return Cookies.get("appToken");
}

export function removeToken() {
  Cookies.remove("appToken");
}
