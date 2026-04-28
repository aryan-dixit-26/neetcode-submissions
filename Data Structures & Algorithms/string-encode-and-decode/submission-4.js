class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return '';
        let sizes = []
        for(const str of strs) {
            sizes.push(str.length);
        }
        const lenString = sizes.join(",") +"#";
        return lenString + strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '') return [];
        console.log(str)
        let sizes = [], ans = [], i = 0;
        let currSize ="";
        while(str[i] != "#"){
            if(str[i] === ",") {
                sizes.push(Number.parseInt(currSize));
                currSize = ""
            }
            else currSize += str[i]
            i++;
        }
        console.log(sizes)
        sizes.push(Number.parseInt(currSize));
        i++;
        for(const sz of sizes){
            ans.push(str.substr(i, sz));
            i += sz;
        }
        return ans;
    }
}
