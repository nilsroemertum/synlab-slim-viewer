/// <reference types="react" />
export interface AnnotationCategoryAndType {
    uid: string;
    type: Omit<Type, 'uids'>;
    category: Omit<Category, 'types'>;
}
export interface Type {
    CodeValue: string;
    CodeMeaning: string;
    CodingSchemeDesignator: string;
    uids: string[];
}
export interface Category {
    CodeValue: string;
    CodeMeaning: string;
    CodingSchemeDesignator: string;
    types: Type[];
}
declare const AnnotationCategoryList: ({ annotations, onChange, onStyleChange, defaultAnnotationStyles, checkedAnnotationUids }: {
    annotations: AnnotationCategoryAndType[];
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
export default AnnotationCategoryList;
//# sourceMappingURL=AnnotationCategoryList.d.ts.map