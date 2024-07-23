const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//  /dev/stdin

const n = +input[0];
let treeD = {};

for (let i = 0; i < n; i++) {
    const [a, b, c] = input[1+i].split(' ').map(a => a.trim());
    treeD[a] = [b,c];
}

function preorder(node) {
    if (node === '.') return '';
    return node + preorder(treeD[node][0]) + preorder(treeD[node][1]);
} 

function inorder(node) {
    if (node === '.') return '';
    return inorder(treeD[node][0]) + node + inorder(treeD[node][1]);
} 

function postorder(node) {
    if (node === '.') return '';
    return postorder(treeD[node][0]) + postorder(treeD[node][1]) + node;
} 

console.log(preorder('A'));
console.log(inorder('A'));
console.log(postorder('A'));