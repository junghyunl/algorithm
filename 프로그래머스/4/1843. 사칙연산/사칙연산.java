import java.util.*;
import java.io.*;

class Solution {
    
    static int[][] dp;
    static boolean[] isPlus;
    
    public int solution(String arr[]) {
        int N = arr.length/2+1;
        dp = new int[N][N];
        isPlus = new boolean[N];
        isPlus[0] = true;
        
        for (int i = 0; i < N-1; i++) {
            if (arr[i*2+1].equals("+")) {
                isPlus[i+1] = true;
            }
        }
        
        for (int i = 0; i < N; i++) {
            if (isPlus[i]) {
                Arrays.fill(dp[i], Integer.MIN_VALUE);
            } else {
                Arrays.fill(dp[i], Integer.MAX_VALUE);
            }
            
            dp[i][i] = Integer.parseInt(arr[i*2]);
        }
        
        dfs(0, N-1);
        int ans = dp[0][N-1];
        return ans;
    }
    
    static int dfs(int start, int end) {
        if (dp[start][end] > Integer.MIN_VALUE && dp[start][end] < Integer.MAX_VALUE) return dp[start][end];
        
        int result;
        
        if (isPlus[start]) {
            result = Integer.MIN_VALUE;
            
            for (int i = start; i < end; i++) {
                result = Math.max(result, isPlus[i+1] ? dfs(start, i) + dfs(i+1, end) : dfs(start, i) - dfs(i+1, end));
            }
        } else {
            result = Integer.MAX_VALUE;
            
            for (int i = start; i < end; i++) {
                result = Math.min(result, isPlus[i+1] ? dfs(start, i) + dfs(i+1, end) : dfs(start, i) - dfs(i+1, end));
            }
        }
        return dp[start][end] = result;
    }
}
