function countOccurrences(INPUT, QUERY) {
  const occurrences = [];

  for (let queryWord of QUERY) {
      let count = 0;
      for (let inputWord of INPUT) {
          if (queryWord === inputWord) {
              count++;
          }
      }
      occurrences.push(count);
  }

  return occurrences;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(countOccurrences(INPUT, QUERY)); // Output: [1, 0, 2]
