let QuestionBank = [
  {
    question:
      "What is the git command that downloads respository from github ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git commit", isCorrect: false },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git pull", isCorrect: true },
    ],
  },
  {
    question:
      "Which command is used to upload local repository content to remote repository? ",
    answerBank: [
      { answer: "A. git push", isCorrect: true },
      { answer: "B. git commit", isCorrect: false },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command downloads existing Git repository to local ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git commit", isCorrect: false },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: true },
    ],
  },
  {
    question:
      "Which command create snapshot of staged changes along a timeline of Git Project ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git commit", isCorrect: true },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command is used to start new repository ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git init", isCorrect: true },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command add one or more to starging area ? ",
    answerBank: [
      { answer: "A. git add .", isCorrect: true },
      { answer: "B. git add", isCorrect: false },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question:
      "Which command shows difference of files that are not yet staged ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git difference", isCorrect: false },
      { answer: "C. git diff", isCorrect: true },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command unstages file ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git reset", isCorrect: true },
      { answer: "C. git fork", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command undoes all commits after specified commit ? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git reset commit", isCorrect: true },
      { answer: "C. git reset [commit]", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "Which command list all files to be committed? ",
    answerBank: [
      { answer: "A. git push", isCorrect: false },
      { answer: "B. git diff -tree", isCorrect: true },
      { answer: "C. git list", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question:
      "Which command is run to check the state of your local git repository since last committed ? ",
    answerBank: [
      { answer: "A. git check", isCorrect: false },
      { answer: "B. git status", isCorrect: true },
      { answer: "C. git list", isCorrect: false },
      { answer: "D. git clone", isCorrect: false },
    ],
  },
  {
    question: "After you add file it becomes ? ",
    answerBank: [
      { answer: "A. Committed", isCorrect: false },
      { answer: "B. Modified", isCorrect: false },
      { answer: "C. Staged", isCorrect: true },
      { answer: "D. Untracked", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following is true when you use the following command ? git add -A ",
    answerBank: [
      { answer: "A. All new and updated files are staged", isCorrect: true },
      { answer: "B. Files are staged alphabetical", isCorrect: false },
      { answer: "C. All new files are staged", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is equivalent to fetch and merge ? ",
    answerBank: [
      { answer: "A. fetch", isCorrect: false },
      { answer: "B. pull", isCorrect: true },
      { answer: "C. push", isCorrect: false },
      { answer: "D. syncronize", isCorrect: false },
    ],
  },
  {
    question: "How do you supply a commit message to a commit ? ",
    answerBank: [
      { answer: "A. git message 'Hello'", isCorrect: false },
      { answer: "B. git add message", isCorrect: false },
      { answer: "C. git commit -m 'I am Coding'", isCorrect: true },
      { answer: "D. git commit 'Hello World'", isCorrect: false },
    ],
  },
  {
    question: "Git commit command use to ? ",
    answerBank: [
      { answer: "A. all of them", isCorrect: false },
      { answer: "B. push changes from local to central", isCorrect: true },
      { answer: "C. stages changes", isCorrect: false },
      {
        answer: "D. push changes from staging area to local repo",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Command use to connect remote repo with local repo? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote add", isCorrect: true },
    ],
  },
  {
    question: "Which command merge the specified branch",
    answerBank: [
      { answer: "A. git merge", isCorrect: true },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command stores temporarily modified files? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git store", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git stash", isCorrect: true },
    ],
  },
  {
    question: "Which command lists all stashed changesets? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git list stash", isCorrect: false },
      { answer: "D. git stast list", isCorrect: true },
    ],
  },
  {
    question: "Which command discards most recently stashed changest? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git stash drop", isCorrect: false },
      { answer: "D. git remote add", isCorrect: true },
    ],
  },
  {
    question: "Which command pushes all branches to your remote repository? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git push -all", isCorrect: true },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command is used to switch from one branch to another? ",
    answerBank: [
      { answer: "A. git checkout", isCorrect: true },
      { answer: "B. git switch", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote ", isCorrect: false },
    ],
  },
  {
    question: "Which command creates a new branch and also switches to it? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git switch", isCorrect: false },
      { answer: "D. git checkout -b", isCorrect: true },
    ],
  },
  {
    question: "Which commands lists all local braches in current repository? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git branch list", isCorrect: false },
      { answer: "C. git branch", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command creates a new branch? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git branch [branch name]", isCorrect: true },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command is used to give tags to the specified commit? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git tag [commitID]", isCorrect: true },
    ],
  },
  {
    question:
      "Which command shows metadata and content changes of specified commit? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git show [commit]", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git shows", isCorrect: true },
    ],
  },
  {
    question: "Which command delete the file from working directory? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git del", isCorrect: false },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git rm [file]", isCorrect: true },
    ],
  },
  {
    question: "Which command set configuration for git installation ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git config", isCorrect: true },
      { answer: "C. git configure", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command lets you move around branches? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git rebase", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command begin interative rebasing session? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git begin", isCorrect: false },
      { answer: "C. git rebase -i", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command undoes a commited snapshot? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git revert", isCorrect: true },
      { answer: "C. git undo", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question:
      "Which command allows you to fetch all objects the remote repository? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git fetch", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command view type and size information of repository? ",
    answerBank: [
      { answer: "A. git ls-tree", isCorrect: true },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git view", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command lets you search through committed trees? ",
    answerBank: [
      { answer: "A. git serach", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git grep", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command clean unnecessary files ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git gc", isCorrect: true },
      { answer: "C. git clean", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question:
      "Which command deletes objects that don't have any incoming pointers? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git prune", isCorrect: false },
      { answer: "C. git delete", isCorrect: false },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command will add specific file to remote? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git add [filename]", isCorrect: true },
      { answer: "D. git remote add.", isCorrect: false },
    ],
  },
  {
    question: "Which command views the staged changes ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git diff --staged", isCorrect: true },
      { answer: "D. git view", isCorrect: false },
    ],
  },
  {
    question: "Which command deletes a branch ? ",
    answerBank: [
      { answer: "A. git branch -D", isCorrect: true },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git delete branch", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command views remote URLs? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git view", isCorrect: false },
      { answer: "C. git remote -v", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command delete remote branch? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git rm", isCorrect: false },
      { answer: "C. git push --delete[name of remote]", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command defines user email? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git email", isCorrect: false },
      { answer: "C. git config --global user.email", isCorrect: true },
      { answer: "D. git remote add", isCorrect: false },
    ],
  },
  {
    question: "Which command pull specific branch from repository? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git pull origin", isCorrect: true },
      { answer: "D. git pull", isCorrect: false },
    ],
  },
  {
    question: "Which command push specific branch from repository? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git push", isCorrect: false },
      { answer: "C. git push origin", isCorrect: true },
      { answer: "D. git pull", isCorrect: false },
    ],
  },
  {
    question: "Which command keep track of updates to the tip of branches ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git reflog", isCorrect: true },
      { answer: "D. git pull", isCorrect: false },
    ],
  },
  {
    question: "Which command will add file tostaging area ? ",
    answerBank: [
      { answer: "A. git add -A", isCorrect: true },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git reflog", isCorrect: false },
      { answer: "D. git pull", isCorrect: false },
    ],
  },
  {
    question: "Which command will view changes in one line ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git log --pretty=oneline", isCorrect: true },
      { answer: "D. git pull", isCorrect: false },
    ],
  },
  {
    question:
      "Which command lists all commit with commit id and commit message ? ",
    answerBank: [
      { answer: "A. git init", isCorrect: false },
      { answer: "B. git connect repo", isCorrect: false },
      { answer: "C. git reflog", isCorrect: false },
      { answer: "D. git log --oneline", isCorrect: true },
    ],
  },
];
export default QuestionBank;
