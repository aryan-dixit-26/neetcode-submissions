class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = new Array(n).fill(1);
    }

    findParent(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.findParent(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u, v) {
        let pu = this.findParent(u);
        let pv = this.findParent(v);
        if (pu === pv) return false;
        if (this.size[pu] > this.size[pv]) {
            this.size[pu] += this.size[pv];
            this.parent[pv] = pu;
        } else {
            this.size[pv] += this.size[pu];
            this.parent[pu] = pv;
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
        let adj = Array.from({ length: n }, () => []);
        let visited = new Array(n).fill(0);
        let ccs = 0;
        for (let i = 0; i < edges.length; i++) {
            const [u, v] = edges[i];
            adj[u].push(v);
            adj[v].push(u);
        }

        const dfs = (node) => {
            let stack = [node];
            while (stack.length) {
                const n = stack.pop();
                for (let neighbour of adj[n]) {
                    if (!visited[neighbour]) {
                        stack.push(neighbour);
                        visited[neighbour] = true;
                    }
                }
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(i);
                ccs++;
            }
        }
        return ccs;
    }
}
