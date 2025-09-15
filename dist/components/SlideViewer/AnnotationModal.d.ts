import React from 'react';
interface AnnotationModalProps {
    isVisible: boolean;
    onOk: () => void;
    onCancel: () => void;
    isOkDisabled: boolean;
    children: React.ReactNode;
}
/**
 * Modal component for configuring annotations
 */
declare const AnnotationModal: React.FC<AnnotationModalProps>;
export default AnnotationModal;
//# sourceMappingURL=AnnotationModal.d.ts.map