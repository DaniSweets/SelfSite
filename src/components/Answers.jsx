export default function Answers() {

    const questionsWithAnswers = [
        {
            question: "Are you currently employed?",
            answer: "I am not currently employed."
        },
        {
            question: "What motivated you to become a web developer?",
            answer: "I found myself in the workforce being drawn toward computer-based problem solving, and when possible even created programs to help me accomplish my work efficiently. I realized that I would be happier and more fulfilled if I could problem solve full time as my main profession."
        },
        {
            question: "What programming languages are you familiar with?",
            answer: "I am familiar with JavaScript, HTML5, and CSS3."
        },
        {
            question: "How do you structure a web page using HTML5?",
            answer: "For a typical page, I would create a navigation bar within the header of the body. I would then create a section tag to house some column articles. In the footer I’d justify links to sources or social media and center text referencing licensure. I’d make sure to link my styles in the head and scripts at the end of the body."
        },
        {
            question: "How do you handle errors in JavaScript?",
            answer: "I handle errors in JavaScript by creating logic to check for null values and verify functions are using correct data types. I also use try/catch statements within my functions to handle possible errors."
        },
        {
            question: "How do you optimize website performance?",
            answer: "While I don’t have much experience personally, I know I can optimize website performance by creating efficient logic, concise and asynchronous API calls, and using as-small-as-possible files. I am aware there are many methods to optimize a site, and look forward to learning and gaining more experience with them."
        },
        {
            question: "Can you describe a challenging problem you faced in a previous project and howyousolvedit?",
            answer: "A challenging problem I faced in a previous project was when I first created a full stack application in school that had a failing API call. In this particular application, the authorization middleware was creating a loop that the page couldn’t get past. I commented out different parts of code until I found the main chunk the issue was in. I then reached out to a TA who suggested creating break points to narrow down the specific point where the issue was. Once I was able to find that, I could see where the code was catching itself up and was able to fix it."
        },
        {
            question: "Explain the concept of responsive design.",
            answer: "Responsive design is a design concept in which a page will be modified according to different viewport sizes, frequently by using media queries. Each size will have a slightly different layout to be optimized for use with that screen size."
        },
        {
            question: "How do you organize your workflow to complete web development projects?",
            answer: "I organize my workflow by physically writing down my tasks for the current project, then breaking those down into smaller subtasks. I will create deadlines for myself to work on the subtasks to fit in line with the time I have to finish the larger tasks. This way, if I run into an issue with a smaller task, I will have time to debug that issue before moving onto the next. Upon writing the code itself, I’ll make sure to create a feature branch, and pull from main before pushing up new code to ensure there are no merge conflicts. Once I’ve done everything needed for the current feature, I’d then create a pull request and notify my team that it’s ready for review."
        },
        {
            question: "How do you stay updated on current technology trends, news or products?",
            answer: "I stay up to date with current technology trends, news, and products by following tech influencers on LinkedIn and YouTube."
        },
        {
            question: "What steps have you taken in the past six months to develop your skills?",
            answer: "In the past six months, I have graduated my schooling through the University of Kansas. I have continued my education since then by starting to learn Angular, as it seems useful and has been interesting to learn."
        },
        {
            question: "Would you be willing to learn new coding languages to complete projects?",
            answer: "I am willing to learn new coding languages in order to complete projects. Any opportunity to learn something new is a win for me, and will only help my ability to work on any project moving forward."
        },
        {
            question: "What is your favorite framework to work in?",
            answer: "My favorite framework to work in would have to be React. I find it very intuitive and easy to compartmentalize logic within components. When I was initially considering web development programs, I noted that React and Angular seemed to be the most widely used currently, and wanted to make sure I chose a program that included one of those two. Upon using React, I have enjoyed how efficient it is. In my limited experience with Angular since school, I’ve found it a little bulkier. I understand the usefulness of Angular, but still prefer React for my own use, at least for now."
        },
        {
            question: "Describe your daily routine as a junior web developer.",
            answer: "My routine as a junior web developer has been to practice a very consistent morning routine, then move into my home office to focus on work without distractions. I’d check with my team to see if there are any pull requests to review, and then start working on my own feature. I’d make sure to be in contact with my team throughout the day so that we can collaborate on issues when they arise."
        },
        {
            question: "What makes you stand out from other junior web developer candidates for this position?",
            answer: "I am the type of person that is always learning new things, and tinkering with things I don’t understand yet. I have a lot of experience with creative problem solving and enjoy finding solutions that can make everyone happy. I am very adaptable, and tend to learn new concepts and procedures quickly."
        }
    ]

    return (
        <div>
            {questionsWithAnswers.map(function (props) {
                return (
                    <section className="m-4">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">{props.question}</p>
                            </header>
                            <article className="card-content">
                                <p>{props.answer}</p>
                            </article>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}