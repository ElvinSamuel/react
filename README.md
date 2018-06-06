***Checkout This Page***
https://demisx.github.io/git/rebase/2015/07/02/git-rebase-keep-my-branch-changes.html

# Git Refresher

## Commands

### 'git branch'

checkout all branches of a repo

### 'git checkout <branch_name>'

switch to an EXISTING branch

#### 'git checkout -b <branch_name>

creates a NEW branch with name <branch_name>

## IMPORTANT COMMAND FOR MERGING

### Merging TO another branch FROM your current branch


#### git checkout <better_branch>
#### git merge -s ours <worse_branch>
#### git checkout <worse_branch>
#### git merge <better_branch>

etc...