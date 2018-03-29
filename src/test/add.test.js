const add = (a,b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`; 

test('should add 2 numbers', () => {
    const result = add(4,4);
    expect(result).toBe(8);
});

test('should return hello input', () => {
    expect(generateGreeting('Eivind')).toBe('Hello Eivind!');
});

test('should generate greeting with no input', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!');
})