import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    
    static int INF = 50000001;
    static List<Node>[] adjList;
    static int[] sDist, gDist, hDist;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        int T = Integer.parseInt(br.readLine());
        for (int tc = 0; tc < T; tc++) {
            st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int M = Integer.parseInt(st.nextToken());
            int K = Integer.parseInt(st.nextToken());
            
            adjList = new ArrayList[N+1];
            for (int i = 0; i < N+1; i++) {
                adjList[i] = new ArrayList<>();
            }
            
            sDist = new int[N+1];
            gDist = new int[N+1];
            hDist = new int[N+1];
            Arrays.fill(sDist, INF);
            Arrays.fill(gDist, INF);
            Arrays.fill(hDist, INF);
            
            st = new StringTokenizer(br.readLine());
            int S = Integer.parseInt(st.nextToken());
            int G = Integer.parseInt(st.nextToken());
            int H = Integer.parseInt(st.nextToken());
            
            int visit = -1;
            for (int i = 0; i < M; i++) {
                st = new StringTokenizer(br.readLine());
                int a = Integer.parseInt(st.nextToken());
                int b = Integer.parseInt(st.nextToken());
                int d = Integer.parseInt(st.nextToken());
                adjList[a].add(new Node(b, d));
                adjList[b].add(new Node(a, d));
                if ((a == G && b == H) || (b == G && a == H)) visit = d;
            }
         
            dijkstra(S, sDist);
            dijkstra(G, gDist);
            dijkstra(H, hDist);
            
            StringBuilder ans = new StringBuilder();
            int[] arrives = new int[K];
            for (int i = 0; i < K; i++) {
                arrives[i] = Integer.parseInt(br.readLine());
            }
            Arrays.sort(arrives);
            for (int i = 0; i < K; i++) {
                int X = arrives[i];
                if (sDist[X] == INF) continue;
                else if ((sDist[G] == INF || hDist[X] == INF) && (sDist[H] == INF || gDist[X] == INF)) continue;
                else if (sDist[X] - visit == Math.min(sDist[G] + hDist[X], sDist[H] + gDist[X])) ans.append(X).append(" ");
            }
            

            System.out.println(ans);
            
        }
    }
    
    static void dijkstra(int start, int[] dist) {
        Queue<Node> pq = new PriorityQueue<>((a,b) -> a.weight-b.weight);
        pq.offer(new Node(start, 0));
        dist[start] = 0;
        
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            
            if (dist[cur.to] < cur.weight) continue;
            
            for (Node node : adjList[cur.to]) {
                if (dist[node.to] > cur.weight + node.weight) {
                    dist[node.to] = cur.weight + node.weight;
                    pq.offer(new Node(node.to, dist[node.to]));
                }
            }
        }
    }
    
    static class Node {
        int to, weight;

        public Node(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }
}