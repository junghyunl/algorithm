import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.TreeSet;

public class Main {
	
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		TreeSet<T> ts;
		
		int T = Integer.parseInt(br.readLine());
		
		for (int tc = 0; tc < T; tc++) {
			ts = new TreeSet<>();
			int k = Integer.parseInt(br.readLine());
			
			for (int i = 0; i < k; i++) {
				st = new StringTokenizer(br.readLine());
				char c = st.nextToken().charAt(0);
				long n = Long.parseLong(st.nextToken());
				
				if (c == 'I') {
					ts.add(new T(i, n));
					continue;
				}
				if (ts.isEmpty()) continue;
				else if (n == 1) {
					ts.pollLast();
				}
				else if (n == -1) {
					ts.pollFirst();
				}
			}
			
			if (ts.isEmpty()) System.out.println("EMPTY");
			else System.out.println(ts.last().value + " " + ts.first().value);
		}
	}
	
	public static class T implements Comparable<T>{
		int key;
		long value;
		public T(int key, long value) {
			this.key = key;
			this.value = value;
		}
		
		@Override
		public int compareTo(T t) {
			return this.value == t.value ? this.key - t.key : Long.compare(this.value, t.value);
		}
	}
}