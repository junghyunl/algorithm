
import java.util.Scanner;
import java.util.Arrays;

class Solution
{
	public static int[] player1;
    public static int[] player2;
    public static final int N = 9;
    public static int[] cards;
    public static int winCount;
    public static int loseCount;
     
    public static void whoWin(int[] player2Cards) {
        int kScore = 0;
        int iScore = 0;
        for (int i = 0; i < 9; i++) {
            if (player1[i] > player2Cards[i]) kScore += player1[i] + player2Cards[i];
            else if (player1[i] < player2Cards[i]) iScore += player1[i] + player2Cards[i];
        }
        if (iScore > kScore) loseCount++;
        if (iScore < kScore) winCount++;
    }
     
    public static void permutation(int depth, int flag) {
        if (depth == N) {
            whoWin(cards);
            return;
        }
        for (int i = 0; i < 9; i++) {
            if ((flag & 1 << i) != 0) continue;
            cards[depth] = player2[i];
            permutation(depth + 1, flag | 1 << i);
        }
    }
     
    public static void main(String args[]) throws Exception
    {
 
        Scanner sc = new Scanner(System.in);
        int T;
        T=sc.nextInt();
 
        for(int test_case = 1; test_case <= T; test_case++)
        {
            player1 = new int[N];
            player2 = new int[N];
            cards = new int[N];
            winCount = 0;
            loseCount = 0;
            for (int i = 0; i < 9; i++) {
                player1[i] = sc.nextInt();
            }
            int j = 0;
            for (int i = 1; i <= 18; i++) {
                int num = i;
                if (!Arrays.stream(player1).anyMatch(x -> x == num)) player2[j++] = i;
            }
             
             
            permutation(0, 0);
             
            System.out.println("#" + test_case + " " + winCount + " " + loseCount);
 
        }
    }
}