// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

// let k = 3;
// let s = "abdcbabcdbba";
// let [longest, temp] = ["", ""]

// for(let letter of s){
//     if(new Set(temp + letter).size > k){
//         while(new Set(temp).size >= k){
//             temp = temp.slice(1);
//         }
//     }
//     temp += letter;
//     (temp.length > longest.length) && (longest = temp)
// }

// console.log(longest)

function longestPiece(s, k){
    let longest = s.slice(0,k);
    for (let i = 0; i <= s.length; i++) {
        for (let j = s.length; j >= i+k; j--) {
            longest = (new Set(s.slice(i,j)).size == k 
                    && s.slice(i,j).length > longest.length) 
                    ? s.slice(i,j) : longest;
        }
    }
    console.log("Longest: ", longest);
}

longestPiece("abcba", 2); // Longest : bcb
longestPiece("abcba", 3); // Longest : abcba
longestPiece("abbccaabba", 2); // Longest : aabba
