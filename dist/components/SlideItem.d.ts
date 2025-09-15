import React from 'react';
import DicomWebManager from '../DicomWebManager';
import { Slide } from '../data/slides';
interface SlideItemProps {
    clients: {
        [key: string]: DicomWebManager;
    };
    slide: Slide;
}
interface SlideItemState {
    isLoading: boolean;
}
/**
 * React component representing a DICOM Series Information Entity that displays
 * common series-level attributes of contained DICOM Slide Microscopy images
 * as well as the OVERVIEW image (if available).
 * When selected a Slide Viewer instance is created for the display of the
 * contained images.
 */
declare class SlideItem extends React.Component<SlideItemProps, SlideItemState> {
    state: {
        isLoading: boolean;
    };
    private readonly overviewViewportRef;
    private overviewViewer?;
    constructor(props: SlideItemProps);
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default SlideItem;
//# sourceMappingURL=SlideItem.d.ts.map