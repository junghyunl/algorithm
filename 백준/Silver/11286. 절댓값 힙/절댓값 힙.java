import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class Main {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int N = Integer.parseInt(br.readLine());
		PriorityQueue<Integer> queue = new PriorityQueue<>((a,b) -> {
			if (Math.abs(a) == Math.abs(b)) return a-b;
			return Math.abs(a)-Math.abs(b);
		});
		for (int i = 0; i < N; i++) {
			int num = Integer.parseInt(br.readLine());
			if (num == 0) {
				if (queue.isEmpty()) sb.append("0\n");
				else sb.append(queue.poll()+"\n");
			}else {
				queue.offer(num);
			}
		}
		System.out.println(sb);
	}
}