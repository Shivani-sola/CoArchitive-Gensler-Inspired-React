import React, { useState, useEffect, useCallback } from "react";

const read = () => {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw.split("?")[0] || "home";
};

export function useRoute() {
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(to) {
  window.location.hash = "/" + to;
}

export function Link({ to, children, className, onClick, ...rest }) {
  const handle = useCallback(
    (e) => {
      e.preventDefault();
      onClick?.();
      if (read() === to) window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate(to);
    },
    [to, onClick]
  );

  return (
    <a href={"#/" + to} className={className} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
