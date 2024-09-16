import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	
	static int ans;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		System.out.println(bfs(N, K));
	}
	static int bfs(int n, int k) {
		boolean[] visited = new boolean[100001];
		Queue<Node> q = new LinkedList<>();
		q.offer(new Node(n, 0));
		
		while (q.peek().x != k) {
			Node node = q.poll();
			int nx = node.x;
			int curCnt = node.cnt;
			
			if (nx < 0 || nx > 100000 || visited[nx]) continue;
			visited[nx] = true;
			q.offer(new Node(2*nx, curCnt));
			q.offer(new Node(nx-1, curCnt+1));
			q.offer(new Node(nx+1, curCnt+1));
		}
		return q.poll().cnt;
	}
	static class Node {
		int x, cnt;
		public Node(int x, int cnt) {
			this.x = x;
			this.cnt = cnt;
		}
	}
}
