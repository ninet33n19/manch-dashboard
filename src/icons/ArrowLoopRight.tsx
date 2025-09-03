import React, { forwardRef, SVGProps } from "react";

interface CustomForwardIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

const ArrowLoopRight = forwardRef<SVGSVGElement, CustomForwardIconProps>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M21.39 15.09L17.05 19.43c-.14.14-.32.22-.51.22s-.38-.08-.51-.22c-.28-.28-.28-.74 0-1.02l3.1-3.1H12.19c-2.5 0-4.89-1-6.65-2.76S2.78 8.39 2.79 5.89c0-.28.23-.51.51-.51s.51.23.51.51c0 2.22.9 4.34 2.39 5.84s3.61 2.39 5.84 2.39h6.94l-3.1-3.1c-.28-.28-.28-.74 0-1.02s.74-.28 1.02 0l4.34 4.34c.1.1.15.22.15.35s-.05.25-.15.35z"
        fill={color}
        stroke="none"
      />
    </svg>
  ),
);

ArrowLoopRight.displayName = "ArrowLoopRight";

export default ArrowLoopRight;
