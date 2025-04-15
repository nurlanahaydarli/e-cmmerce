export function ellipsisText(text: string, maxLength: number): string {
    if (typeof text !== "string") {
        text = String(text || "");
    }
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
}