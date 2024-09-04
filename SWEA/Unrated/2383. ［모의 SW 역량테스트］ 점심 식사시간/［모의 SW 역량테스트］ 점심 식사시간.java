import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class Solution {
	
	static int N, R, ans;
	static int[][] map;
	static ArrayList<Person> people;
	static ArrayList<Stair> stairs;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine()); ans = Integer.MAX_VALUE;
			map = new int[N][N];
			people = new ArrayList<>();
			stairs = new ArrayList<>();
			
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
					if (map[i][j] == 1) people.add(new Person(i,j));
					else if (map[i][j] > 1) stairs.add(new Stair(i,j,map[i][j]));
				}
			}
			R = people.size();
			for (Person p : people) {
				p.setAd(stairs.get(0).y, stairs.get(0).x);
				p.setBd(stairs.get(1).y, stairs.get(1).x);
			}
			
			subSet(0,0,0);
			System.out.println("#" + tc + " " + ans);
		}
	}
	public static void subSet(int depth, int aFlag, int bFlag) {
		if (getTime(aFlag, 0) >= ans || getTime(bFlag, 1) >= ans) return;
		else if (depth == R) {
			ans = Math.min(ans, Math.max(getTime(aFlag, 0), getTime(bFlag, 1)));
			return;
		}
		subSet(depth+1, aFlag|1<<depth, bFlag);
		subSet(depth+1, aFlag, bFlag|1<<depth);
	}
	public static int getTime(int flag, int op) {
		List<Integer> list = new ArrayList<>();
		
		for (int i = 0; i < R; i++) {
			if ((flag&1<<i) != 0) list.add(people.get(i).d[op]+1);
		}
		
		Collections.sort(list);
		int sl = stairs.get(op).l;

		if (list.size() > 3) {
			for (int i = 3; i < list.size(); i++) {
				if (list.get(i) > list.get(i-3)+sl) continue;
				list.set(i, list.get(i-3)+sl);
			}	
		}
		return list.size() > 0 ? list.get(list.size()-1)+sl : 0;
	}
	static class Person {
		int y, x;
		int[] d;
		public Person(int y, int x) {
			this.y = y;
			this.x = x;
			d = new int[2];
		}
		public void setAd(int ay, int ax) {
			d[0] = Math.abs(y-ay)+Math.abs(x-ax);
		}
		public void setBd(int by, int bx) {
			d[1] = Math.abs(y-by)+Math.abs(x-bx);
		}
		
	}
	static class Stair {
		int y, x, l;
		public Stair(int y, int x, int l) {
			this.y = y;
			this.x = x;
			this.l = l;
		}
		
	}
}
