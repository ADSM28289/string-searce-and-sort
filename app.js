const books = [
    '1. A Smarter Way to Learn JavaScript',
    '2. Eloquent JavaScript: A Modern Introduction to Programming',
    '3. JavaScript & JQuery: Interactive Front-End Web Development',
    '4. JavaScript: The Good Parts',
    '5. Learn JavaScript VISUALLY',
    '6. JavaScript: The Definitive Guide',
    '7. Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    '8. JavaScript for Kids: A Playful Introduction to Programming',
    '9. Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    '10. High-Performance Browser Networking'
];

const searce = 'JAVASCRIPT';
const outPut = [];
for (const book of books) {
    if (book.toLowerCase().indexOf(searce.toLowerCase()) != -1) {
        outPut.push(book);
    }
}
console.log(outPut)

const x = [
    2, 3, 234, 32, 2, 24, 24, 2, 52, 1, 45, 63, 63, 35, 345, 35
]
const y = x.sort(function (a, b) {
    return a - b;
});
console.log(y)
