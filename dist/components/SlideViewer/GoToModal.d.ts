import React from 'react';
interface GoToModalProps {
    isVisible: boolean;
    onOk: () => void;
    onCancel: () => void;
    validXCoordinateRange: number[];
    validYCoordinateRange: number[];
    isSelectedXCoordinateValid: boolean;
    isSelectedYCoordinateValid: boolean;
    isSelectedMagnificationValid: boolean;
    onXCoordinateSelection: (value: number | string | null) => void;
    onYCoordinateSelection: (value: number | string | null) => void;
    onMagnificationSelection: (value: number | string | null) => void;
}
/**
 * Modal component for navigating to specific slide positions
 */
declare const GoToModal: React.FC<GoToModalProps>;
export default GoToModal;
//# sourceMappingURL=GoToModal.d.ts.map