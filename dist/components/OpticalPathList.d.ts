import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface OpticalPathListProps {
    opticalPaths: dmv.opticalPath.OpticalPath[];
    metadata: {
        [opticalPathIdentifier: string]: dmv.metadata.VLWholeSlideMicroscopyImage[];
    };
    visibleOpticalPathIdentifiers: Set<string>;
    activeOpticalPathIdentifiers: Set<string>;
    defaultOpticalPathStyles: {
        [opticalPathIdentifier: string]: {
            opacity: number;
            color?: number[];
            limitValues?: number[];
            paletteColorLookupTable?: dmv.color.PaletteColorLookupTable;
        };
    };
    onOpticalPathVisibilityChange: ({ opticalPathIdentifier, isVisible }: {
        opticalPathIdentifier: string;
        isVisible: boolean;
    }) => void;
    onOpticalPathStyleChange: ({ opticalPathIdentifier, styleOptions }: {
        opticalPathIdentifier: string;
        styleOptions: {
            opacity?: number;
            color?: number[];
            limitValues?: number[];
        };
    }) => void;
    onOpticalPathActivityChange: ({ opticalPathIdentifier, isActive }: {
        opticalPathIdentifier: string;
        isActive: boolean;
    }) => void;
    selectedPresentationStateUID?: string;
}
interface OpticalPathListState {
    selectedOpticalPathIdentifier?: string;
}
/**
 * React component representing a list of optical paths.
 */
declare class OpticalPathList extends React.Component<OpticalPathListProps, OpticalPathListState> {
    state: {
        selectedOpticalPathIdentifier: undefined;
    };
    constructor(props: OpticalPathListProps);
    /**
     * Handler that gets called when an optical path should be removed.
     */
    handleItemRemoval(opticalPathIdentifier: string): void;
    /**
     * Handler that gets called when the selection of an optical path should change.
     */
    handleItemSelectionChange(value: string): void;
    /**
     * Handler that gets called when an optical path should be added.
     */
    handleItemAddition(): void;
    render(): React.ReactNode;
}
export default OpticalPathList;
//# sourceMappingURL=OpticalPathList.d.ts.map