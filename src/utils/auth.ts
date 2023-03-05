export function saveToken(appToken: string) {
  localStorage.setItem("appToken", appToken);
}

export function removeToken() {
  localStorage.removeItem("appToken");
}
