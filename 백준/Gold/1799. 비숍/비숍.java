import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    
    static int N, M, ans, sum;
    static int[][] map;
    static List<Point> white, black;
    static int[] dy = {-1,-1};
    static int[] dx = {-1,1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        
        N = Integer.parseInt(br.readLine());
        map = new int[N][N];
        white = new ArrayList<>();
        black = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if (map[i][j] == 1 && (i+j)%2 == 0) white.add(new Point(j, i));
                else if (map[i][j] == 1 && (i+j)%2 == 1) black.add(new Point(j, i));
            }
        }
        M = white.size();
        dfs(0,0, white);
        ans += sum;
        sum = 0;
        M = black.size();
        dfs(0,0, black);
        System.out.println(ans+sum);
    }
    static void dfs(int depth, int cnt, List<Point> empty) {
        if (M-depth+cnt < sum) return;
        if (depth == M) {
            sum = Math.max(sum, cnt);
            return;
        }
        
        int y = empty.get(depth).y;
        int x = empty.get(depth).x;
        if (check(y, x)) {
            map[y][x] = 2;
            dfs(depth+1, cnt+1, empty);
            map[y][x] = 1;
        }
        dfs(depth+1, cnt, empty);
    }
    static boolean check(int y, int x) {
        for (int i = 0; i < 2; i++) {
            int ny = y;
            int nx = x;
            
            while (true) {
                ny += dy[i];
                nx += dx[i];
                if (ny < 0 || ny >= N || nx < 0 || nx >= N) break;
                if (map[ny][nx] == 2) return false;
            }
        }
        return true;
    }
}