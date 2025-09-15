import React from 'react';
import * as dmv from 'dicom-microscopy-viewer';
import { AnnotationCategoryAndType } from '../../types/annotations';
import { StyleOptions } from './types';
interface SlideViewerSidebarProps {
    labelViewportRef: React.RefObject<HTMLDivElement>;
    labelViewer?: dmv.viewer.LabelImageViewer;
    openSubMenuItems: string[];
    specimenMenu: React.ReactNode;
    iccProfilesMenu: React.ReactNode;
    segmentationInterpolationMenu: React.ReactNode;
    equipmentMenu: React.ReactNode;
    opticalPathMenu: React.ReactNode;
    presentationStateMenu: React.ReactNode;
    annotationMenuItems: React.ReactNode;
    annotationGroupMenu: React.ReactNode;
    segmentationMenu: React.ReactNode;
    parametricMapMenu: React.ReactNode;
    annotations: AnnotationCategoryAndType[];
    visibleRoiUIDs: Set<string>;
    onAnnotationVisibilityChange: ({ roiUID, isVisible }: {
        roiUID: string;
        isVisible: boolean;
    }) => void;
    onRoiStyleChange: ({ uid, styleOptions }: {
        uid: string;
        styleOptions: StyleOptions;
    }) => void;
    defaultAnnotationStyles: {
        [annotationUID: string]: StyleOptions;
    };
}
/**
 * Sidebar component for the SlideViewer containing all menu items
 */
declare const SlideViewerSidebar: React.FC<SlideViewerSidebarProps>;
export default SlideViewerSidebar;
//# sourceMappingURL=SlideViewerSidebar.d.ts.map