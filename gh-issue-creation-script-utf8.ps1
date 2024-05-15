# TODO: Modify this script to pull from an excell or from Google Classroom
#   to get the assignemnt information (title, link to codewars, link to classroom assignemnt)

$students = [ordered]@{
    # "Jay Miller"        = "Jaymiller2002";
    # "Caitlin Schaeffer" = "CaitlinSchaef";
    # "Henry Knollenberg" = "hpknollenberg";
    # "Madeline Carlson"  = "SpookyLamb";
    # "Jacinta Helm"      = "jhelm1217";
    # "Duke McClellan"    = "dmcclellan3";
    # 'Brandon Heisler'   = "Skell87";
    # "Eoin McDonnell"    = "oldmcdonnell";
    # "Cody Miller"       = "CJMiller17";
    # "Owen Coombs"       = "OwenCoombs";
    # "Neal Sharma"       = "KumarG23";
    # "Ryan Anderson"     = "RyanAndersonG64";
    # "Nathan Wilson"     = "nwils000";
}

# TODO: pull this in from a different file, preferablly the google sheet https://docs.google.com/spreadsheets/d/1UadLzpBbh2zMmpAR3j9EyqaUPW0KolMo7rppobUIQHA/edit#gid=724647024
$assignments = [ordered]@{
    "21" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzODQ3MDI2/details";
        'katas'               = @(
            "[Training on Convert string to camel case | Codewars](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)",
            "[Decode the Morse code | Codewars](https://www.codewars.com/kata/decode-the-morse-code/javascript)"
        );
    }
    "22" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU1Njg2MzA3NTU5/details";
        'katas'               = @(
            "[Unique In Order | Codewars](https://www.codewars.com/kata/unique-in-order/javascript)"
        );
    }
    "23" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzMzg2NjE2/details";
        'katas'               = @(
            "[Roman Numerals Encoder | Codewars](https://www.codewars.com/kata/roman-numerals-encoder/javascript)"
        );
    }
    "24" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU1Njg2MTA0NTEx/details";
        'katas'               = @(
            "[Training on Use reduce() to calculate the sum of the values in an array | Codewars](https://www.codewars.com/kata/532b4057484b0e58e8000766/train/javascript)",
            '[Training on Training JS #27: methods of arrayObject---filter() | Codewars](https://www.codewars.com/kata/573023c81add650b84000429/train/javascript)'
        );
    }
    "26" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzOTU3NjI5/details";
        'katas'               = @(
            "[Credit Card Mask | Codewars](https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript)",
            "[Find the unique number | Codewars](https://www.codewars.com/kata/find-the-unique-number-1/javascript) OR [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)"
        );
    }
    "27" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTM0MDYyMTU2/details";
        'katas'               = @(
            "[Training on Simple Pig Latin | Codewars](https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript)",
            "[Surface Area and Volume of a Box | Codewars](https://www.codewars.com/kata/565f5825379664a26b00007c/python)",
            "[Tip Calculator | Codewars](https://www.codewars.com/kata/56598d8076ee7a0759000087/python)"
        );
    }
    "28" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzNDcyOTI5/details";
        'katas'               = @(
            "[Array plus array | Codewars](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/python)",
            "[Shortest Word | Codewars](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/python)"
        );
    }
    "29" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzMTQxMTg3/details";
        'katas'               = @(
            "[Training on Calculator: Coin Combination | Codewars](https://www.codewars.com/kata/564d0490e96393fc5c000029/train/python)",
            "[Basic Math (Add or Subtract) | Codewars](https://www.codewars.com/kata/5809b62808ad92e31b000031/python)"
        );
    }
}
# Write-Host $assignments
# to run this file .\gh-issue-creation-script-utf8.ps1
# auto detects the repo to make issues against

# start at week 1
$currentWeek = 6
# there are 9 weeks worth of warmups
$totalWarmupsWeeks = 6

function CreateAllInOneIssues {
    param (
        $studentsHash, $startWeek, $endWeek, $assignments
    )

    for ($i = $startWeek; $i -le $endWeek; $i++) {
        Write-Host "========================"
        Write-Host "week $i"

        foreach ($student in $studentsHash.Keys) {
            Write-Host "------------------------"
            Write-Host "Key is $student, Value is $($studentsHash[$student]), week is $i"
            $title = "Week $i feedback for $student"
            $description = "Feedback PR required on the kata submissions for week $i`n"
            $assignee = '@me'
            $label = "feedback"

            $startDay = ($i - 1) * 5 + 1
            $endDay = $startDay + 4
            for ($day = $startDay ; $day -lt $endDay; $day++) {
                # Write-Host "day $day"
                $assignment = $assignments[$day.ToString()]
                $gcrLink = $assignment.googleClassroomLink
                $description += "- [Day $day]($gcrLink)`n"
                foreach ($subAssignment in $assignment.katas) {
                    $description += "`t- [ ] $subAssignment`n"
                }
            }
            # Write-Host $description

            Invoke-Expression "gh issue create --title `"$title`" --body `"$description`" --assignee `"$assignee`" --label `"$label`""
            Write-Host "========================"
        }

        Start-Sleep -Seconds 60
    }
}
# CreateAllInOneIssues $students $currentWeek $totalWarmupsWeeks $assignments

function CreateMissingAssignmentIssues {
    param (
        $studentsHash, $startWeek, $endWeek, $assignments
    )
    for ($i = $startWeek; $i -le $endWeek; $i++) {
        Write-Host "week $i"
        foreach ($student in $studentsHash.Keys) {
            Write-Host "========================"
            $title = "$student week $i warm-up sumbissions needed"
            $description = ""
            $assignee = $studentsHash[$student]
            $label = "enhancement"

            $startDay = ($i - 1) * 5 + 1
            $endDay = $startDay + 4
            for ($day = $startDay ; $day -lt $endDay; $day++) {
                Write-Host "day $day"
                $assignment = $assignments[$day.ToString()]

                $description += "- [ ] Day $day `n"
                foreach ($subAssignment in $assignment) {
                    $description += "   - [ ] $subAssignment`n"
                }
            }
            Write-Host $description
            # Invoke-Expression "gh issue create --title `"$title`" --body `"$description`" --assignee `"$assignee`" --label `"$label`""
            Write-Host "========================"
        }
        # GitHub restricts automated resourece creation to 20 per min,
        # so I need to limit the amount made to one week per minute
        # Start-Sleep -Seconds 60
    }
}
# CreateMissingAssignmentIssues $students $currentWeek $totalWarmupsWeeks $assignments


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
            # $label = "documentation"
            $label = "feedback"
            Invoke-Expression "gh issue create --title `"$title`" --body `"$description`" --assignee `"$assignee`" --label `"$label`""
            Write-Host "========================"
        }
        # GitHub restricts automated resourece creation to 20 per min,
        # so I need to limit the amount made to one week per minute
        Start-Sleep -Seconds 60
    }
}
# CreateFeedbackIssues $students $currentWeek $totalWarmupsWeeks
