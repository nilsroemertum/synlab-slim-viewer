/**
 * Class to enable implementation of publish/subscribe pattern
 * @class
 * @classdesc Enables publishing/subscribing
 */
export default class PubSub {
    /**
     * Adds a subscription callback to the provided event name
     * @param {string} eventName Event name that will trigger the callback
     * @param {Function} callback Function to be executed when event is published
     * @returns {void}
     */
    subscribe(eventName: string, callback: Function): void;
    /**
     * Removes a subscription callback for the provided event name
     * @param {string} eventName Event name for the registerd callback
     * @param {Function} [callback] Function to have its subscription removed
     * @returns {void}
     */
    unsubscribe(eventName: string, callback?: Function | undefined): void;
    /**
     * Trigger all registered subscription callbacks for a specific event name
     * @param {String} eventName Event name to trigger subscriptions from
     * @param {any} [payload] Payload that will be passed to the callback fuction
     * @returns {void}
     */
    publish(eventName: string, ...payload?: any): void;
    /**
     * Cleares all subscriptions for current instance
     * @returns {void}
     */
    unsubscribeFromAll(): void;
    [_subscriptions]: {};
    [_lastSubscriptionId]: number;
}
declare const _subscriptions: unique symbol;
declare const _lastSubscriptionId: unique symbol;
export {};
//# sourceMappingURL=PubSub.d.ts.map