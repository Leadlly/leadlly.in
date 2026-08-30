"use client";

import { useEffect, useState } from "react";

function nextSundayFive() {
  const now = new Date();
  const target = new Date(now);
  const days = (7 - now.getDay()) % 7;
  target.setDate(now.getDate() + days);
  target.setHours(17, 0, 0, 0);
  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }
  return target;
}

function formatCountdown(closeAt: Date) {
  const diff = closeAt.getTime() - Date.now();
  if (diff <= 0) {
    return "Registrations closed";
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  return `${d}d ${h}h ${m}m ${s}s left`;
}

export default function CohortCountdown() {
  const [label, setLabel] = useState("Closes Sunday, 5 PM");

  useEffect(() => {
    const closeAt = nextSundayFive();
    const tick = () => setLabel(formatCountdown(closeAt));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{label}</span>;
}
