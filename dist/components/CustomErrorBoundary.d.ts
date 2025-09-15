/// <reference types="react" />
/**
 * React's error boundary component to catch errors during rendering phase
 * FallbackComponent is rendered in the event of an error
 *
 * @param context - name of the react component
 * @param children - the component wrapped inside the Custom Error Boundary
 */
declare const CustomErrorBoundary: ({ context, children }: {
    context: string;
    children: JSX.Element;
}) => JSX.Element;
export default CustomErrorBoundary;
//# sourceMappingURL=CustomErrorBoundary.d.ts.map