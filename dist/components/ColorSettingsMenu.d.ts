import React from 'react';
interface ColorSettingsMenuProps {
    annotationGroupsUIDs: string[];
    defaultStyle: {
        opacity: number;
        color: number[];
        contourOnly: boolean;
    };
    onStyleChange: Function;
}
interface ColorSettingsMenuState {
    currentStyle: {
        opacity: number;
        color?: number[];
        contourOnly: boolean;
    };
}
/**
 * React component representing an Annotation Group.
 */
declare class ColorSettingsMenu extends React.Component<ColorSettingsMenuProps, ColorSettingsMenuState> {
    constructor(props: ColorSettingsMenuProps);
    handleColorChange: (color: number[]) => void;
    handleOpacityChange: (opacity: number | null) => void;
    handleShowOutlineOnly: (value: boolean) => void;
    getCurrentColor: () => string;
    updateCurrentStyle: ({ color, opacity, contourOnly }: {
        color?: number[] | undefined;
        opacity?: number | undefined;
        contourOnly?: boolean | undefined;
    }) => void;
    render(): React.ReactNode;
}
export default ColorSettingsMenu;
//# sourceMappingURL=ColorSettingsMenu.d.ts.map