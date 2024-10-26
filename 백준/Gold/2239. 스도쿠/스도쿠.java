import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
	
	static int N;
	static boolean complete;
	static int[] row = new int[9], col = new int[9], square = new int[9];
	static int[][] sudoku = new int[9][9];
	static List<Point> empty;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		empty = new ArrayList<>();
		for (int i = 0; i < 9; i++) {
			String[] line = br.readLine().split("");
			for (int j = 0; j < 9; j++) {
				sudoku[i][j] = Integer.parseInt(line[j]);
				
				if (sudoku[i][j] > 0) {
					row[i] |= 1<<(sudoku[i][j]-1);
					col[j] |= 1<<(sudoku[i][j]-1);
					square[(i/3)*3+j/3] |= 1<<(sudoku[i][j]-1);
				}else {
					empty.add(new Point(j, i));
				}
			}
		}
		N = empty.size();
		dfs(0);
	}
	static void dfs(int depth) {
		if (complete) return;
		if (depth == N) {	
			complete = true;
			StringBuilder ans = new StringBuilder();
			for (int i = 0; i < 9; i++) {
				for (int j = 0; j < 9; j++) {
					ans.append(sudoku[i][j]);
				}
				ans.append("\n");
			}
			System.out.println(ans);
			return;
		}
		
		int y = empty.get(depth).y;
		int x = empty.get(depth).x;
		
		for (int j = 1; j <= 9; j++) {
			if (check(y, x, j-1)) {
				on(y, x, j-1);
				dfs(depth+1);
				off(y, x, j-1);
			}
		}
	}
	
	static boolean check(int i, int j, int num) {
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

