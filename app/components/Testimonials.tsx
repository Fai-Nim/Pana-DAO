import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Testimonials() {
  return (
    <Stack
      
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <img src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" alt="" />
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        The internet is without a doubt the most important technological development in human history. 
        Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. 
        Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
        <br /> <br />
        Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. 
        Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
      </Text>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
       The Program in a Nutshell: Earn While You Learn
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. 
       It resembles a cross between a corporate venture and an educational project.
      </Text>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
       Program of Studies
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       This curriculum is intended for beginners who want to learn software development from the ground up.
      The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. 
      It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. 
      The emphasis will be on hands-on learning by educating students to produce projects. 
      To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. 
      It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
      </Text>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
       Core Courses (Common in All Specializations):
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Every participant of the program will start by completing the following three core courses:
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
      Quarter I (Core)  <br />
      CS-101: Object-Oriented Programming using TypeScript 
      <br />  <br />
      Quarter II (Core)  <br />
      W2-201:  Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
      <br />  <br />
      Quarter III (Core)  <br />
      $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development   
      </Text>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
       Specialized Tracks:
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       1. Web 3.0 (Blockchain) and Metaverse Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
       </Text>
        <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
       Quarter IV <br /> 
       W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
      <br /> <br />
       Quarter V <br />
       MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
      </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       2. Artificial Intelligence (AI) and Deep Learning Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
      Quarter IV <br />
      AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
      <br /> <br />
      Quarter V <br />
      AI-361: Deep Learning and MLOps
         </Text>
        <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       3. Cloud-Native Computing Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. 
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
         Quarter IV <br />
         CN-351: Certified Kubernetes Application Developer (CKAD)
         <br /> <br />
         Quarter V <br />
         CN-361: Developing Multi-Cloud APIs using CDK for Terraform
         </Text>
         <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       4. Ambient Computing and IoT Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. 
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
        Quarter IV <br />
        AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices
        <br /> <br />
        Quarter V <br />
        AC-361: Embedded Programming using C and Rust
         </Text>
         <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       5. Genomics and Bioinformatics Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. 
       This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
        Quarter IV <br />
Bio-351: Python for Biologists
<br /> <br />
Quarter V <br />
Bio-361: Bioinformatics with Python
         </Text>
         <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       6. Network Programmability and Automation Specialization
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
        </Text>
        <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'3xl'}>
        Quarter IV <br />
NPA-351: CCNA 200-301 Certification
<br /> <br />
Quarter V <br />
NPA-361: Network Programmability and Automation
         </Text>
         <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       The Outcome for Participants of the Program
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
      <br /> <br />1. <a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">Top 5 Metaverse jobs that will rule the future of tech industry</a>
      <br /> <br />
2.  <a href="https://web3.career/web3-salaries/blockchain-developer">Blockchain Developer Salary - Jun 2022</a> 
<br /> <br />
3.  <a href="https://thedefiant.io/web3-soaring-salaries/">Web3 Salaries Soar to $750,000 for Rank-and-File Devs</a>
<br /> <br />
4.  <a href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</a>
<br /> <br />
5.  <a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">How To Become Metaverse Developer: Scope, Skills, and Salary</a>
<br />
     </Text>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Relevant Information Links:
      </Text>
      <a href="https://www.piaic.org/">Admission Website</a>
      <a href="https://www.panaverse.co/">Syllabus and Community Website</a>
      <a href="https://www.facebook.com/groups/panaverse">Facebook</a>
      <a href="https://www.youtube.com/@panaverse/streams">YouTube Live Channel</a>
      <a href="https://github.com/panaverse">GitHub Repos</a>
      <a href="https://twitter.com/Panaverse_edu">Twitter</a>
      <Text
        as='b'
        fontSize={{ base: 'xl', md: '4xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Detailed Course Syllabus
      </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Quarter I (Core) <br /> <br />
       CS-101: Object-Oriented Programming using TypeScript <br /> <br />
       Duration: 13 Weeks 
      </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>      
Course Description: 
      </Text>
       <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. 
       </Text>
       <Text
        as='b'
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>      
Course Outline: 
      </Text>
      <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      1. HTML and CSS (Homework) 
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">Learn HTML by Hira Khan (Watch Recorded Videos)</a>
       <br /> <br />
       <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob">Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a>
       </Text>
       <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      2. Web 3.0 and Metaverse Theory
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       <a href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing">Introduction to Panaverse DAO</a>
       <br /> <br />
       <a href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing">Web 3.0 User Guide</a>
       <br /> <br />
       Complete Web 3 Assignments included in the Web 3 User Guide
       <br /> <br />
       <a href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing">Virtual and Augmented  Metaverse User Guide</a>
       </Text>
       <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      3. Fundamentals of JavaScript 
      <a href="https://262.ecma-international.org/"> (ECMAScript 2022 Language Specification)</a>
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       <a href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo">Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</a>
       <br /> <br />
       <a href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4">Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</a>
       <br /> <br />
       <a href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional">JavaScript Book Code</a>
       <br /> <br />
       <a href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">Getting Started Exercises with JavaScript and Node.js</a>
       <br /> <br />
       Fundamentals of JavaScript and Node.js Quiz
       <br /> <br />
       Topics Covered in the Quiz:
       <br /> <br />
       A. Background of JavaScript and How to use JavaScript in Browser <br /> <br />
       B. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional) <br /> <br />
       <a href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing">C. Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm</a>
       <br /> <br />
       <a href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing">D. How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs</a>
       <br />
       Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
       <br /> <br />
        E. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional) <br /> <br />
         F. Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional) <br /> <br />
          G. Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional) <br /> <br />
         H. Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional) <br /> <br />
          I. Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional) <br /> <br />
          <a href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript">J. JavaScript promises, mastering the asynchronous</a>
       <br /> <br />
       <a href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg">K. New JavaScript Features in ECMAScript 2022 and 2021</a>
       </Text>
       <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      4. Object-Oriented Programming with TypeScript
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      <a href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</a>
       <br /> <br />
       <a href="https://github.com/panaverse/learn-typescript">Learning Repository</a>
       <br /> <br />
       <a href="https://www.learningtypescript.com/">In Class Companion projects and articles for Learning TypeScript</a>
       <br /> <br />
       <a href="https://github.com/panaverse/typescript-node-projects">Homework Project</a>
       <br /> <br />
       Fundamentals of TypeScript Quiz
      <br /> <br />
	TypeScript Professional Proficiency Quiz
      </Text>
       <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      5. TypeScript for React
      </Text>
       <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      <a href="https://profy.dev/article/react-typescript">Minimal TypeScript Crash Course For React With Interactive Code Exercises</a>
      </Text>
      <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      Quarter Break Assignments and Quizzes 
      </Text>
      <Text
      
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      During the Quarter Break, we do the following Assignments:
       <br /> <br /> 
        <a href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge">1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge </a>
       <br /> <br /> 
        <a href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app">2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app </a>
     <br /> <br /> 
        <a href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui ">3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui </a>
         <br /> <br /> 
        <a href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing ">4. Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: </a>
      <br /> <br /> 
      The best-developed Website will be hosted on <a href="www.panaverse.co">www.panaverse.co</a> domain.
      <br /> <br /> 
      <a href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing "> 5. Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: </a>
      <br /> <br /> 
      The best-developed Website will be hosted on <a href="www.panaverse.co">www.panaverse.co</a> domain.
      <br /> <br /> 
     After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:
      </Text>
      <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
     1. Fundamentals of Version Control with Git Quiz
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
     <a href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</a>
     <br />  <br /> 
     Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther 
     <br />  <br /> 
