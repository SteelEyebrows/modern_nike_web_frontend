import * as React from 'react';
import {Template} from './_style';

const PageTemplate = ({children,footer,header}) =>(
    <Template>
        {header}
        <main>{children}</main>
        {footer}
    </Template>
);

export default PageTemplate;