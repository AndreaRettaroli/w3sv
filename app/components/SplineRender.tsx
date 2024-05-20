"use client";
import Spline from "@splinetool/react-spline";

interface SplineRenderProps {
  scene: string;
  className?: string;
}

export default function SplineRender({
  scene,
  className = "animate-fade",
}: SplineRenderProps) {
  return <Spline className={className} scene={scene} />;
}
