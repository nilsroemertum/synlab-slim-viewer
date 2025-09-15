import { RetryRequestSettings, DICOMwebClientRequestHookMetadata } from '../AppConfig';
type RequestHook = (request: XMLHttpRequest, metadata: DICOMwebClientRequestHookMetadata) => XMLHttpRequest;
/**
 * Returns a configured retry request hook function
 * that can be used to add retry functionality to XHR request.
 *
 * Default options:
 *   retries: 5
 *   factor: 3
 *   minTimeout: 1 * 1000
 *   maxTimeout: 60 * 1000
 *   randomize: true
 *
 * @param options
 * @param options.retires - Number of retries
 * @param options.factor - Factor
 * @param options.minTimeout - Min number of seconds to wait before next retry
 * @param options.maxTimeout - Max number of seconds to wait before next retry
 * @param options.randomize - Whether randomization should be applied
 * @param options.retryableStatusCodes HTTP status codes that can trigger a retry
 * @returns Configured retry request function
 */
export declare const getXHRRetryHook: (options?: RetryRequestSettings) => RequestHook;
export default getXHRRetryHook;
//# sourceMappingURL=xhrRetryHook.d.ts.map