"use client";
import { Card } from "@nextui-org/card";
import LogoAnimation from "./Logo/Animated";

export default function ConstructionPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 bg-skull-pattern">
      <Card className="shadow-xl bg-white p-8 border border-gray-200 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-full ">
            <LogoAnimation className="invert m-auto" />
          </div>
          <h1 className="text-gray-700 font-bold text-3xl">
            🚧 Site on Standby 🚧
          </h1>
          <p className="text-gray-600">
            We&apos;re currently working on something awesome! Stay tuned for
            updates.
          </p>
          <div className="flex justify-center mt-4">
            <div className="spinner-border" />
          </div>
        </div>
      </Card>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
        .spinner-border {
          width: 40px;
          height: 40px;
          border: 4px solid transparent;
          border-top-color: #4caf50; /* Customize the color */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
