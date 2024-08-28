import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
	
	static int R, C, dt, ans;
	static int[] d = {-1,1,1,-1};
	static Shark[][] map;
	static ArrayList<Shark> sharks;
	
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(in.readLine());
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		map = new Shark[R][C];
		sharks = new ArrayList<>();
		
		for (int i = 0; i < M; i++) {
			st = new StringTokenizer(in.readLine());
			int r = Integer.parseInt(st.nextToken())-1;
			int c = Integer.parseInt(st.nextToken())-1;
			int s = Integer.parseInt(st.nextToken());
			int d = Integer.parseInt(st.nextToken())-1;
			int z = Integer.parseInt(st.nextToken());
			Shark shark = new Shark(r, c, s, d, z);
			map[r][c] = shark;
			sharks.add(shark);
		}
		sharks.sort((a,b)->a.size-b.size);
		for (int i = 0; i < C; i++) {
			fishing(i);
			move();
		}
		System.out.println(ans);
	}
	public static void fishing(int c) {				
		for (int i = 0; i < R; i++) {
			if (map[i][c] != null) {
				ans += map[i][c].size;
				sharks.remove(map[i][c]);
				return;
			}
		}
	}
	public static void move() {					
		map = new Shark[R][C];
		for (int i = sharks.size()-1; i >= 0; i--) {
			Shark s = sharks.get(i);
			s.setPosition();
			if(map[s.r][s.c] == null) map[s.r][s.c] = s;
			else {
				sharks.remove(i);
			}
		}
	}
	static class Shark {
		int r, c, speed, dr, size;
		public Shark(int r, int c, int speed, int dr, int size) {
			this.r = r;
			this.c = c;
			this.speed = speed;
			this.dr = dr;
			this.size = size;
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
