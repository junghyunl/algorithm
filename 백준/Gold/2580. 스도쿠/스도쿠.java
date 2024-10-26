import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	
	static int cnt;
	static boolean complete;
	static int[] row = new int[9], col = new int[9], square = new int[9];
	static int[][] sudoku = new int[9][9];
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		for (int i = 0; i < 9; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < 9; j++) {
				sudoku[i][j] = Integer.parseInt(st.nextToken());
				
				if (sudoku[i][j] > 0) {
					row[i] |= 1<<(sudoku[i][j]-1);
					col[j] |= 1<<(sudoku[i][j]-1);
					square[(i/3)*3+j/3] |= 1<<(sudoku[i][j]-1);
				}else {
					cnt++;	// 채워야하는 칸 개수
				}
			}
		}
		dfs(0, 0);
	}
	static void dfs(int index, int depth) {	// 이전에 숫자를 채운 행(y)부터 탐색
		if (complete) return;	// 스도쿠가 완성되면 탐색X
		if (depth == cnt) {		// 빈칸을 모두 채우면 탐색 끝
			complete = true;
			StringBuilder ans = new StringBuilder();
			for (int i = 0; i < 9; i++) {
				for (int j = 0; j < 9; j++) {
					ans.append(sudoku[i][j] + " ");
				}
				ans.append("\n");
			}
			System.out.println(ans);
			return;
		}
		for (int i = index; i < 81; i++) {
			if (sudoku[i/9][i%9] == 0) {	// 빈칸이면 1-9중에서 가능한 숫자를 넣고 백트래킹
				for (int j = 1; j <= 9; j++) {
					if (check(i/9, i%9, j-1)) {
						on(i/9, i%9, j-1);
						dfs(i+1, depth+1);
						off(i/9, i%9, j-1);
					}
				}
				break;
			}
		}
	}
	static boolean check(int i, int j, int num) {	// 가로줄, 세로줄, 3x3정사각형에 num이 포함 안되어있으면 true
		if (((row[i] & 1<<num) == 0) && 
			((col[j] & 1<<num) == 0) && 
			((square[(i/3)*3+j/3] & 1<<num) == 0)) return true;
		return false;
	}
	static void on(int i, int j, int num) {
		sudoku[i][j] = num+1;
		row[i] |= 1<<num;
		col[j] |= 1<<num;
		square[(i/3)*3+j/3] |= 1<<num;
	}
	static void off(int i, int j, int num) {
		sudoku[i][j] = 0;
		row[i] &= ~(1<<num);
		col[j] &= ~(1<<num);
		square[(i/3)*3+j/3] &= ~(1<<num);
	}
}

