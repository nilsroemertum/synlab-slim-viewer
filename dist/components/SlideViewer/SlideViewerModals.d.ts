import React from 'react';
interface SlideViewerModalsProps {
    isAnnotationModalVisible: boolean;
    onAnnotationConfigurationCompletion: () => void;
    onAnnotationConfigurationCancellation: () => void;
    isAnnotationOkDisabled: boolean;
    annotationConfigurations: React.ReactNode;
    isSelectedRoiModalVisible: boolean;
    onRoiSelectionCancellation: () => void;
    selectedRoiInformation: React.ReactNode;
    isGoToModalVisible: boolean;
    onSlidePositionSelection: () => void;
    onSlidePositionSelectionCancellation: () => void;
    validXCoordinateRange: number[];
    validYCoordinateRange: number[];
    isSelectedXCoordinateValid: boolean;
    isSelectedYCoordinateValid: boolean;
    isSelectedMagnificationValid: boolean;
    onXCoordinateSelection: (value: number | string | null) => void;
    onYCoordinateSelection: (value: number | string | null) => void;
    onMagnificationSelection: (value: number | string | null) => void;
    isReportModalVisible: boolean;
    onReportVerification: () => void;
    onReportCancellation: () => void;
    report: React.ReactNode;
}
/**
 * Component that renders all modals for the SlideViewer
 */
declare const SlideViewerModals: React.FC<SlideViewerModalsProps>;
export default SlideViewerModals;
//# sourceMappingURL=SlideViewerModals.d.ts.map