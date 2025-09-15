import React from 'react';
import { IconType } from 'react-icons';
interface ButtonProps {
    icon: IconType | React.ComponentType<Record<string, never>> | React.ForwardRefExoticComponent<object>;
    tooltip?: string;
    label?: string;
    onClick?: (options: React.SyntheticEvent) => void;
    isSelected?: boolean;
}
/**
 * React component for a button.
 */
declare class Button extends React.Component<ButtonProps, {}> {
    constructor(props: ButtonProps);
    handleClick(event: React.SyntheticEvent): void;
    render(): React.ReactNode;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map