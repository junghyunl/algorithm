import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	static int D, W, K, answer;
	static int[][] film;

    public static void main(String[] args) throws IOException {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	int T = Integer.parseInt(br.readLine());
    	
    	for (int tc = 1; tc <= T; tc++) {
    		StringTokenizer st = new StringTokenizer(br.readLine());
    		D = Integer.parseInt(st.nextToken());
    		W = Integer.parseInt(st.nextToken());
    		K = Integer.parseInt(st.nextToken());
    		answer = D;
    		film = new int[D][W];
    		
    		for (int i = 0; i < D; i++) {
    			st = new StringTokenizer(br.readLine());
				for (int j = 0; j < W; j++) {
					film[i][j] = Integer.parseInt(st.nextToken());
				}
			}
    		
    		if (K == 1 || checkPerformance(0,0)) answer = 0;
    		else bt(0,0,0,0);
    		System.out.println("#" + tc + " " + answer);
		}
    }
    
    public static boolean checkPerformance(int aFlag, int bFlag) {
    	for (int j = 0; j < W; j++) {
			int maxLen = 0;
			int cnt = 0;
			int feature = film[0][j];
			for (int k = 0; k < D; k++) {
				int curFeature = film[k][j];
				if ((aFlag & 1 << k) != 0) curFeature = 0;
				else if ((bFlag & 1 << k) != 0) curFeature = 1;
				if (feature == curFeature) {
					cnt++;
					maxLen = Math.max(maxLen, cnt);
				}else {
					feature = curFeature;
					cnt = 1;
				}
			}
			if (maxLen < K) return false;
		}
    	return true;
    }
    
    public static void bt(int depth, int aFlag, int bFlag, int len) {
    	if (len >= answer) return;
    	if (depth == D) {
    		if (checkPerformance(aFlag, bFlag)) answer = Math.min(answer, len);
    		return;
    	}
    	bt(depth+1, aFlag | 1 << depth, bFlag, len+1);
    	bt(depth+1, aFlag, bFlag | 1 << depth, len+1);
    	bt(depth+1, aFlag, bFlag, len);
    }
}
