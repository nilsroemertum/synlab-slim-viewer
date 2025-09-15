/**
 * Consumer must implement:
 * this.listeners = {}
 * this.EVENTS = { "EVENT_KEY": "EVENT_VALUE" }
 */
declare const pubSubInterface: {
    subscribe: typeof subscribe;
    _broadcastEvent: typeof _broadcastEvent;
    _unsubscribe: typeof _unsubscribe;
    _isValidEvent: typeof _isValidEvent;
};
export default pubSubInterface;
/**
 * Subscribe to updates.
 *
 * @param {string} eventName The name of the event
 * @param {Function} callback Events callback
 * @return {Object} Observable object with actions
 */
declare function subscribe(this: PubSubService, eventName: string, callback: Function): {
    unsubscribe: () => any;
};
/**
 * Unsubscribe to measurement updates.
 *
 * @param {string} eventName The name of the event
 * @param {string} listenerId The listeners id
 * @return void
 */
declare function _unsubscribe(this: PubSubService, eventName: string, listenerId: string): void;
/**
 * Check if a given event is valid.
 *
 * @param {string} eventName The name of the event
 * @return {boolean} Event name validation
 */
declare function _isValidEvent(this: PubSubService, eventName: string): boolean;
/**
 * Broadcasts changes.
 *
 * @param {string} eventName - The event name
 * @param {func} callbackProps - Properties to pass callback
 * @return void
 */
declare function _broadcastEvent(this: PubSubService, eventName: string, callbackProps: any): void;
/** Export a PubSubService class to be used instead of the individual items */
export declare class PubSubService {
    EVENTS: any;
    subscribe: (eventName: string, callback: Function) => {
        unsubscribe: () => any;
    };
    _broadcastEvent: (eventName: string, callbackProps: any) => void;
    _unsubscribe: (eventName: string, listenerId: string) => void;
    _isValidEvent: (eventName: string) => boolean;
    listeners: {
        [key: string]: Array<{
            id: string;
            callback: Function;
        }>;
    };
    unsubscriptions: any[];
    constructor(EVENTS: Record<string, string>);
    reset(): void;
    /**
     * Creates an event that records whether or not someone
     * has consumed it.  Call eventData.consume() to consume the event.
     * Check eventData.isConsumed to see if it is consumed or not.
     * @param props - to include in the event
     */
    protected createConsumableEvent(props: Record<string, any>): Record<string, any>;
}
//# sourceMappingURL=pubSubServiceInterface.d.ts.map