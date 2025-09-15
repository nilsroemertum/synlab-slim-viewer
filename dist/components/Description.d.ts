import React from 'react';
export interface Attribute {
    name: string;
    value: any;
}
export interface AttributeGroup {
    name: string;
    attributes: Attribute[];
}
interface DescriptionProps {
    header?: string;
    icon?: any;
    attributes: Attribute[];
    selectable?: boolean;
    hasLongValues?: boolean;
    methods?: React.ReactNode[];
    children?: React.ReactNode;
}
/**
 * React component for a description consisting of a header containing a
 * header and a body containing a list of name-value pairs.
 */
declare class Description extends React.Component<DescriptionProps, {}> {
    render(): React.ReactNode;
}
export default Description;
//# sourceMappingURL=Description.d.ts.map