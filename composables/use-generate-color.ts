export function useGenerateColor(str: string) {
    if (!str) throw new Error("[useGenerateColor] No string provided");
    const num = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `hsl(${num % 360}, 20%, 50%)`;
}