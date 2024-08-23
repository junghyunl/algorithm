import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class Main {

	static int N;
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		N = Integer.parseInt(br.readLine());
		PriorityQueue<Integer> queue = new PriorityQueue<>((a,b) -> b-a);
		for (int i = 0; i < N; i++) {
			int num = Integer.parseInt(br.readLine());
			if (num > 0) {
				queue.offer(num);
			}else {
				if (queue.isEmpty()) sb.append("0\n");
				else sb.append(queue.poll()+"\n");
			}
		}
		System.out.println(sb);
	}
}