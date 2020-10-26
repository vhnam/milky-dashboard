import React, {SVGAttributes} from 'react';

const Plus = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
    <path d="M28 16H16v12h-4V16H0v-4h12V0h4v12h12v4z" fill="currentColor" />
  </svg>
);

export default Plus;
