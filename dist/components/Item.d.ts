import React from 'react';
import { Attribute, AttributeGroup } from './Description';
interface ItemProps {
    uid: string;
    identifier: string;
    attributes: Attribute[];
    groups?: AttributeGroup[];
    children?: React.ReactElement[];
    type?: string;
    hasLongValues?: boolean;
}
/**
 * React component for a list item that consists of a header element
 * containing an identifier and a body element containing a description list
 * of attributes rendered as name-value pairs.
 */
declare class Item extends React.Component<ItemProps, {}> {
    render(): React.ReactNode;
}
export default Item;
//# sourceMappingURL=Item.d.ts.map