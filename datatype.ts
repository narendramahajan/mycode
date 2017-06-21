let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

Tuple
Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

/*Enum Type*/
enum Color {Red, Green, Blue}
let c: Color = Color.Green;


enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

Or, even manually set all the values in the enum:

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;


/* Void Data Type */
Void
void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    alert("This is my warning message");
}

