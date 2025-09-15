import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
interface MappingListProps {
    mappings: dmv.mapping.ParameterMapping[];
    metadata: {
        [mappingUID: string]: dmv.metadata.ParametricMap[];
    };
    visibleMappingUIDs: Set<string>;
    defaultMappingStyles: {
        [mappingUID: string]: {
            opacity: number;
        };
    };
    onMappingVisibilityChange: ({ mappingUID, isVisible }: {
        mappingUID: string;
        isVisible: boolean;
    }) => void;
    onMappingStyleChange: ({ mappingUID, styleOptions }: {
        mappingUID: string;
        styleOptions: {
            opacity?: number;
        };
    }) => void;
}
/**
 * React component representing a list of Real World Value Mappings.
 */
declare class MappingList extends React.Component<MappingListProps, {}> {
    render(): React.ReactNode;
}
export default MappingList;
//# sourceMappingURL=MappingList.d.ts.map