We will also cover these readings:
<br />  <br /> 
<a href="https://help.github.com/articles/markdown-basics/">https://help.github.com/articles/markdown-basics/</a>
<br />  <br /> 
<a href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github">http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github</a>
<br />  <br /> 
<a href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences">http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences</a>
<br />  <br /> 
<a href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">https://git-scm.com/book/en/v2/Git-Branching-Rebasing</a>
<br />  <br /> 
<a href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches</a>
<br />  <br /> 
For practice: 
<br />  <br /> 
<a href="https://try.github.io/levels/1/challenges/1">https://try.github.io/levels/1/challenges/1</a>
<br />  <br />
Homework:
<br />  <br />
<a href="https://www.datacamp.com/courses/introduction-to-git-for-data-science">https://www.datacamp.com/courses/introduction-to-git-for-data-science</a>
<br />  <br />
Git Cheatsheet
<br />  <br />
<a href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html</a>
      </Text>
      <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
    Git Quiz
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
    Total Questions: 60, Total Time: 75 minutes
      </Text>
      <Text
      as='b'
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
    2. TypeScript Proficiency Quiz
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
   Total Questions: 63 <br />  <br />
Duration: 120 minutes  <br />  <br />
Study Material:
<br />  <br />
<a href="https://github.com/panaverse/learn-typescript">https://github.com/panaverse/learn-typescript</a>
      </Text>
    </Stack>
    
  );
}