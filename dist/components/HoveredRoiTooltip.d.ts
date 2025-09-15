/// <reference types="react" />
declare const HoveredRoiTooltip: ({ xPosition, yPosition, rois }: {
    xPosition: number;
    yPosition: number;
    rois: Array<{
        index: number;
        roiUid: string;
        attributes: Array<{
            name: string;
            value: string;
        }>;
    }>;
}) => JSX.Element;
export default HoveredRoiTooltip;
//# sourceMappingURL=HoveredRoiTooltip.d.ts.map