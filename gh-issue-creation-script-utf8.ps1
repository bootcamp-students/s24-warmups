# TODO: Modify this script to pull from an excell or from Google Classroom
    # to get the assignemnt information (title, link to codewars, link to classroom assignemnt)

$students = [ordered]@{
    "Jay Miller"    = "Jaymiller2002";
    # "Caitlin Schaeffer"    = "CaitlinSchaef";
    # "Henry Knollenberg"   = "hpknollenberg";
    # "Madeline Carlson"    = "SpookyLamb";
    # "Jacinta Helm" = "jhelm1217";
    # "Duke McClellan" = "dmcclellan3";
    # 'Brandon Heisler'   = "Skell87";
    # "Eoin McDonnell"  = "oldmcdonnell";
    # "Cody Miller"  = "CJMiller17";
    # "Owen Coombs"  = "OwenCoombs";
    # "Neal Sharma"  = "KumarG23";
    # "Ryan Anderson"  = "RyanAndersonG64";
    # "Nathan Wilson"  = "nwils000";
}
# to run this file .\gh-issue-creation-script-utf8.ps1
# auto detects the repo to make issues against

# start at week 1
$currentWeek = 9
# there are 9 weeks worth of warmups
$totalWarmupsWeeks = 9

function CreateMissingAssignmentIssues {
    param (
        $studentsHash, $startWeek, $endWeek
    )
    for ($i = $startWeek; $i -le $endWeek; $i++) {
        Write-Host "week $i"
        foreach ($student in $studentsHash.Keys) {
            Write-Host "========================"
            $title = "$student warm-up sumbissions needed for week $i"
            $description = ""
            $assignee = $studentsHash[$student]
            $label = "enhancement"

            $startDay = ($i - 1) * 5 + 1
            $endDay = $startDay + 4
            for ($day = $startDay ; $day -lt $endDay; $day++) {
                Write-Host "day $day"
                $description += "- [ ] Day $day `n"
            }
            Invoke-Expression "gh issue create --title `"$title`" --body `"$description`" --assignee `"$assignee`" --label `"$label`""
            Write-Host "========================"
        }
        # GitHub restricts automated resourece creation to 20 per min,
        # so I need to limit the amount made to one week per minute
        Start-Sleep -Seconds 60
    }
}
# CreateMissingAssignmentIssues $students $currentWeek $totalWarmupsWeeks


function CreateFeedbackIssues {
    param (
        $studentsHash, $startWeek, $endWeek
    )

    # This creates issues for each student, for each week.
        # The defualt sorting in GitHub is to show the newest issue first, so if you don't feel like bookmarking that sorting in reverse you -
        # simply use this logic to have your issue numbers be in reverse but the creation order show newest created as the one you want to do first.
        # $i = $endWeek; $i -gt $startWeek; $i--
    for ($i = $startWeek; $i -le $endWeek; $i++) {

        foreach ($student in $studentsHash.Keys) {
            Write-Host "========================"
            Write-Host "Key is $student, Value is $($studentsHash[$student]), week is $i"
            $title = "Week $i feedback for $student"
            $description = "Feedback PR required on the kata submissions for week $i"
            $assignee = '@me'
            $label = "documentation"
            Invoke-Expression "gh issue create --title `"$title`" --body `"$description`" --assignee `"$assignee`" --label `"$label`""
            Write-Host "========================"
        }
        # GitHub restricts automated resourece creation to 20 per min,
        # so I need to limit the amount made to one week per minute
        Start-Sleep -Seconds 60
    }
}
# CreateFeedbackIssues $students $currentWeek $totalWarmupsWeeks
