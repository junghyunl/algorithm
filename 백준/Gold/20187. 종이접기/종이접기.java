import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static int K, H;
	static int[][] map;
	static boolean hor, ver;
	// hor - false(��), true(�Ʒ�)
	// ver - false(��), true(����)

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		K = Integer.parseInt(br.readLine());
		map = new int[(int)Math.pow(2, K)][(int)Math.pow(2, K)];
		
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < 2*K; i++) {
			check(st.nextToken().charAt(0));
		}
		
		H = Integer.parseInt(br.readLine());
		if (hor) {
			checkHor();
		}
		if (ver) {
			checkVer();
		}
		
		map[0][0] = H;
		checkVer();
		map[0][1] = H;
		checkHor();
		map[1][1] = H;
		checkVer();
		map[1][0] = H;
		
		for (int i = 2; i < (int)Math.pow(2, K); i++) {
			map[0][i] = map[0][i-2];
			map[1][i] = map[1][i-2];
		}
		for (int i = 2; i < (int)Math.pow(2, K); i++) {
			for (int j = 0; j < (int)Math.pow(2, K); j++) {
				map[i][j] = map[i-2][j];
			}
		}
		
		for (int i = 0; i < (int)Math.pow(2, K); i++) {
			for (int j = 0; j < (int)Math.pow(2, K); j++) {
				System.out.print(map[i][j] + " ");
			}
			System.out.println();
		}
		
	}
	static void checkHor() {
		switch (H) {
		case 0:
			H = 2;
			break;
		case 1:
			H = 3;	
			break;
		case 2:
			H = 0;
			break;
		case 3:
			H = 1;
			break;
		}
	}
	static void checkVer() {
		switch (H) {
		case 0:
			H = 1;
			break;
		case 1:
			H = 0;		
			break;
		case 2:
			H = 3;
			break;
		case 3:
			H = 2;
			break;
		}
	}
	static void check(char c) {
		if (c == 'D') {					// �Ʒ�
			if (hor) return;
			hor = true;
			return;
		}else if (c == 'U') {			// �� 
			if (!hor) return;
			hor = false;
			return;
		}else if (c == 'R') {			// ����
			if (ver) return;
			ver = true;
			return;
		}else if (c == 'L') {			// ��
			if (!ver) return;
			ver = false;
			return;
		}
	}
}