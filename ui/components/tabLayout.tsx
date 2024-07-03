"use-client"
import React, { useState, useRef, useEffect } from 'react';

const tabs = ['Overview', 'Targets', 'Budget', 'Users', 'Files', 'Activity', 'Settings'];

interface TabLayoutProps {
  className?: string;
}

const TabLayout: React.FC<TabLayoutProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSliderPosition();
  }, [activeTab]);

  const updateSliderPosition = () => {
    const activeTabIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabsRef.current[activeTabIndex];
    if (activeTabElement && sliderRef.current) {
      sliderRef.current.style.width = `${activeTabElement.offsetWidth}px`;
      sliderRef.current.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;
    }
  };

  return (
    <div className={`relative hidden md:block ${className}`}>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            className={`mx-2 pb-1 text-sm  transition-colors duration-200 ${activeTab === tab ? 'text-[hsl(var(--foreground))] font-semibold' : 'text-[#949597] hover:text-gray-700 font-regular'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        ref={sliderRef}
        className={`absolute bottom-0 left-0 h-0.5 bg-[hsl(var(--foreground))] transition-all duration-300 ease-in-out ${className}`}
      />
    </div>
  );
};

export default TabLayout;