class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length: n}, () =>[]);
        const visited = new Array(n);
        let connectedComponents =0;

        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        const bfs = (node) => {
            const queue = [node];
            while(queue.length){
                const len = queue.length;
                for(let i = 0; i < len; i++){
                    const n = queue.shift();
                    for(let neighbour of adj[n]){
                        if(!visited[neighbour]){
                            queue.push(neighbour);
                            visited[neighbour] = true;
                        }
                    }
                }
            }
        }

        for(let node = 0; node < n;node++){
            if(!visited[node]){
                visited[node] = true;
                bfs(node);
                connectedComponents++;
            }
        }
        return connectedComponents;
    }
}
