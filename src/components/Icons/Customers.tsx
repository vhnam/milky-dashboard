import React, {SVGAttributes} from 'react';

const Customers = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8 4a2 2 0 110-4 2 2 0 010 4zM2.667 12.667V7.333c0-.753.26-1.441.684-2H1.333C.597 5.333 0 5.93 0 6.667v4h1.333V14c0 .368.299.667.667.667h1.333A.667.667 0 004 14v-1.333H2.667zM9.333 16H6.667A.667.667 0 016 15.333v-4H4v-4a2 2 0 012-2h4a2 2 0 012 2v4h-2v4a.667.667 0 01-.667.667zM2.667 4.667A1.333 1.333 0 112.666 2a1.333 1.333 0 010 2.666zM13.333 12.667V7.333c0-.753-.26-1.441-.684-2h2.018c.736 0 1.333.597 1.333 1.334v4h-1.333V14a.667.667 0 01-.667.667h-1.333A.667.667 0 0112 14v-1.333h1.333zM13.333 4.667A1.333 1.333 0 1013.334 2a1.333 1.333 0 000 2.666z"
      fill="currentColor"
    />
  </svg>
);

export default Customers;
