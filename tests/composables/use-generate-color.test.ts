// @vitest-environment nuxt
import {test, describe, expect} from 'vitest'
import {useGenerateColor} from '~/composables/use-generate-color'

describe('useGenerateColor', () => {

    test('should return a string', () => {
        expect(typeof useGenerateColor('John Doe')).toBe('string');
    });

    test('should return a color', () => {
        expect(useGenerateColor('John Doe')).toBe('hsl(351, 20%, 50%)');
    });

    test('should throw an error if no string is provided', () => {
        expect(() => useGenerateColor('')).toThrowError();
    });

    test('should be a function', () => {
        expect(typeof useGenerateColor).toBe('function');
    });

})