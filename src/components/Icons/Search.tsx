import React, {SVGAttributes} from 'react';

const Search = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.414.006l.006-.006a1 1 0 00.006-1.414l-.006-.006zM5 11a6 6 0 1112 0 6 6 0 01-12 0z"
      fill="currentColor"
    />
  </svg>
);

export default Search;
