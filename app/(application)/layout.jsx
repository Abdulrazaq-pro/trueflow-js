// app/(application)/layout.jsx
"use client";

// import { useRouter } from "next/navigation";
import BottomNavigation from "../components/BottomNavigation";

// app/(application)/layout.tsx
// "use client";

export default function ApplicationLayout({ children }) {
  return (
    <div className="min-h-screen relative">
      {/* Main content with bottom padding to prevent overlap */}
      <div className="pb-32">
        {children}
      </div>
      
      {/* Fixed bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <BottomNavigation />
      </div>
    </div>
  );
}