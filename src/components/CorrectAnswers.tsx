import { truncate } from "fs/promises";

let CorrectAnswers = [
    {
        question: "What is the git command that downloads respository from github ? ",
        answerBank: [
           {answer: "D. git pull", isCorrect: true},
        ],},
    { question: "Which command is used to upload local repository content to remote repository? ",
        answerBank: [
            {answer: "A. git push", isCorrect: true},
            {summary: "It is used to push commits from local repository to a remote repository "},
            ],
    },
    {
        question: "Which command downloads existing Git repository to local ? ",
        answerBank: [
      {answer: "D. git clone", isCorrect: true},
     {summary: "It is used to point to an existing repo and make a clone in a new directory at another location "},
        ],
    },
    {
        question: "Which command create snapshot of staged changes along a timeline of Git Project ? ",
        answerBank: [
            {answer: "B. git commit", isCorrect: true},
           ],
    },
    {
        question: "Which command is used to start new repository ? ",
        answerBank: [
            {answer: "B. git init", isCorrect: true},
            {summary: "git init is used to create a new repository it can aslo be used to convert a existing project to Git "},
           ],
    },
    {
        question: "Which command add one or more to starging area ? ",
        answerBank: [
            {answer: "A. git add .", isCorrect: true},
            {summary: "git add command add a change in working directory to the staging area it tells Git that you want to include updates to particular file "},
           ],
    },
    {
        question: "Which command shows difference of files that are not yet staged ? ",
        answerBank: [
            {answer: "C. git diff", isCorrect: true},
            {summary: "git diff is used to view changes between the two commit "},
         ],
    },
    {
        question: "Which command unstages file ? ",
        answerBank: [
       {answer: "B. git reset", isCorrect: true},
            {summary: "git reset unstage all files and directories "},
            ],
    },
    {
        question: "Which command undoes all commits after specified commit ? ",
        answerBank: [
            {answer: "B. git reset commit", isCorrect: true},
            {summary: "git reset commit undo changes associated with specific commit "},
            
        ],
    },
    {
        question: "Which command list all files to be committed? ",
        answerBank: [
            {answer: "B. git diff-tree", isCorrect: true},
            {summary: "git diff -tree is considered as a prefered way of listing files in commit "},
          ],
    },
    {
        question: "Which command is run to check the state of your local git repository since last committed ? ",
        answerBank: [
         {answer: "B. git status", isCorrect: true},
            {summary: "Git status displays thestate of working directory and staging area"},
        ],
    },
    { question: "After you add file it becomes ? ",
        answerBank: [
            {answer: "C. Staged", isCorrect: true},
            {summary: "Staged files are files that are ready to be committed to repository you are working on"},
         ],
    },
    {
        question: "Which of the following is true when you use the following command ? git add -A ",
        answerBank: [
            {answer: "A. All new and updated files are staged", isCorrect: true},
        ],
    },
    {
        question: "Which of the following is equivalent to fetch and merge ? ",
        answerBank: [
           {answer: "B. pull", isCorrect: true},
            {summary: "git pull is used to fetch and download content from remote repository and immediately update local repository."},
         ],
    },
    {
        question: "How do you supply a commit message to a commit ? ",
        answerBank: [
            {answer: "C. git commit -m 'I am Coding'", isCorrect: true},
            {summary: "W e write git commit command followed by -m and then message in quotations"},
           ],
    },
    {
        question: "Git commit command use to ? ",
        answerBank: [
            {answer: "B. push changes from local to central", isCorrect: true},
            {summary: "git commit Command is one of the core primary function of Git it is used to create snapshot of staged changes"},
          ],
    },
    {
        question: "Command used to connect remote repo with local repo? ",
        answerBank: [
           {answer: "D. git remote add", isCorrect: true},
            {summary: "git remote command is used to make remote connections such as connectiong local to remote"},
        ],
    },
    {question: "Which command merge the specified branch",
    answerBank: [
        {answer: "A. git merge", isCorrect: true},],
       },
{question: "Which command stores temporarily modified files? ",
answerBank: [
    {answer: "D. git stash", isCorrect: true},],
},
{question: "Which command lists all stashed changesets? ",
answerBank: [
    {answer: "D. git stast list", isCorrect: true},],
},
{question: "Which command discards most recently stashed changest? ",
answerBank: [
   
    {answer: "D. git remote add", isCorrect: true},],
},
{question: "Which command pushes all branches to your remote repository? ",
answerBank: [

    {answer: "B. git push -all", isCorrect: true},
],
},
{question: "Which command is used to switch from one branch to another? ",
answerBank: [
    {answer: "A. git checkout", isCorrect: true},
   ],
},
{question: "Which command creates a new branch and also switches to it? ",
answerBank: [
    {answer: "D. git checkout -b", isCorrect: true},],
},
{question: "Which commands lists all local braches in current repository? ",
answerBank: [
    {answer: "C. git branch", isCorrect: true},
 ],
},
{question: "Which command creates a new branch? ",
answerBank: [
    {answer: "B. git branch [branch name]", isCorrect: true},
  ],
},
{question: "Which command is used to give tags to the specified commit? ",
answerBank: [
    {answer: "D. git tag [commitID]", isCorrect: true},],
},
{question: "Which command shows metadata and content changes of specified commit? ",
answerBank: [
    {answer: "D. git shows", isCorrect: true},],
},
{question: "Which command delete the file from working directory? ",
answerBank: [
    {answer: "D. git rm [file]", isCorrect: true},],
},
{question: "Which command set configuration for git installation ? ",
answerBank: [
    {answer: "B. git config", isCorrect: true},
],
},
{question: "Which command lets you move around branches? ",
answerBank: [
    {answer: "C. git rebase", isCorrect: true},
   ],
},
{question: "Which command begin interative rebasing session? ",
answerBank: [
    {answer: "C. git rebase -i", isCorrect: true},
    ],
},
{question: "Which command undoes a commited snapshot? ",
answerBank: [
    {answer: "B. git revert", isCorrect: true},
  ],
},
{question: "Which command allows you to fetch all objects the remote repository? ",
answerBank: [
    {answer: "C. git fetch", isCorrect: true},
    ],
},
{question: "Which command view type and size information of repository? ",
answerBank: [
    {answer: "A. git ls-tree", isCorrect: true},
 ],
},
{question: "Which command lets you search through committed trees? ",
answerBank: [
    {answer: "C. git grep", isCorrect: true},
   ],
},
{question: "Which command clean unnecessary files ? ",
answerBank: [
    {answer: "B. git gc", isCorrect: true},
 ],
},
{question: "Which command deletes objects that don't have any incoming pointers? ",
answerBank: [
    {answer: "B. git prune", isCorrect: true},
 ],
},
{question: "Which command will add specific file to remote? ",
answerBank: [
    {answer: "C. git add [filename]", isCorrect: true},
 ],
},
{question: "Which command views the staged changes ? ",
answerBank: [
    {answer: "C. git diff --staged", isCorrect: true},
],
},
{question: "Which command deletes a branch ? ",
answerBank: [
    {answer: "A. git branch -D", isCorrect: true},
  ],
},
{question: "Which command views remote URLs? ",
answerBank: [
    {answer: "C. git remote -v", isCorrect: true},
    ],
},
{question: "Which command delete remote branch? ",
answerBank: [
    {answer: "C. git push --delete[name of remote]", isCorrect: true},
    ],
},
{question: "Which command defines user email? ",
answerBank: [
    {answer: "C. git config --global user.email", isCorrect: true},
    ],
},
{question: "Which command pull specific branch from repository? ",
answerBank: [
    {answer: "C. git pull origin", isCorrect: true},],
},
{question: "Which command push specific branch from repository? ",
answerBank: [
    {answer: "C. git push origin", isCorrect: true},
  ],
},
{question: "Which command keep track of updates to the tip of branches ? ",
answerBank: [
    {answer: "C. git reflog", isCorrect: true},
  ],
},
{question: "Which command will add file tostaging area ? ",
answerBank: [
    {answer: "A. git add -A", isCorrect: true},
],
},
{question: "Which command will view changes in one line ? ",
answerBank: [
    {answer: "C. git log --pretty=oneline", isCorrect: true},
    ],
},
{question: "Which command lists all commit with commit id and commit message ? ",
answerBank: [
    {answer: "D. git log --oneline", isCorrect: true},],
},

]
export default CorrectAnswers;
