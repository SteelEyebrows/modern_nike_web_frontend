import * as React from 'react';
import './MainTemplate.scss';

const PageTemplate = ({children,footer,header}) =>(
    <div className="page-template">
        {header}
        <main>{children}</main>
        {footer}
    </div>
);

export default PageTemplate;