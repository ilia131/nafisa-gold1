import React from 'react';
import { SVGProps } from 'react';

const MobileNumberIcons = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none" {...props}>
        <path d="M1.5 2.75C1.5 2.05921 2.05921 1.5 2.75 1.5H10.75C11.4408 1.5 12 2.05921 12 2.75V16.75C12 17.4408 11.4408 18 10.75 18H2.75C2.05921 18 1.5 17.4408 1.5 16.75V2.75ZM2.75 0C1.23079 0 0 1.23079 0 2.75V16.75C0 18.2692 1.23079 19.5 2.75 19.5H10.75C12.2692 19.5 13.5 18.2692 13.5 16.75V2.75C13.5 1.23079 12.2692 0 10.75 0H2.75ZM5.5 3C5.0858 3 4.75 3.33579 4.75 3.75C4.75 4.16421 5.0858 4.5 5.5 4.5H8C8.4142 4.5 8.75 4.16421 8.75 3.75C8.75 3.33579 8.4142 3 8 3H5.5Z" fill="#333333"/>
    </svg>
  )
);

MobileNumberIcons.displayName = 'MobileNumberIcons';

export default MobileNumberIcons;