import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    
    static int N, M, Q, sum;
    static int[] fireStorm;
    static int[][] map;
    static boolean[][] visited;
    static int[] dy = {-1,1,0,0};
    static int[] dx = {0,0,-1,1};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        N = Integer.parseInt(st.nextToken());
        M = (int)Math.pow(2, N);
        Q = Integer.parseInt(st.nextToken());
        
        map = new int[M][M];
        visited = new boolean[M][M];
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        
        fireStorm = new int[Q];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < Q; i++) {
            fireStorm[i] = (int)Math.pow(2, Integer.parseInt(st.nextToken()));
        }
        
        List<Point> melt = new ArrayList<>();
        for (int i = 0; i < Q; i++) {
            rotate(fireStorm[i]);
            
            for (int j = 0; j < M; j++) {
                for (int k = 0; k < M; k++) {
                    if (map[j][k] > 0 && !check(j, k)) melt.add(new Point(k, j));
                }
            }
            
            for (int j = 0; j < melt.size(); j++) {
                map[melt.get(j).y][melt.get(j).x]--;
            }
            melt.clear();
        }
        
        int cnt = 0;
        
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < M; j++) {
                if (map[i][j] > 0 && !visited[i][j]) {
                    cnt = Math.max(cnt, bfs(i,j));
                }
            }
        }
        
        System.out.println(sum);
        System.out.println(cnt);
    }
    static void rotate(int len) {
        int[][] copyMap = new int[M][M];
        for (int i = 0; i < M; i++) {
            copyMap[i] = Arrays.copyOfRange(map[i], 0, M);
        }
        
        for (int i = 0; i < M; i+=len) {
            for (int j = 0; j < M; j+=len) {
                for (int k = 0; k < len; k++) {
                    for (int l = 0; l < len; l++) {
                        map[i+l][j+len-1-k] = copyMap[i+k][j+l];
                    }
                }
            }
        }
    }
    static boolean check(int y, int x) {
        int cnt = 0;
        for (int i = 0; i < 4; i++) {
            int ny = y + dy[i];
            int nx = x + dx[i];
            if (ny < 0 || ny >= M || nx < 0 || nx >= M || map[ny][nx] == 0) continue;
            cnt++;
        }
        return cnt > 2 ? true : false;
    }
    static int bfs(int y, int x) {
        int cnt = 0;
        Queue<Point> q = new ArrayDeque<>();
        q.offer(new Point(x, y));
        visited[y][x] = true;
        
        while (!q.isEmpty()) {
            Point cur = q.poll();
            sum += map[cur.y][cur.x];
            cnt++;
            
            for (int i = 0; i < 4; i++) {
                int ny = cur.y + dy[i];
                int nx = cur.x + dx[i];
                if (ny < 0 || ny >= M || nx < 0 || nx >= M || visited[ny][nx] || map[ny][nx] == 0) continue;
                visited[ny][nx] = true;
                q.offer(new Point(nx, ny));
            }
        }
        return cnt;
    }
}
