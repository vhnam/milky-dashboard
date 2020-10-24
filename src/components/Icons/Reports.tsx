import React, {SVGAttributes} from 'react';

const Reports = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M10 0H1.333a.667.667 0 00-.666.667v14.666c0 .368.298.667.666.667h13.334a.667.667 0 00.666-.667v-10h-4.666A.667.667 0 0110 4.667V0zM3.333 11.333h9.334v1.334H3.333v-1.334zm0-3.333h9.334v1.333H3.333V8zm4-2h-4V4.667h4V6z"
      fill="currentColor"
    />
    <path d="M14.943 4h-3.61V.39L14.943 4z" fill="currentColor" />
  </svg>
);

export default Reports;
