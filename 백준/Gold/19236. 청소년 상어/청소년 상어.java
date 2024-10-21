import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	static int ans;
	static int[] dy = {-1,-1,0,1,1,1,0,-1};
	static int[] dx = {0,-1,-1,-1,0,1,1,1};
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int[][] map = new int[4][4];
		int[] fishDir = new int[16];
		for (int i = 0; i < 4; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 4; j++) {
				int a = Integer.parseInt(st.nextToken())-1;
				int b = Integer.parseInt(st.nextToken())-1;
				map[i][j] = a;
				fishDir[a] = b;
			}
		}
		int start = map[0][0];
		int sDir = fishDir[start];
		fishDir[start] = -1;		//먹은 물고기 방향: -1
		map[0][0] = -2;				//상어: -2
		
		bt(map, fishDir, 0, 0, sDir, start+1);
		
		System.out.println(ans);
	}
	
	static void bt(int[][] map, int[] fishDir, int y, int x, int dir, int sum) {
		
		for (int i = 0; i < 16; i++) {			//맵 순회하면서 순서대로 물고기 찾음
			if (fishDir[i] == -1) continue;		//이미 먹은 물고기는 pass
			
			loop: for (int j = 0; j < 4; j++) {
				for (int k = 0; k < 4; k++) {
					if (map[j][k] == i) {
						fishMove(map, fishDir, j, k);	//물고기 이동
						break loop;
					}
				}
			}
		}
		
		boolean visited = false;
		map[y][x] = -1;		//상어 이전 위치 초기화
		
		while (true) {
			y += dy[dir];
			x += dx[dir];
			if (y < 0 || y >= 4 || x < 0 || x >= 4) break;
			if (map[y][x] > -1) {		//물고기가 있다면
				visited = true;
				int[] copyDir = new int[16];
				int[][] copyMap = new int[4][4];
				copyDir = Arrays.copyOfRange(fishDir, 0, 16);
				for (int i = 0; i < 4; i++) {
					copyMap[i] = Arrays.copyOfRange(map[i], 0, 4);
				}
				
				copyMap[y][x] = -2;		//상어 위치에 -2
				copyDir[map[y][x]] = -1;
				
				bt(copyMap, copyDir, y, x, fishDir[map[y][x]], sum+map[y][x]+1);
			}
		}
		
		if (!visited) ans = Math.max(ans, sum);		//이동할 수 없다면 귀가
	}
	
	static void fishMove(int[][] map, int[] fishDir, int y, int x) {
		int dir = fishDir[map[y][x]];
		
		for (int i = 0; i < 8; i++) {
			int ny = y  + dy[dir];
			int nx = x  + dx[dir];
			if (ny < 0 || ny >= 4 || nx < 0 || nx >= 4 || map[ny][nx] == -2) {
				dir = (dir+1)%8;
				continue; 
			}
			fishDir[map[y][x]] = dir;
			int tmp = map[ny][nx];
			map[ny][nx] = map[y][x];
			map[y][x] = tmp;
			break;
		}
	}
}