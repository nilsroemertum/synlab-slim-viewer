export namespace NotificationMiddlewareEvents {
    const OnError: string;
    const OnWarning: string;
}
export namespace NotificationMiddlewareContext {
    const DICOMWEB: string;
    const DMV: string;
    const DCMJS: string;
    const SLIM: string;
    const AUTH: string;
}
declare const _default: NotificationMiddleware;
export default _default;
declare class NotificationMiddleware extends PubSub {
    /**
     * Error handling middleware function
     *
     * @param source - source of error - dicomweb-client, dmv, dcmjs or slim itself
     * @param error - error object
     */
    onError(source: any, error: any): any;
}
import PubSub from "../utils/PubSub";
//# sourceMappingURL=NotificationMiddleware.d.ts.map