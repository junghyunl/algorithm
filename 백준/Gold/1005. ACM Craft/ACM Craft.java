import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder ans = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 0; tc < T; tc++) {
			st = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(st.nextToken());
			int K = Integer.parseInt(st.nextToken());
			
			int[] buildTime = new int[N+1];
			int[] totalTime = new int[N+1];
			st = new StringTokenizer(br.readLine());
			for (int i = 1; i < N+1; i++) {
				buildTime[i] = Integer.parseInt(st.nextToken());
			}
			
			ArrayList<Integer>[] adjList = new ArrayList[N+1];
			for (int i = 0; i < N+1; i++) {
				adjList[i] = new ArrayList<>();
			}
			
			int[] indegree = new int[N+1];
			for (int i = 0; i < K; i++) {
				st = new StringTokenizer(br.readLine());
				int from = Integer.parseInt(st.nextToken());
				int to = Integer.parseInt(st.nextToken());
				adjList[from].add(to);
				indegree[to]++;
			}
			
			int W =  Integer.parseInt(br.readLine());
			
			Queue<Integer> q = new ArrayDeque<>();
			for (int i = 1; i < N+1; i++) {
				if (indegree[i] == 0) {
					q.offer(i);
					totalTime[i] = buildTime[i];
				}
			}
			
			while (!q.isEmpty()) {
				int cur = q.poll();
				
				if (cur == W) {
					ans.append(totalTime[cur]).append("\n");
					break;
				}
				
				for (int next : adjList[cur]) {
					indegree[next]--;
					totalTime[next] = Math.max(totalTime[next], totalTime[cur] + buildTime[next]);
					if (indegree[next] == 0) q.offer(next);
				}
			}
		}
		System.out.println(ans);
	}
}