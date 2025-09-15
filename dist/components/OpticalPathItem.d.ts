import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface OpticalPathItemProps {
    opticalPath: dmv.opticalPath.OpticalPath;
    metadata: dmv.metadata.VLWholeSlideMicroscopyImage[];
    isVisible: boolean;
    isRemovable: boolean;
    defaultStyle: {
        opacity: number;
        color?: number[];
        paletteColorLookupTable?: dmv.color.PaletteColorLookupTable;
        limitValues?: number[];
    };
    onVisibilityChange: ({ opticalPathIdentifier, isVisible }: {
        opticalPathIdentifier: string;
        isVisible: boolean;
    }) => void;
    onStyleChange: ({ opticalPathIdentifier, styleOptions }: {
        opticalPathIdentifier: string;
        styleOptions: {
            opacity?: number;
            color?: number[];
            paletteColorLookupTable?: dmv.color.PaletteColorLookupTable;
            limitValues?: number[];
        };
    }) => void;
    onRemoval: (opticalPathIdentifier: string) => void;
}
interface OpticalPathItemState {
    isVisible: boolean;
    currentStyle: {
        opacity: number;
        color?: number[];
        paletteColorLookupTable?: dmv.color.PaletteColorLookupTable;
        limitValues?: number[];
    };
}
/**
 * React component representing an optical path of a
 * multi-channel acquistion with control of visualization parameters.
 */
declare class OpticalPathItem extends React.Component<OpticalPathItemProps, OpticalPathItemState> {
    constructor(props: OpticalPathItemProps);
    componentDidUpdate(previousProps: OpticalPathItemProps, previousState: OpticalPathItemState): void;
    handleVisibilityChange: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
    handleOpacityChange: (value: number | null) => void;
    handleColorChange: (color: number[]) => void;
    getCurrentColors: () => string[];
    handleLowerLimitChange: (value: number | null) => void;
    handleUpperLimitChange: (value: number | null) => void;
    handleLimitChange: (values: number[]) => void;
    handleRemoval: () => void;
    render(): React.ReactNode;
}
export default OpticalPathItem;
//# sourceMappingURL=OpticalPathItem.d.ts.map