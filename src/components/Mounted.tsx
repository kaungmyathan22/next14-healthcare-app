"use client";
import React, { useEffect, useState } from "react";

const Mounted = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {};
  }, []);

  return isMounted ? children : null;
};

export default Mounted;
