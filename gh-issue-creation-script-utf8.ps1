# TODO: Modify this script to pull from an excell or from Google Classroom
#   to get the assignemnt information (title, link to codewars, link to classroom assignemnt)

$students = [ordered]@{
    "Jay Miller"        = "Jaymiller2002";
    "Caitlin Schaeffer" = "CaitlinSchaef";
    "Henry Knollenberg" = "hpknollenberg";
    "Madeline Carlson"  = "SpookyLamb";
    "Jacinta Helm"      = "jhelm1217";
    "Duke McClellan"    = "dmcclellan3";
    'Brandon Heisler'   = "Skell87";
    "Eoin McDonnell"    = "oldmcdonnell";
    "Cody Miller"       = "CJMiller17";
    "Owen Coombs"       = "OwenCoombs";
    "Neal Sharma"       = "KumarG23";
    "Ryan Anderson"     = "RyanAndersonG64";
    "Nathan Wilson"     = "nwils000";
}

# TODO: pull this in from a different file, preferablly the google sheet https://docs.google.com/spreadsheets/d/1UadLzpBbh2zMmpAR3j9EyqaUPW0KolMo7rppobUIQHA/edit#gid=724647024
$assignments = [ordered]@{
    # Week 5
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
    # week 6
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
    # week 7
    "31" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzMTY5NTM2/details";
        'katas'               = @(
            "[Training on Century From Year | Codewars](https://www.codewars.com/kata/century-from-year/train/python)",
            "[Training on Remove String Spaces | Codewars](https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/python)"
        );
    }
    "32" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTM0MDExNjMx/details";
        'katas'               = @(
            "[Easy SQL - Ordering | Codewars](https://www.codewars.com/kata/593ed37c93350098d600001d)",
            "[Training on BASICS: Length based SELECT with LIKE | Codewars](https://www.codewars.com/kata/basics-length-based-select-with-like/train/sql)"
        );
    }
    "33" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTM0MTM2NzA2/details";
        'katas'               = @(
            "[Training on SQL Basics - Trimming the Field | Codewars](https://www.codewars.com/kata/59401c25c15cbeb58d000028/train/sql)",
            "[1. Find all active students | Codewars](https://www.codewars.com/kata/5809b9ef88b750ab180001ec)",
            "[Best-Selling Books (SQL for Beginners #5) | Codewars](https://www.codewars.com/kata/591127cbe8b9fb05bd00004b)",
            "[Training on SQL Basics: Repeat and Reverse | Codewars](https://www.codewars.com/kata/59414360f5c3947364000070/train/sql)",
            "[Training on Easy SQL: ASCII Converter | Codewars](https://www.codewars.com/kata/594804a218e96caa8d00051b/train/sql)"
        );
    }
    "34" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTM0MTA5NDYz/details";
        'katas'               = @(
            "[Training on SQL Basics: Simple GROUP BY | Codewars](https://www.codewars.com/kata/58111f4ee10b5301a7000175/train/sql)",
            "[Training on SQL Basics: Simple EXISTS | Codewars](https://www.codewars.com/kata/58113a64e10b53ec36000293/train/sql)",
            "[Training on Conditional Count | Codewars](https://www.codewars.com/kata/5816a3ecf54413a113000074/train/sql)",
            "[Training on Easy SQL: Absolute Value and Log to Base | Codewars](https://www.codewars.com/kata/594a8f2f7ca3c692a4000041/train/sql)"
        );
    }
    # Week 8
    "36" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzODcyOTcz/details";
        'katas'               = @(
            "[Training on Breaking chocolate problem | Codewars](https://www.codewars.com/kata/breaking-chocolate-problem/train/python)",
            "[Training on Kill The Monsters! | Codewars](https://www.codewars.com/kata/kill-the-monsters/train/python)",
            "[Training on SQL: Concatenating Columns | Codewars](https://www.codewars.com/kata/59440034e94fae05b2000073/train/sql)"
        );
    }
    "37" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjY1OTg5NzY0MDE5/details";
        'katas'               = @(
            "[Training on Keep Hydrated! | Codewars](https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python)",
            "[Training on Make the Deadfish Swim | Codewars](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/python)"
        );
    }
    "38" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU1Njg2Mjk0NzQ5/details";
        'katas'               = @(
            "[Training on Who likes it? | Codewars](https://www.codewars.com/kata/who-likes-it/train/python)",
            "[Unique In Order | Codewars](https://www.codewars.com/kata/54e6533c92449cc251001667/python)"
        );
    }
    "39" = @{
        'googleClassroomLink' = "https://classroom.google.com/c/NjY0NjU5NzYyMzgx/a/NjU4OTMzODI3Mzc0/details";
        'katas'               = @(
            "[Create Phone Number | Codewars](https://www.codewars.com/kata/525f50e3b73515a6db000b83/python)"
        );
    }
    # Week 9
}
# Write-Host $assignments
# to run this file .\gh-issue-creation-script-utf8.ps1
# auto detects the repo to make issues against

# start at week 1
$currentWeek = 9
# there are 9 weeks worth of warmups
$totalWarmupsWeeks = 9

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
CreateAllInOneIssues $students $currentWeek $totalWarmupsWeeks $assignments

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
