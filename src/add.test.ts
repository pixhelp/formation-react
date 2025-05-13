import { describe, it, expect } from "vitest";
import { filterEvenNumbers } from "./add";

describe('test filterEvenNumbers function', () => {
    it('should return an empty array if input is empty', () => {
        const result = filterEvenNumbers([]);
        expect(result).toEqual([]);
    });

    it('should return [2] if input is [1, 2]', () => {
        const result = filterEvenNumbers([1, 2]);
        expect(result).toEqual([2]);
    });
});