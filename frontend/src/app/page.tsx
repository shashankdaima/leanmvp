"use client";

import { AppBar } from "@/components/appbar";
import { Search } from "@/components/search";
import { LeftPanel } from "@/components/sidepanels/left";
import { RightPanel } from "@/components/sidepanels/right";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

export default function Home() {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);


  const toggleRightCollapse = () => {
    setIsRightCollapsed(!isRightCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`transition-all duration-300 ${isLeftCollapsed ? 'w-0' : 'w-60'} border-r-2`}>
        {!isLeftCollapsed && <LeftPanel />}
      </div>
      <div className={`flex-grow  transition-all duration-300  ${isRightCollapsed ? '' : 'mr-60'}`}>
        <AppBar isLeftCollapsed={isLeftCollapsed} isRightCollapsed={isRightCollapsed} setIsLeftCollapsed={setIsLeftCollapsed} setIsRightCollapsed={setIsRightCollapsed} />
        <div className="flex justify-between">

          <button className="m-4 p-2 bg-blue-500 text-white rounded" onClick={toggleRightCollapse}>
            {isRightCollapsed ? 'Expand Right' : 'Collapse Right'}
          </button>
        </div>
      </div>
      <div className={`fixed right-0 top-0 h-full transition-transform duration-300 ${isRightCollapsed ? 'translate-x-full' : 'translate-x-0'} w-60 border-l-2 `}>
        {!isRightCollapsed && <RightPanel />}
      </div>
    </div>
  );
}
