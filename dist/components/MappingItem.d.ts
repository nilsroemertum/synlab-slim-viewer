import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface MappingItemProps {
    mapping: dmv.mapping.ParameterMapping;
    metadata: dmv.metadata.ParametricMap[];
    isVisible: boolean;
    defaultStyle: {
        opacity: number;
    };
    onVisibilityChange: ({ mappingUID, isVisible }: {
        mappingUID: string;
        isVisible: boolean;
    }) => void;
    onStyleChange: ({ mappingUID, styleOptions }: {
        mappingUID: string;
        styleOptions: {
            opacity?: number;
        };
    }) => void;
}
interface MappingItemState {
    isVisible: boolean;
    currentStyle: {
        opacity: number;
    };
}
/**
 * React component representing a Real World Value Mapping.
 */
declare class MappingItem extends React.Component<MappingItemProps, MappingItemState> {
    constructor(props: MappingItemProps);
    handleVisibilityChange: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
    handleOpacityChange: (opacity: number | null) => void;
    render(): React.ReactNode;
}
export default MappingItem;
//# sourceMappingURL=MappingItem.d.ts.map