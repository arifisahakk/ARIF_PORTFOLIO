"use client";
import { useEffect, useState } from "react";

export default function RoleRotator({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [roles.length]);
  return <span key={i} className="text-gradient">{roles[i]}</span>;
}
