import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, start, maxDepth, ans;
	static Node[] adjList;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		for (int tc = 1; tc <= 10; tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			start = Integer.parseInt(st.nextToken());
			adjList = new Node[101];
			maxDepth = 0; ans = 0;
			
			st = new StringTokenizer(br.readLine());
			for (int i = 0; i < N/2; i++) {
				int from = Integer.parseInt(st.nextToken());
				int to = Integer.parseInt(st.nextToken());
				adjList[from] = new Node(to, adjList[from]);
			}
			bfs();
			System.out.println("#" + tc + " " + ans);
		}
	}
	public static void bfs() {
		Queue<Cur> queue = new LinkedList<Cur>();
		boolean visited[] = new boolean[101];
		
		queue.offer(new Cur(start,0));
		visited[start] = true;
		
		while(!queue.isEmpty()) {
			Cur c = queue.poll();
			if (c.depth > maxDepth) {
				maxDepth = c.depth;
				ans = c.v;
			}else if (c.depth == maxDepth){
				ans = Math.max(ans, c.v);
			}
			
			for (Node temp = adjList[c.v]; temp != null; temp = temp.next) {
				if(!visited[temp.v]) {
					queue.offer(new Cur(temp.v, c.depth+1));
					visited[temp.v] = true;
				}
			}
		}
	}
	static class Node {
		int v;
		Node next;
		public Node(int v, Node next) {
			this.v = v;
			this.next = next;
		}
	}
	static class Cur {
		int v;
		int depth;
		public Cur(int v, int depth) {
			this.v = v;
			this.depth = depth;
		}
	}
}
