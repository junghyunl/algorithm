import java.util.*;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int m = enemy.length;
        int size = Math.min(k, m);
        
        for (int i = 0; i < size; i++) {
            pq.offer(enemy[i]);
        }
        
        int ans = size;
        for (int i = size; i < m; i++) {
            if (n - Math.min(pq.peek(), enemy[i]) < 0) break;
            ans++;
            if (enemy[i] <= pq.peek()) {
                n -= enemy[i];
            } else {
                n -= pq.poll();
                pq.offer(enemy[i]);
            }
        }
        
        return ans;
    }
}