function solution(skill, skill_trees) {
    let ans = 0;
    
    for (let i of skill_trees) {
        let possible = 1;
        let checkSkill = skill;
        for (let j of i) {
            if (skill.includes(j) && j !== checkSkill[0]) {
                possible = 0;
                break;
            }
            if (skill.includes(j) && j === checkSkill[0]) {
                checkSkill = checkSkill.slice(1);
            }
        }
        ans += possible;
    }
    
    return ans;
}