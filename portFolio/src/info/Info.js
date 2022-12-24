import mine from "../img/mine.jpg"
import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kunal",
    lastName: "Dhadwal",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Welcome To My Site..",
    selfPortrait: mine, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '✈️',
            text: 'Peregrinate'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Mern Stack Developer"
        },
        {
            emoji: "📧",
            text: "kunald547@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.upwork.com/freelancers/~01a32e67eeff73a7a9",
            icon: "fa fa-laptop",
            label: 'upwork'
        },
        {
            link: "https://www.linkedin.com/in/kunal-dhadwal-b67958153",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.facebook.com/kunal.dhadwal.54?mibextid=ZbWKwL",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/kunal_dhadwal?igshid=YmMyMTA2M2Y=",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kunal-dhadwalx",
            icon: "fa fa-github",
            label: 'github'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Kunal Dhadwal. I'm a Mern Stack Developer at Edneed Technology Pvt. Ltd. I studied Software Engineering at NIIt and is also having a Bachlore's Degree in Computer Application From Indhira Gandhi University. I enjoy my work to the fullest and can help you in every possible way providing you with best solutions that can fully benefit you today and in future and your work experience with me can be the most smooth and tranparent for that You should hire me!",
    skills:
        {
            proficientWith: ['javascript','typescript', 'react','next.js','nodejs','expressjs','mongodb','mysql','aws', 'git', 'github','bitbucket', 'bootstrap', 'html5', 'css3','materialui'],
            exposedTo: ['java', 'python', 'blockchain']
        }
    ,
    hobbies: [
        {
            label: 'travelling',
            emoji: '🚢'
        },
        {
            label: 'coding',
            emoji: '🧑‍💻'
        },
        {
            label: 'listening music',
            emoji: '🎵'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project My Portfolio",
            live: "http://kunaldev.online/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/kunal-dhadwal", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]
}