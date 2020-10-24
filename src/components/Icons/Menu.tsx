import React, {SVGAttributes} from 'react';

const Menu = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
    <path
      d="M4 27h28v-3H4v3zm0-8h28v-3H4v3zM4 8v3h28V8H4z"
      fill="currentColor"
    />
  </svg>
);

export default Menu;
