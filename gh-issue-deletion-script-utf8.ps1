# https://cli.github.com/manual/gh_issue_delete
# $issuesToDelete = @(143,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87);
$issuesToDelete = @(66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47);

foreach ($issue in $issuesToDelete) {
    Invoke-Expression "gh issue delete $issue --yes"
}
# Invoke-Expression "gh issue list -l 'documentation'"
# 143  Week 6 feedback for Jay Miller         documentation  about 10 days ago
# 106  Week 8 feedback for Brandon Heisler    documentation  about 11 days ago
# 105  Week 8 feedback for Duke McClellan     documentation  about 11 days ago
# 104  Week 8 feedback for Jacinta Helm       documentation  about 11 days ago
# 103  Week 8 feedback for Madeline Carlson   documentation  about 11 days ago
# 102  Week 8 feedback for Henry Knollenberg  documentation  about 11 days ago
# 101  Week 8 feedback for Caitlin Schaeffer  documentation  about 11 days ago
# 100  Week 8 feedback for Jay Miller         documentation  about 11 days ago
# 99   Week 7 feedback for Nathan Wilson      documentation  about 11 days ago
# 98   Week 7 feedback for Ryan Anderson      documentation  about 11 days ago
# 97   Week 7 feedback for Neal Sharma        documentation  about 11 days ago
# 96   Week 7 feedback for Owen Coombs        documentation  about 11 days ago
# 95   Week 7 feedback for Cody Miller        documentation  about 11 days ago
# 94   Week 7 feedback for Eoin McDonnell     documentation  about 11 days ago
# 93   Week 7 feedback for Brandon Heisler    documentation  about 11 days ago
# 92   Week 7 feedback for Duke McClellan     documentation  about 11 days ago
# 91   Week 7 feedback for Jacinta Helm       documentation  about 11 days ago
# 90   Week 7 feedback for Madeline Carlson   documentation  about 11 days ago
# 89   Week 7 feedback for Henry Knollenberg  documentation  about 11 days ago
# 88   Week 7 feedback for Caitlin Schaeffer  documentation  about 11 days ago
# 87   Week 7 feedback for Jay Miller         documentation  about 11 days ago

# gh issue list -l "enhancement"
#66  Eoin McDonnell warm-up sumbissions needed for week 7     enhancement  about 11 days ago
#65  Brandon Heisler warm-up sumbissions needed for week 7    enhancement  about 11 days ago
#64  Duke McClellan warm-up sumbissions needed for week 7     enhancement  about 11 days ago
#63  Jacinta Helm warm-up sumbissions needed for week 7       enhancement  about 11 days ago
#62  Madeline Carlson warm-up sumbissions needed for week 7   enhancement  about 11 days ago
#61  Henry Knollenberg warm-up sumbissions needed for week 7  enhancement  about 11 days ago
#60  Caitlin Schaeffer warm-up sumbissions needed for week 7  enhancement  about 11 days ago
#59  Jay Miller warm-up sumbissions needed for week 7         enhancement  about 11 days ago
#58  Nathan Wilson warm-up sumbissions needed for week 6      enhancement  about 11 days ago
#57  Ryan Anderson warm-up sumbissions needed for week 6      enhancement  about 11 days ago
#56  Neal Sharma warm-up sumbissions needed for week 6        enhancement  about 11 days ago
#55  Owen Coombs warm-up sumbissions needed for week 6        enhancement  about 11 days ago
#54  Cody Miller warm-up sumbissions needed for week 6        enhancement  about 11 days ago
#53  Eoin McDonnell warm-up sumbissions needed for week 6     enhancement  about 11 days ago
#52  Brandon Heisler warm-up sumbissions needed for week 6    enhancement  about 11 days ago
#51  Duke McClellan warm-up sumbissions needed for week 6     enhancement  about 11 days ago
#50  Jacinta Helm warm-up sumbissions needed for week 6       enhancement  about 11 days ago
#49  Madeline Carlson warm-up sumbissions needed for week 6   enhancement  about 11 days ago
#48  Henry Knollenberg warm-up sumbissions needed for week 6  enhancement  about 11 days ago
#47  Caitlin Schaeffer warm-up sumbissions needed for week 6  enhancement  about 11 days ago
