// app/CollapsibleLayout.tsx

'use client'

import { useState } from "react";
import { AppBar } from "@/components/appbar";
import { LeftPanel } from "@/components/sidepanels/left";
import { RightPanel } from "@/components/sidepanels/right";

export default function CollapsibleLayout({ children }: { children: React.ReactNode }) {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  return (
    <>
      <div className={`fixed w-full transition-all duration-300 z-10 ${isRightCollapsed ? '' : 'pr-64'} ${isLeftCollapsed ? '' : 'pl-56'}`}>
        <AppBar className="bg-[hsl(var(--background))]" isLeftCollapsed={isLeftCollapsed} isRightCollapsed={isRightCollapsed} setIsLeftCollapsed={setIsLeftCollapsed} setIsRightCollapsed={setIsRightCollapsed} />
      </div>
      <div className="flex h-screen">
        <div className={`fixed transition-all h-screen duration-300 ${isLeftCollapsed ? 'w-0' : 'w-56'} border-r-2`}>
          {!isLeftCollapsed && <LeftPanel />}
        </div>

        <div className={`flex-grow transition-all duration-300 ${isRightCollapsed ? '' : 'mr-64'} ${isLeftCollapsed ? '' : 'ml-56'}`}>
          <div className="mt-16 flex justify-center">
            {children}
          </div>
        </div>
        <div className={`fixed right-0 top-0 h-screen transition-transform duration-300 ${isRightCollapsed ? 'translate-x-full' : 'translate-x-0'} w-64 border-l-2`}>
          {!isRightCollapsed && <RightPanel />}
        </div>
      </div>
    </>
  );
}