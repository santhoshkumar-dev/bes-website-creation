"use client";

import React from "react";
import { ScrollShadow } from "@heroui/react";
import { cn } from "@heroui/react";

/*
  This example requires some changes to your TailwindCSS config:

  ```
  // tailwind.config.js or tailwind.config.ts
  module.exports = {
    // ...
  theme: {
      extend: {
        keyframes: {
          "scrolling-banner": {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
          },
          "scrolling-banner-vertical": {
            from: {transform: "translateY(0)"},
            to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
          },
        },
        animation: {
          "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
          "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        },
      },
    },
  }
  ```
*/

interface ScrollingBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  isReverse?: boolean;
  isVertical?: boolean;
  gap?: string;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  duration?: number;
  children: React.ReactNode;
}

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className,
      isReverse,
      isVertical = false,
      gap = "1rem",
      showShadow = true,
      shouldPauseOnHover = true,
      duration = 40,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const shadowProps = {
      isEnabled: showShadow,
      offset: -20,
      size: 300,
      orientation: isVertical ? "vertical" : "horizontal",
      visibility: "both",
      ...props,
    };

    return (
      <ScrollShadow
        {...shadowProps}
        ref={ref}
        className={cn(
          "flex",
          {
            "w-full": !isVertical,
            "overflow-y-hidden": isVertical,
            "overflow-x-hidden": !isVertical,
            "max-h-[calc(100vh-200px)]": isVertical,
          },
          className
        )}
        style={{
          // @ts-ignore
          "--gap": gap,
          "--duration": `${duration}s`,
          ...style,
        }}
      >
        <div
          className={cn("flex w-max items-stretch", {
            "flex-col": isVertical,
            "h-full": isVertical,
            "animate-scrolling-banner": !isVertical,
            "animate-scrolling-banner-vertical": isVertical,
            "[animation-direction:reverse]": isReverse,
            "hover:[animation-play-state:paused]": shouldPauseOnHover,
          })}
          style={{ gap }}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child);
            }
            return child;
          })}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child);
            }
            return child;
          })}
        </div>
      </ScrollShadow>
    );
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
