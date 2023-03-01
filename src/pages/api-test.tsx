import { useEffect } from "react";

export default function ApiTest() {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;

  useEffect(() => {
    if (!NEXT_PUBLIC_API) return;
    fetch(NEXT_PUBLIC_API + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-control-allow-credentials": "true",
        "Access-Control-Allow-Origin": "true",
      },
      body: JSON.stringify({
        email: "example2@gmail.com",
        password: "password123",
      }),
    })
      // fetch(NEXT_PUBLIC_API + "/auth/login/google")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, [NEXT_PUBLIC_API]);

  return <>api-test</>;
}
