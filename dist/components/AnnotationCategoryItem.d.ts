/// <reference types="react" />
import { Category } from './AnnotationCategoryList';
declare const AnnotationCategoryItem: ({ category, onChange, checkedAnnotationUids, onStyleChange, defaultAnnotationStyles, ...props }: {
    category: Category;
    onChange: Function;
    onStyleChange: Function;
    defaultAnnotationStyles: {
        [annotationUID: string]: {
            opacity: number;
            color: number[];
            contourOnly: boolean;
        };
    };
    checkedAnnotationUids: Set<string>;
}) => JSX.Element;
export default AnnotationCategoryItem;
//# sourceMappingURL=AnnotationCategoryItem.d.ts.map