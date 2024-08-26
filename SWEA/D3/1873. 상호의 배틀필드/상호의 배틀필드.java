import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	
	static int H, W, N, y, x, dr;
	static String input;
	static char[][] field;
	static String tk = "<>^v", mv = "LRUD";
	static int[] dy = {0,0,-1,1};
	static int[] dx = {-1,1,0,0};

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
						y = i; x = j; dr = tk.indexOf(""+field[i][j]);
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
			field[y][x] = tk.charAt(dr);
			
			System.out.print("#" + tc + " ");
			for (int i = 0; i < H; i++) {
				System.out.println(field[i]);
			}
			
		}
	}
	public static void move(char c) {
		dr = mv.indexOf(c);
		int ny = y + dy[dr];
		int nx = x + dx[dr];
		if (ny > -1 && ny < H && nx > -1 && nx < W && field[ny][nx] == '.') {
			field[y][x] = '.';
			y = ny;
			x = nx;
		}
	}
	public static void shoot() {
		int ny = y + dy[dr];
		int nx = x + dx[dr];
		while (true) {
			if (ny < 0 || ny >= H || nx < 0 || nx >= W || field[ny][nx] == '#') break;
			if (field[ny][nx] == '*') {
				field[ny][nx] = '.';
				break;
			}
			ny += dy[dr];
			nx += dx[dr];
		}
	}
}