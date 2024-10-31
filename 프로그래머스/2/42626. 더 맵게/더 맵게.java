import java.util.*;

class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i = 0; i < scoville.length; i++) {
            pq.offer(scoville[i]);
        }
        
        int ans = 0;
        while (pq.peek() < K && pq.size() > 1) {
            pq.offer(pq.poll() + pq.poll()*2);
            ans++;
        }
        
        return pq.peek() < K ? -1 : ans;
    }
}