import React from 'react';
import DicomWebManager from '../DicomWebManager';
import { Slide } from '../data/slides';
import * as dmv from 'dicom-microscopy-viewer';
interface ValidationResult {
    isValid: boolean;
    message?: string;
    type: 'warning' | 'error' | 'info';
}
interface ValidationContextType {
    runValidations: (options: {
        dialog?: boolean;
        context: {
            annotationGroup?: dmv.annotation.AnnotationGroup;
            slide?: Slide;
        };
    }) => ValidationResult;
}
interface ValidationProviderProps {
    children: React.ReactNode;
    clients?: {
        [key: string]: DicomWebManager;
    };
    studyInstanceUID?: string;
}
/**
 * ValidationProvider - Provides validation context for running validations and showing dialogs
 *
 * Usage:
 * 1. Wrap your component tree with ValidationProvider
 * 2. Use useValidation hook to access validation functions
 *
 * Example:
 * ```tsx
 * // Simple usage - just call runValidations with options
 * const { runValidations } = useValidation()
 *
 * const handleAction = () => {
 *   const result = runValidations({
 *     dialog: true,
 *     context: { annotationGroup, slide }
 *   })
 *   if (result.isValid) {
 *     // proceed with action
 *   }
 * }
 * ```
 */
export declare const ValidationProvider: React.FC<ValidationProviderProps>;
export declare const useValidation: () => ValidationContextType;
export declare const runValidations: (options: {
    dialog?: boolean;
    context: {
        annotationGroup?: dmv.annotation.AnnotationGroup;
        slide?: Slide;
    };
}) => ValidationResult;
export {};
//# sourceMappingURL=ValidationContext.d.ts.map