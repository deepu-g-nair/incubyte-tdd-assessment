function add(input: string): number {
    if (input === "") return 0;

    let numbers: number[] = [];

    if (input.startsWith("//")) {
        const delimiter = input.charAt(2);
        numbers = input.slice(4).split(delimiter).map(Number);
    } else {
        numbers = input.split(/[\n,]+/).map(Number);
    }

    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(
            `negative numbers not allowed ${negativeNumbers.join(", ")}`
        );
    }

    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export { add };
