import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.StringTokenizer;
import java.util.TreeMap;
import java.util.TreeSet;

public class Main {
	
	static int R, C, dt, ans;
	static int[][] map;
	static int[] d = {-1,1,1,-1};
	static TreeMap<Integer, Shark> sharks;
	
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(in.readLine());
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		map = new int[R][C];
		sharks = new TreeMap<>(Comparator.reverseOrder());
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(in.readLine());
			int r = Integer.parseInt(st.nextToken())-1;
			int c = Integer.parseInt(st.nextToken())-1;
			int s = Integer.parseInt(st.nextToken());
			int d = Integer.parseInt(st.nextToken())-1;
			int z = Integer.parseInt(st.nextToken());
			Shark shark = new Shark(r, c, s, d);
			map[r][c] = z;
			sharks.put(z, shark);
		}
		for (int i = 0; i < C; i++) {
			fishing(i);
			move();
		}
		System.out.println(ans);
	}
	public static void fishing(int c) {				
		for (int i = 0; i < R; i++) {
			if (map[i][c] > 0) {
				ans += map[i][c];
				sharks.remove(map[i][c]);
				map[i][c] = 0;
				return;
			}
		}
	}
	public static void move() {					
		map = new int[R][C];
		TreeSet<Integer> keys = new TreeSet<>(Comparator.reverseOrder());
		keys.addAll(sharks.keySet());
		for (int z : keys) {
			Shark s = sharks.get(z);
			s.setPosition();
			if(map[s.r][s.c] == 0) map[s.r][s.c] = z;
			else {
				sharks.remove(z);
			}
		}
	}
	static class Shark {
		int r, c, speed, dr;
		public Shark(int r, int c, int speed, int dr) {
			this.r = r;
			this.c = c;
			this.speed = speed;
			this.dr = dr;
		}
		public void setPosition() {
			if (dr < 2) {
				dt = r + d[dr]*speed;
				if ((dt/(R-1))%2 == 0) {
					if (dt < 0) dr = (dr+1)%2;
					r = Math.abs(dt%(R-1));
				}else {
					if (dt > 0) dr = (dr+1)%2;
					r = (R-1)-Math.abs(dt%(R-1));
				}
			}else {
				dt = c + d[dr]*speed;
				if ((dt/(C-1))%2 == 0) {
					if (dt < 0) dr += d[dr];
					c = Math.abs(dt%(C-1));
				}else {
					if (dt > 0) dr += d[dr];
					c = (C-1)-Math.abs(dt%(C-1));
				}
			}
		}
	}
}
