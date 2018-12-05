/* eslint-disable no-param-reassign */

const PROXY_PREFIX = "/api/v1";

export default function targetToProxy(endpoints) {
  return Object.entries(endpoints).reduce((prev, [key, val]) => {
    if (typeof window !== "undefined") {
      const API_URL = window.location.origin;
      prev[key] = API_URL + PROXY_PREFIX + val;
    } else {
      prev[key] = `http://localhost:3000${PROXY_PREFIX}${val}`;
    }

    return prev;
  }, {});
}
