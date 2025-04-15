export function DEV_LOGGER(...args: string[]): void {
    if (process.env.NODE_ENV === "development") {
        console.log(...args);
    }
}
