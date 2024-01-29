import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

/**
 * check mobile device in server
 */
export const isMobileDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server",
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  // console.debug(ua);
  const device = new UAParser(ua || "").getDevice();

  return device.type === "mobile";
};

export const screenSM = 576;

/**
 * check mobile device in browser
 */
export const isMobileScreen = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.innerWidth <= screenSM;
};
