
export function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
    return arr1.length === arr2.length && arr1.every((item, index) =>
        JSON.stringify(item) === JSON.stringify(arr2[index])
    );
}