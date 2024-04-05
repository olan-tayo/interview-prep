"use client";

import Head from "next/head";
import { useEffect } from "react";
import runOneSignal from "../../helper/oneSignal";

interface CustomWindow extends Window {
  OneSignal: any;
}

declare let window: CustomWindow;

export default function Home() {
  useEffect(() => {
    runOneSignal();
  });
  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
}
