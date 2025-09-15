import React from 'react';
import DicomWebManager from '../DicomWebManager';
import { Slide } from '../data/slides';
interface SlideListProps {
    metadata: Slide[];
    clients: {
        [key: string]: DicomWebManager;
    };
    selectedSeriesInstanceUID: string;
    onSeriesSelection: ({ seriesInstanceUID }: {
        seriesInstanceUID: string;
    }) => void;
}
interface SlideListState {
    selectedSeriesInstanceUID: string;
}
/**
 * React component representing a list of DICOM Series Information Entities.
 */
declare class SlideList extends React.Component<SlideListProps, SlideListState> {
    state: {
        selectedSeriesInstanceUID: string;
    };
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default SlideList;
//# sourceMappingURL=SlideList.d.ts.map