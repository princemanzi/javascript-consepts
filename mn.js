import { add } from './study.js';

console.log(add(3,4));

try {
    const obj = '{"name":"Alice","age":30}';
    const data = JSON.parse(obj)
    console.log(data)
} catch (error) {
    console.error("Failed to load JSON:", error)
}