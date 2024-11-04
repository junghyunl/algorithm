import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    
    static int N, ans;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] numbers = new int[N];
        for (int i = 0; i < N; i++) {
            numbers[i] = Integer.parseInt(st.nextToken());
        }
        int X = Integer.parseInt(br.readLine());
        
        Arrays.sort(numbers);
        int left = 0, right = N-1;
        while (left < right) {
            if (numbers[left] + numbers[right] == X) {
                ans++;
                left++;
            } else if (numbers[left] + numbers[right] < X) {
                left++;
            } else {
                right--;
            }
            
        }
        System.out.println(ans);
        

    }

}