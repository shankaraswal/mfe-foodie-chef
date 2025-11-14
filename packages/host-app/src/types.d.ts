declare module 'chef_mfe/ChefApp' {
    export const bootstrap: () => Promise<void>;
    export const mount: () => Promise<void>;
    export const unmount: () => Promise<void>;
}

declare module 'customer_mfe/CustomerApp' {
    export const bootstrap: () => Promise<void>;
    export const mount: () => Promise<void>;
    export const unmount: () => Promise<void>;
}

declare module 'booking_mfe/BookingApp' {
    export const bootstrap: () => Promise<void>;
    export const mount: () => Promise<void>;
    export const unmount: () => Promise<void>;
}