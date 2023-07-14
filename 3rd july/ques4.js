function reverseString(s) {
  const words = s.split(" ");

  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return reversedWords.join(" ");
}

const s = "Let's take LeetCode contest";
const result = reverseString(s);
console.log(result);
