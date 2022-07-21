let CorrectAnswers = [
    {
        question: "Which command create new react app ? ",
        answerBank: [
            {answer: "C. npx create-react-app my-app", isCorrect: true},
            {summary: "To create a new react app we are using this command"},
           
        ],
    },
    {
        question: "What does myapp refers to in npx create-react-app myapp ? ",
        answerBank: [
     
            {answer: "C. name of app", isCorrect: true},
            {summary: "We First need to write command and then name of our app starting with lowercase"},
           
        ],
    },
    
    {
        question: "Which command create new react app with typecsript? ",
        answerBank: [
          
            {answer: "C. create-react-typecript my-app", isCorrect: true},
            {summary: "To create a new react app with typecript add --template typescript after name of app"},

   
           
        ],
    },
    {
        question: "Which command is used to start the React local development server ? ",
        answerBank: [
          
            {answer: "C. npm start", isCorrect: true},
            {summary: "To start development server we go to terminal and navigate to our project then type npm start."},
           
           
            
        ],
    },
    {
        question: "What is default local host port that React development server uses ? ",
        answerBank: [
          
            {answer: "D. 3000", isCorrect: true},
            {summary: "To default local port is 3000"},
        ],
    },
    {
        question: "To develop and run React code, Node.js is required ",
        answerBank: [
            {answer: "A. True", isCorrect: true},
            {summary: "Node js must be installed to run react code"},
           
        
        ],
    },
    {
        question: "Which keyword creates a constant in JavaScript ? ",
        answerBank: [
           
            {answer: "C. const", isCorrect: true},
            
        ],
    },
    {
        question: "React component names must begin with an uppercase letter ? ",
        answerBank: [
           
            {answer: "B. True", isCorrect: true},
        
        ],
    },
    {
        question: "Which operator can be used to conditionally reander React Component ? ",
        answerBank: [
            {answer: "A. &&", isCorrect: true},
          
        ],
    },
    {
        question: "When rendaring a list using Javascript map() method, what is required for each element rendered ? ",
        answerBank: [
          
            {answer: "D. key", isCorrect: true},
        ],
    },
    {
        question: "What tool does React use to Compile JSX ? ",
        answerBank: [
            {answer: "A. Babel", isCorrect: true},
         
        ],
    },
    {
        question: "What props will be available to the following component ? Car {..props} ",
        answerBank: [
           
            {answer: "C. all of them", isCorrect: true},
           
        ],
    },
    {
        question: "What is common use case for ref ? ",
        answerBank: [
      
            {answer: "D. To directly access a DOM node", isCorrect: true},
        ],
    },
    {
        question: "React can only render elements in root document element ? ",
        answerBank: [
       
            {answer: "B. False", isCorrect: true},
          
        ],
    },
    {
        question: "What is correct syntax to import a Component from React ? ",
        answerBank: [
          
            {answer: "D. import {Component} from 'react. ", isCorrect: true},
        ],
    },
    {
        question: "What is the children prop? ",
        answerBank: [
            {answer: "A. A property that let you nest components in other components", isCorrect: true},
         
        ],
    },
    {
        question: "A copy of real DOM that is kept in memory is called what ? ",
        answerBank: [
         
            {answer: "B. Virtual DOM", isCorrect: true},
            
        ],
    },
    {
        question: "Which command add bootstrap to app ? ",
        answerBank: [
            {answer: "A. npm install react-bootstarp bootstrap", isCorrect: true},
            {summary: "We use the above command to install react-bootstrap to react app "},
          
        ],
    },
    {
        question: "What is the git command that downloads respository from github ? ",
        answerBank: [
           
            {answer: "D. git pull", isCorrect: true},
        ],
    },
    {
        question: "Which command is used to upload local repository content to remote repository? ",
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
    {
        question: "After you add file it becomes ? ",
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
    {
        question: "What does CSS stand for",
        answerBank: [
          
            {answer: "B. Cascading Style Sheets", isCorrect: true},
         
        ],
    },
    {
        question: "The <Container> provides full width ",
        answerBank: [
          
            {answer: "B. False", isCorrect: true},
            {summary: "Container does not provides full width instead .container-flud classname does"},
           
        ],
    },
    {
        question: "Which of the following is the correct syntax for a button click event hander foo ?",
        answerBank: [
          
            {answer: "B. <button onClick={this.foo}>", isCorrect: true},
            
        
        ],
    },
    {
        question: "How do we write inline syle which specifies font size 12 ?",
        answerBank: [
         
            {answer: "B. style{{fontSize:'12px'}}",  isCorrect: true},
            {summary: "In React when we are styling using inline method we are supposed to use two curly braces"},
         
        ],
    },
    {
        question: "What is React JS?",
        answerBank: [
          
            {answer: "B. User-interface Framework",  isCorrect: true},
            {summary: "React is a javascript library for building user interfaces"},
           
           
        ],
    },
    {
        question: "What are two ways that data gets handled in React?",
        answerBank: [
         
            {answer: "B. state and props",  isCorrect: true},
            {summary: "There are basically two ways to handle data in react which is through state and props  "},
          
           
        ],
    },
    {
        question: "Which of the following valid component return type of React ?",
        answerBank: [
     
            {answer: "B. 1",  isCorrect: true},
            {summary: "1 is said to be valid return type"},
          
           
        ],
    },
    {
        question: "Which of the following is true regarding Babel?",
        answerBank: [
            
            {answer: "C. Both of the above", isCorrect: true},
            {summary: "Main application of babel is as compiler"},
           
           
        ],
    },
    {
        question: "In React how can we Pass data from one component to another in React.js ?",
        answerBank: [
         
            {answer: "C. Props", isCorrect: true},
            {summary: "We are using props to pass from one component to another"},
           
           
        ],
    },
    {
        question: "Which of the following is true about changing the state in  React.js ?",
        answerBank: [
           
            {answer: "B. this.setState",  isCorrect: true},
            {summary: "To change state in React we use this.setState() method when the value in state object changes"},
          
           
        ],
    },
    {
        question: "Which of the following is true about key props ?",
        answerBank: [
           
            {answer: "B. Is a way to identify the newly added element",  isCorrect: true},
            {summary: "Props help in identifying newly added elements"},
         
           
        ],
    },
    {
        question: "Which is used to keep the value of components unique?",
        answerBank: [
            {answer: "A. Key", isCorrect: true},
            {summary: "React uses a unique key prop of each child of the list to create relationship between components and DOM"},
           
           
        ],
    },
    {
        question: "Which one of the following is correct to style className?",
        answerBank: [
            {answer: "A. .classname", isCorrect: true},
            {summary: "In React we are using .className "},
          
           
        ],
    },
    {
        question: "Which one of the following will put text center of Page ?",
        answerBank: [
          
            {answer: "B. text-align: center",  isCorrect: true},
            {summary: "To set text to center we use text-align: center"},
           
        ],
    },
    {
        question: "Which one of the following will make yellow background color ?",
        answerBank: [
          
            {answer: "C. backgroud-color: yellow", isCorrect: true},
            {summary: "To change backgroud color we write backgroud-color followed the color we want"},
            
           
        ],
    },

]
export default CorrectAnswers;