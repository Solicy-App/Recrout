export class Validator {
    public static required(value: string): boolean {
        return value.trim() === ''
    }

    public static minLength(value: string, minLength: number): boolean {
        return value.trim().length < minLength
    }

    public static maxLength(value: string, maxLength: number): boolean {
        return value.trim().length > maxLength
    }

    public static email(value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
}
