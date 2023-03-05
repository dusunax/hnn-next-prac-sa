import { useEffect } from "react";

export default function ApiTest() {
  const NEXT_API_URL = process.env.NEXT_API_URL;

  useEffect(() => {
    if (!NEXT_API_URL) return;
    fetch(NEXT_API_URL + "/auth/signup", {
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
      // fetch(NEXT_API_URL + "/auth/login/google")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, [NEXT_API_URL]);

  return <>api-test</>;
}
