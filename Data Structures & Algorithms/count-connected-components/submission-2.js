class DSU  {
    constructor(n){
        this.parent = Array.from({length:n}, (_,i)=>i)
        this.size = new Array(n).fill(1);
    }

    findParent(node){
        if(this.parent[node] !== node){
            this.parent[node] = this.findParent(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u,v){
        let pu = this.findParent(u);
        let pv = this.findParent(v);
        if(pu === pv) return false;
        if(this.size[pu] > this.size[pv]){
            this.size[pu]+= this.size[pv];
            this.parent[pv] = pu;
        }else{
            this.size[pv]+= this.size[pu];
            this.parent[pu] = pv
        }
        return true;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const dsu = new DSU(n);
        let connectedComponents = n;
        for(let [v,u] of edges){
            if(dsu.union(v,u)){
                connectedComponents--;
            }
        }
        return connectedComponents;
    }
}
