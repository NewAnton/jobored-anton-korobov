import { useEffect } from "react";
import useSWR from "swr";

import { IError, ISignInData, ISignInResponse } from "@/types/apiSuperjobTypes";
import { setToLocalStorage } from "@/utils/setToLocalStorage";
import { getFromLocalStorage } from "@/utils/getFromLocalStorage";

const refreshToken = (apiURL: string, token: string) =>
  fetch(apiURL, { method: "GET", headers: { "x-secret-key": token } }).then(
    (res) => res.json()
  );

export const useRefreshToken = () => {
  const logInData = { ...(getFromLocalStorage("SignInData") as ISignInData) };

  const url = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/refresh_token/?refresh_token=${logInData.refresh_token}&client_id=${logInData.client_id}&client_secret=${logInData.client_secret}`;

  const { data, error } = useSWR<ISignInResponse, IError>(
    logInData.refresh_token ? [url, logInData.token] : null,
    //@ts-ignore
    ([url, token]) => refreshToken(url, token)
  );

  useEffect(() => {
    if (data) {
      console.log("token has been updated: ", data);
      setToLocalStorage(
        "logInData",
        JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          client_id: logInData.client_id.toString(),
          client_secret: logInData.client_secret,
          token: logInData.token,
        })
      );
    } else if (error) {
      console.log(error.message);
    }
  }, [
    data,
    error,
    logInData.client_id,
    logInData.client_secret,
    logInData.token,
  ]);

  return [data, error] as const;
};
