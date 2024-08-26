import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int H, W, N;
	static String input;
	static char[][] field;
	static String tk = "<>^v", mv = "LRUD";
	static int[] dy = {0,0,-1,1};
	static int[] dx = {-1,1,0,0};
	static Tank t;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine());
			
			H = Integer.parseInt(st.nextToken());
			W = Integer.parseInt(st.nextToken());
			field = new char[H][W];
			for (int i = 0; i < H; i++) {
				String line = br.readLine();
				for (int j = 0; j < W; j++) {
					field[i][j] = line.charAt(j);
					if (tk.contains(""+field[i][j])) {
						t = new Tank(i,j,tk.indexOf(""+field[i][j]));
					}
				}
			}
			
			N = Integer.parseInt(br.readLine());
			input = br.readLine();
			for (int i = 0; i < N; i++) {
				char cmd = input.charAt(i);
				if (cmd == 'S') shoot();
				else move(cmd);
			}
			field[t.y][t.x] = tk.charAt(t.dr);
			
			System.out.print("#" + tc + " ");
			for (int i = 0; i < H; i++) {
				System.out.println(field[i]);
			}
			
		}
	}
	public static void move(char c) {
		int index = mv.indexOf(""+c);
		t.setDr(index);
		int ny = t.y + dy[index];
		int nx = t.x + dx[index];
		if (ny > -1 && ny < H && nx > -1 && nx < W && field[ny][nx] == '.') {
			field[t.y][t.x] = '.';
			t.setY(ny);
			t.setX(nx);
		}
	}
	public static void shoot() {
		int ny = t.y + dy[t.dr];
		int nx = t.x + dx[t.dr];
		while (true) {
			if (ny < 0 || ny >= H || nx < 0 || nx >= W || field[ny][nx] == '#') break;
			if (field[ny][nx] == '*') {
				field[ny][nx] = '.';
				break;
			}
			ny += dy[t.dr];
			nx += dx[t.dr];
		}
	}
	static class Tank {
		int y;
		int x;
		int dr;
		public Tank(int y, int x, int dr) {
			this.y = y;
			this.x = x;
			this.dr = dr;
		}
		public void setY(int y) {
			this.y = y;
		}
		public void setX(int x) {
			this.x = x;
		}
		public void setDr(int dr) {
			this.dr = dr;
		}
	}
}