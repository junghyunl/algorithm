import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());

        int[][] numbers = new int[4][N];
        
        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int j = 0; j < 4; j++) {
                numbers[j][i] = Integer.parseInt(st.nextToken());
            }
        }
        for (int i = 0; i < 4; i++) {
            Arrays.sort(numbers[i]);
        }
        
        int[][] arr = new int[2][N*N];
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                arr[0][i*N+j] = numbers[0][i]+numbers[1][j];
                arr[1][i*N+j] = numbers[2][i]+numbers[3][j];
            }
        }
        for (int i = 0; i < 2; i++) {
            Arrays.sort(arr[i]);
        }
        
        long ans = 0;
        int left = 0;
        int right = N*N-1;
        while (left < N*N && right >= 0) {
          int sum = arr[0][left] + arr[1][right];
          if (sum == 0) {
        	  int leftLen = 1;
        	  int rightLen = 1;
        	  while (left+leftLen < N*N && arr[0][left+leftLen] == arr[0][left]) leftLen++;
        	  while (right-rightLen >= 0 && arr[1][right-rightLen] == arr[1][right]) rightLen++;
        	  ans += (long)leftLen*rightLen;
        	  left += leftLen;
        	  right -= rightLen;
          }else if (sum < 0) left++;
          else right--;
        }

        System.out.println(ans);
    }
}