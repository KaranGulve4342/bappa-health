import React from 'react';
import { useTheme } from './../lib/theme-provider'; // Import the useTheme hook
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'; // Ensure you have these icons installed
import { Button } from '@/components/ui/button'; 
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from '@/components/ui/tooltip'; 

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className="rounded-full w-8 h-8 bg-background relative flex items-center justify-center"
            variant="outline"
            size="icon"
            onClick={handleClick}
          >
            <SunIcon
              className={`w-[1.2rem] h-[1.2rem] transition-transform duration-500 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
            />
            <MoonIcon
              className={`w-[1.2rem] h-[1.2rem] absolute transition-transform duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
            />
            <span className="sr-only">Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Switch Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
