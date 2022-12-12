// Chapter project


const multiplyTable = [];
const numValues = 6;
for (let i = 0; i < numValues; i++) {
    const temp = [];
    for (let j = 0; j < numValues; j++) {
        temp.push(i * j);
    }
  multiplyTable.push(temp);
}

console.table(multiplyTable);