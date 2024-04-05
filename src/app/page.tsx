"use client";
import { useEffect } from "react";
import runOneSignal from "../../helper/oneSignal";

export default function Home() {
  useEffect(() => {
    runOneSignal();
  });
  return (
    <div>
      <h1>Testing Notification</h1>
    </div>
  );
}
