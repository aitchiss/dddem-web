import Layout from '../components/Layout'
import Header from "../components/Header"
import theme from "../theme/theme"
import Head from "next/head"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
    <Layout>
        <Head>
            <title>Speakers</title>
        </Head>
        <Header title={'Speakers'}/>
        <section>
            <h1>Keynote By Dylan Beattie
                <Link target="_blank" href="https://twitter.com/dylanbeattie" onSelect={event => {
                    logEvent("twitter", "dylanbeattie")}}>
                        <a target="_blank" aria-label="Dylan Beattie: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h1>
            <h2>The Art of Code</h2>
            <p>
                Software and technology has changed every aspect of the world we live in. At one extreme are the ‘mission critical’ applications - the code that runs our banks, our hospitals, our airports and phone networks. Then there’s the code we all use every day to browse the web, watch movies, create spreadsheets… not quite so critical, but still code that solves problems and delivers services. 
            </p>
            <p>
                But what about the code that only exists because somebody wanted to write it? Code created just to make people smile, laugh, maybe even dance? Maybe even code that does nothing at all, created just to see if it was possible?
            </p>
            <p>
                Join Dylan Beattie - programmer, musician, and creator of the Rockstar programming language - for an entertaining look at the art of code. We’ll look at the origins of programming as an art form, from Conway's Game of Life to the 1970s demoscene and the earliest Obfuscated C competitions. We’ll talk about esoteric languages and quines - how DO you create a program that prints its own source code? We’ll look at quine relays, code golf and generative art, and we’ll explore the phenomenon of live coding as performance - from the pioneers of electronic music to modern algoraves and live coding platforms like Sonic Pi. 
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Dylan_Beattie.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Software Architect</i></p>
                    <p>
                        Dylan wrote his first web page in 1992 and never looked back. He's been building data-driven web applications since the late 1990s, and has worked on everything from tiny standalone websites to complex distributed systems. He's the CTO at Skills Matter in London, he's a Microsoft MVP, and he's a regular speaker at conferences and user groups, where he's spoken about topics from continuous delivery and Conway's Law to the history of the web, federated authentication and hypermedia APIs. When he's not wrangling code, Dylan plays guitar and writes songs about code. He's online at <a target="_blank" href="https://www.dylanbeattie.net">www.dylanbeattie.net</a> and on Twitter as <a target="_blank" href="https://twitter.com/dylanbeattie">@dylanbeattie</a>.
                    </p>
                </div>
            </div>
        </section>

        <section name="matt-brunt">
            <h2>Matt Brunt
                <Link target="_blank" href="https://twitter.com/Brunty" onSelect={event => {
                    logEvent("twitter", "brunty")}}>
                        <a target="_blank" aria-label="Matt Brunt: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Think like a hacker</i></h3>
            <p>
                Much in the same way that to secure a house it helps to know how to break in, knowing how to attack our systems will help us secure them. You have a lot of data in your organisations. Whether you think it's sensitive or not, it has value. Whether an attacker wants data for profit, a grudge, or just for fun we need to ensure that we don't just leave the door open for them to take what they want.            </p>
            <p>
                In this session we'll start to think like a hacker. The what, why, who, where and how of an attacking mindset will leave you with practical steps you can take away and use to start protecting your systems a little better.            
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Matt_Brunt.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Wizard</i></p>
                    <p>
                        Matt Brunt is a Developer with Helical Levity, a company educating and building the next generation of Cyber Security professionals.
                    </p>
                    <p>
                        When not tinkering with code he can be found reading comics, fighting monsters in dungeons and dragons, or drinking tea and eating jaffa-cakes.
                    </p>
                </div>
            </div>
        </section> 
        
        <section name="jessica-salisbury">
            <h2>Jessica Salisbury                
                <Link target="_blank" href="https://twitter.com/JessSalisburyy" onSelect={event => {
                    logEvent("twitter", "jesssalisbury")}}>
                        <a target="_blank" aria-label="Jessica Salisbury: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/jessica-salisbury-2a0920102/" onSelect={event => {
                    logEvent("linkedin", "jesssalisbury")}}>
                        <a target="_blank" aria-label="Jessica Salisbury: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>The Power of the Feedback Loop</i></h3>
            <p>
                From how the body knows when to stop growing to saving lives from speeding cars, the feedback loop is a mechanism that secretly underlies every corner of our existence. The concept spans schools of thought in psychology, economics, biology and neuroscience and is now emerging in the intersection of technology and behavioural science. 
            </p>
            <p>
                As technologists we are always looking to build products that are engaging and effective, and as people we strive to reach our full personal and working potential. Could the feedback loop be the piece we're all missing?
            </p>
            <p>
                In this talk we'll dive into the structure of the feedback loop, some impressive examples of how powerful they can be and we'll explore how you can harness their power in your work and personal life.  
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Jessica_Salisbury.png" alt="Jessica Salisbury" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Behavioural Psychologist and Money Coaching Project Manager at Tully.</i></p>
                    <p>
                        Jess is a Behavioural Psychologist and the Project Manager of Money Coaching at Tully, a business created to help people who are worried about money. Jess leads on Tully’s Money Coaching product which uses Open Banking data to engage consumers in positive financial decision making to improve their financial wellbeing. From helping those in debt manage their money to providing early intervention for those displaying detrimental patterns of behaviour, Jess is using her academic background in psychology to create highly personalised, data led Money Coaching that drives long term, financial behavioural change for Tully customers.                    
                    </p>
                </div>
            </div>
        </section> 
        
        <section name="anthony-dang">
            <h2>Anthony Dang                
                <Link target="_blank" href="https://twitter.com/AnthonyDotNet" onSelect={event => {
                    logEvent("twitter", "anthonydang")}}>
                        <a target="_blank" aria-label="Anthony Dang: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/anthony-dang79/" onSelect={event => {
                    logEvent("linkedin", "anthonydang")}}>
                        <a target="_blank" aria-label="Anthony Dang: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Cache me outside - Caching Methodologies and Architectures</i></h3>
            <p>
                Caching can be your best-friend or your worst best-friend. A poor cache implementation can mean the difference between experiencing blazing fast performance or unexplained random slowness, or both! It can even result in random stale (out of date) content which you can’t explain.
            </p>
            <p>
                In this presentation we will demo and compare different caching methodologies, and their perceived real world uses. We will discuss Donut cache, Memory cache, Redis, Varnish, CDNs, and many more. We will dive into demos of real world implementations which can cause unpredictable problems. Some of these are horrible, and some are face-palm.
            </p>
            <p>
                At the end of this presentation you will be aware of the different trade-offs with each caching methodology, and which might best for your situation.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Anthony_Dang.png" alt="Smiley face" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Head of Development</i></p>
                    <p>
                        Anthony is the Technical Director at Radley Yeldar (London, UK). He writes tech articles, and is a regular presenter at conferences and meetups. He loves automation and development processes, experienced in scaling high performing teams across multiple countries, a Scrum certified Agile enthusiast, and a vocal proponent of Behaviour Driven Development. Originally from Sydney, Australia, he is now based in London.
                    </p>
                </div>
            </div>
        </section> 
        
        <section name="cara-holland">
            <h2>Cara Holland
                <Link target="_blank" href="https://twitter.com/GraphicChange" onSelect={event => {
                    logEvent("twitter", "caraholland")}}>
                        <a target="_blank" aria-label="Cara Holland: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/cara-holland-71240b7/" onSelect={event => {
                    logEvent("linkedin", "caraholland")}}>
                        <a target="_blank" aria-label="Cara Holland: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Draw UX (or how to get your visual thinking groove on)</i></h3>
            <p>
                Working visually is a super power. It increases your ability to understand and share complex information, think creatively and collaborate effectively. But for lots of adults drawing at work is a huge step outside of their comfort zone.
            </p>
            <p>
                I'm a business visualiser who draws, writes and trains. 
            </p>
            <p>
                In this session I will show you how to use visual skills throughout the UX journey, transforming your engagement and problem solving skills, and how you already have the functional drawing ability you need, even if you can barely draw a stick. Honest.
            </p>
            <p>
                By the end of this session you will understand WHY working visually is so effective, but more importantly you'll get to see HOW it works by trying out visual exericises yourself.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Cara_Holland.png" alt="Cara Holland" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Founder and head doodler at Graphic Change</i></p>
                    <p>
                        Founder, trainer and author of best selling book Draw a Better Business, Cara Holland has been working visually with companies as varied as Google and the NHS for the last 13 years. 
                        She also co-runs the Graphic Change Academy which has trained people in over 69 countries how to start drawing at work.                    
                    </p>
                </div>
                </div>
        </section> 
        
        <section name="mark-towndrow">
            <h2>Mark Towndrow
                <Link target="_blank" href="https://twitter.com/mark_towndrow" onSelect={event => {
                    logEvent("twitter", "marktowndrow")}}>
                        <a target="_blank" aria-label="Mark Towndrow: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>How to be a better developer - without learning another JavaScript framework</i></h3>
            <p>
                It’s increasingly important to make time for self-improvement and career development, but it’s hard to know where to focus your efforts. As developers we’re often attracted to learning new technologies and languages, however I’d like to make the case for a number of non-technical areas of development that I believe can give you a huge advantage in your career.
            </p>
            <p>
                In this talk, I’ll share a number of skills that I’ve found compliment a technical toolbelt, such as generating and maintaining momentum within your team and looking beyond requirements to identify opportunities for your business. I’ll also share some tips to help fast track your progress, exploring why it’s important to seek out and identify the gaps in your skill set, and how to seize opportunities to strengthen these areas.
            </p>
            <p>
                It’s my hope that this talk will give you a different perspective of what makes a great developer, as well as the tools and motivation to broaden your expertise so that you can make a bigger impact in your organisation.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Mark_Towndrow.png" alt="Mark Towndrow" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Head of Engineering at OpenWrks</i></p>
                    <p>
                        Gained a Software Engineering degree at Nottingham Trent University, worked at TDX Group then Equifax before moving to Bizfitech / OpenWrks. Enjoy coding primarily in .NET (Core) and React but love playing with new technologies                   
                    </p>
                </div>
            </div>
        </section> 
                
        <section name="galiya-warrier">
            <h2>Galiya Warrier
                <Link target="_blank" href="https://twitter.com/galiyawarrier" onSelect={event => {
                    logEvent("twitter", "galiya-warrier")}}>
                        <a target="_blank" aria-label="Galiya Warrier: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/galiyawarrier/" onSelect={event => {
                    logEvent("linkedin", "galiya-warrier")}}>
                        <a target="_blank" aria-label="Galiya Warrier: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Deep Learning in the world of little ponies</i></h3>
            <p>
                In this talk, we will discuss computer vision, one of the most common real-world applications of machine learning. We will deep dive into various state-of-the-art concepts around building custom image classifiers - application of deep neural networks, specifically convolutional neural networks and transfer learning. We will demonstrate how those approaches could be used to create your own image classifier to recognise the characters of "My Little Pony" TV Series [or Pokemon, or Superheroes, or your custom images].
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Galiya_Warrier.png" alt="Galiya Warrier" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Cloud Solution Architect (AA and AI), Microsoft</i></p>
                    <p>
                        I'm a Cloud Solution Architect at Microsoft, where I help enterprise customers adopt Advanced Analytics and Artifical Intelligence services on Microsoft Azure cloud.
                    </p>
                </div>
            </div>
        </section> 
                        
        <section name="robin-ninan">
            <h2>Robin Ninan</h2>
            <h3>Talk: <i>Ditching the test pyramid in a microservices era</i></h3>
            <p>
                We have all heard tales of the infamous test pyramid. Some of us have scaled the pyramid, some camped halfway and some dare not even attempt. Time and time again, I've heard of the test pyramid in multiple talks, test articles and blog posts, but not many have dared stray away from it. Why do we often return to the same solution for every test problem? 
            </p>
            <p>
                What if we had another way forward; one that did not involve a pyramid. I once too advocated for the test pyramid in the good old times of monoliths. Times have changed.
            </p>
            <p>
                We are now in the era of microservices and like many others, I found myself on shaky grounds with the test pyramid. It baffles me how little effort has been made to redefine or re-evaluate our quality assurance strategies. Whilst advances and breakthroughs are ripe in software development, our quality assurance processes and strategies often trail behind. 
            </p>
            <p>
                So why had I found myself on shaky grounds with a test strategy that stood the test of time for so long? In this session, we unravel why the onset of microservices shook the pyramid and we explore how we could succeed without having to scale the pyramid.
            </p>
            <p>
                If you, like me started off with the search for a better test strategy that has been tried and tested in the microservices furnace and ended up unsatisfied with the answers; let me introduce you to a new era.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Robin_Ninan.png" alt="Robin Ninan" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Senior QA @ Koodoo.io</i></p>
                    <p>
                        Senior QA at Koodoo. Seasoned Quality Assurance Engineer with an eye for test tools, strategies and architecture.
                    </p>
                </div>
                </div>
        </section> 
        
        <section name="ian-johnson">
            <h2>Ian Johnson
                <Link target="_blank" href="https://twitter.com/ijohnson_tnf" onSelect={event => {
                    logEvent("twitter", "ianjohnson")}}>
                        <a target="_blank" aria-label="Ian Johnson: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Reasonable Code</i></h3>
            <p>
                In a reasonable a system (i.e. a system that helps me to understand it, to reason about it) I should be able to understand how to make a change without holding the entire system in my head. I should be able to reason where the change needs to be made and reason about the impact it will have.
            </p>
            <p>
                I want to explore what reasonable means to me, from the processes of the team all the way down to an individual block of code. Along the way, we will encounter existing frameworks, tools, and patterns that our community has developed over the years to help us to reason about our code and processes; I feel that they have often been misused and end up creating the opposite effect, adding unnecessary complexity to how we work.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Ian_Johnson.png" alt="Ian Johnson" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Software developer, sketch noter</i></p>
                    <p>
                        Ian is a software developer working at Redgate, a company that develops tools for developers and database administrators.
                    </p>
                    <p>
                        Ian is passionate about writing maintainable code that delivers on the needs of users. Though he considers himself an introvert, Ian loves talking with other developers, learning from their experiences and sharing his own.
                    </p>
                    <p>
                        Outside of work, Ian is a passionate Star Wars fan and has been known to make the occasional really bad pun, but all of his code is "no-pun sourced" (sorry, couldn't resist).
                    </p>
                    <ul>
                        <li>
                            <Link href="https://twitter.com/ijohnson_tnf">
                                <a target="_blank" aria-label="Ian Johnson: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
        </section> 

        <section name="samathy-barratt">
            <h2>Samathy Barratt
                <Link target="_blank" href="https://twitter.com/samathy_barratt" onSelect={event => {
                    logEvent("twitter", "samathybarratt")}}>
                        <a target="_blank" aria-label="Samathy Barratt: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>This is a talk about Nothing.</i></h3>
            <p>
                NULL, None, 0, nullptr, nil, NaN. Every programming language represents the concept of nothing, zero or just 'not a thing' in a different way.
            </p>
            <p>
                This talk looks at the various different representations of 'nothing' in programming languages, exploring how the concept has developed over time, how representations differ and what each method has over another one.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Samathy_Barratt.png" alt="Samathy Barratt" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Magical Code Fairy</i></p>
                    <p>
                        Samathy is an inquisitive code fairy who strives to understand complex computer science problems and loves to help others do the same. 
                    </p>
                    <p>
                        A Python programmer by day, and a passionate D programmer by night, she likes good challenges, good code and good coffee.
                    </p>

                </div>
            </div>
        </section> 

        <section name="ian-cooper">
            <h2>Ian Cooper
                <Link target="_blank" href="https://twitter.com/icooper" onSelect={event => {
                    logEvent("twitter", "iancooper")}}>
                        <a target="_blank" aria-label="Ian Cooper: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/ian-cooper-2b059b/" onSelect={event => {
                    logEvent("linkedin", "iancooper")}}>
                        <a target="_blank" aria-label="Ian Cooper: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>How to Escape The Distributed Monolith</i></h3>
            <p>
                Microservices were all the rage, so you broke up your monolith. The services talk to each other by gRPC, you use a service mesh to route and load balance, and provide reliability oriented computing, you are fully buzzword compliant.
            </p>
            <p>
                Yet something seems to be wrong.
            </p>
            <p>
                You can't easily release software from one team, without coordinating with teams creating other. Testing has to be end-to-end to flush out problems or risk your team creating breaking changes for another team. Your 'heavy-lifters', whether you call the principals or architects seem to spend all their time on Docker, K8s, Istio and a whole slew of infrastructure technologies. Your system won't run without them, and you feel locked in.
            </p>
            <p>
                What happened?
            </p>
            <p>
                In this talk we look at the emerging world of "smart proxies and dumb endpoints" and ask whatever happened to the vision of "smart endpoints and dumb pipes", and what you can do to change course and deliver on the original promises of microservices to allow your teams to release frequently and independently of each other. And become masters of your tech stack, not its servants.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Ian_Cooper.png" alt="Ian Cooper" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Coding architect, pierced, bearded, tattooed</i></p>
                    <p>
                        Polyglot Coding Architect in London, founder of #ldnug, speaker, tabletop gamer, geek. Tattooed, pierced, and bearded. The 'guv' on @BrighterCommand
                    </p>
                </div>
            </div>
        </section> 

        <section name="helen-joy">
            <h2>Helen Joy
                <Link target="_blank" href="https://twitter.com/LittleHelli" onSelect={event => {
                    logEvent("twitter", "helenjoy")}}>
                        <a target="_blank" aria-label="Helen Joy: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/helencjoy/" onSelect={event => {
                    logEvent("linkedin", "helenjoy")}}>
                        <a target="_blank" aria-label="Helen Joy: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Whose Design is it Anyway? - In introduction to inclusive design and research</i></h3>
            <p>
                As creators of products and services, we’re pretty good at thinking we’ve got it all sussed. We map user journeys, we create roadmaps, we write user stories. We know what we want people to do; what actions we want them to take. But do we really know who these people are? Do we really know what they need? Do we take the time to find out, or are we building products and services based on our own assumptions and biases?
            </p>
            <p>
                And what about those who lack our digital privilege? Digital exclusion is a reality for many people. It’s our responsibility to look out for everyone, not just those who are the most visible or the easiest to design for.
            </p>
            <p>
                As technologists, we have the power to massively hinder or improve lives; not those of ‘users’ but of people. This talk looks at what it means to be digitally excluded and how by adopting a practical user research-led attitude to design, we can create products that are not just appealing to us, but life-changing to those who use them.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Helen_Joy.png" alt="Helen Joy" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>UX Consultant at SPARCK</i></p>
                    <p>
                        Helen Joy is a UX consultant and user researcher at SPARCK with a focus on universal and inclusive design practices. She's an organiser of Women in Tech Nottingham, working to promote inclusivity within the tech industry and raise the profile of talented female and gender minority speakers. When not consulting or speaking at events, Helen is an avid coffee drinker and hot yoga fan.
                    </p>
                </div>
            </div>
        </section> 

        <section name="joel-hammond-turner">
            <h2>Joel Hammond-Turner
                <Link target="_blank" href="https://twitter.com/Rammesses" onSelect={event => {
                    logEvent("twitter", "joelhammondturner")}}>
                        <a target="_blank" aria-label="Joel Hammond-Turner: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/joelht/" onSelect={event => {
                    logEvent("linkedin", "joelhammondturner")}}>
                        <a target="_blank" aria-label="Joel Hammond-Turner: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>You're the Tech Lead - *you* fix it!</i></h3>
            <p>
                Over the last couple of years, I've presented 20 tricks and tips that I've found invaluable as a Tech Lead. But in this session, I want to turn things around and look at applying some of those to solving specific issues that are common within many software development teams.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Joel_Hammond-Turner.png" alt="Joel Hammond-Turner" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Tech Lead, Landmark Information Group</i></p>
                    <p>
                        I've a very broad experience of software development over 15 years and a passion for both technology and elegance in my solutions that make me an extremely capable software architect.
                    </p>
                    <p>
                        Personable and professional, I revel in complex challenges, but always make time to coach and mentor team members.
                    </p>
                </div>
            </div>
        </section> 

        <section name="zac-braddy">
            <h2>Zac Braddy
                <Link target="_blank" href="https://twitter.com/ZackerTheHacker" onSelect={event => {
                    logEvent("twitter", "zacbraddy")}}>
                        <a target="_blank" aria-label="Zac Braddy: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/zac-braddy-17a81b22/" onSelect={event => {
                    logEvent("linkedin", "zacbraddy")}}>
                        <a target="_blank" aria-label="Zac Braddy: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>All the mistakes I've made trying to implement Microservices</i></h3>
            <p>
                We're now entering the next age of Microservices. For about a decade now we've been doing battle with the pointy haired bosses of the world to convince them of what seems so painfully obvious to us; that there are many varied virtues of microservices architecture. 
            </p>
            <p>
                Now that they all have Netflix accounts and they've seen the benefits first hand we now seem to have those same bosses bursting into the office waving their trade magazine and asking us if we've heard about this "micro-system" thing. Flustered, we're having coming to terms now with how we actually deliver on our lofty promises without Amazon's finances and resources. 
            </p>
            <p>
                Some people have been getting it right the first time they've tried which is great! Other people, like me, have got it right as well.....but....not before getting it wrong repeatedly for oh so many different reasons! So, I guess that makes me an expert, right?! 
            </p>
            <p>
                Come listen as I shamefully regale you with all ways in which I've ham-fisted the most elegant architecture currently known to humanity in hopes that I might save you from the same sleepless nights.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Zac_Braddy.png" alt="Zac Braddy" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Lead Developer @Koodoo.io</i></p>
                    <p>
                        Zac is a Lead Fullstack Javascript developer at Koodoo.io where he helps to try and save people money on their mortgages. This makes him feel super good about how he spends his days.
                    </p>
                    <p>
                        Zac has been developing for a number of years, 5 or 6 I think, I don't know who is counting? In that time has seen a very diverse set of tech and industries. Up until his current role he was working with the .NET stack so even languages are sacred to him. For Zac it's all about the next challenge and in the past that thirst for knowledge has seen him working with everything from hulking 20 year old Classic ASP monoliths to greenfield node microservices on bleed edge architecture and good amount of stuff in between.
                    </p>
                    <p>
                        On the side Zac is active in the developer community writing blog posts, doing talks and mentoring other developers through their journeys in meet ups and online. When he isn't in front of his computer at work he is out geocaching with his sons and wife, playing D and D with friends or......let's face it probably on the computer still coding or gaming.
                    </p>
                </div>
            </div>
        </section> 

        <section name="neil-oconnor">
            <h2>Neil O'Connor
                <Link target="_blank" href="https://twitter.com/1stmanonthesun" onSelect={event => {
                    logEvent("speakers", "neiloconnor")}}>
                        <a target="_blank" aria-label="Neil O'Conner: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>CTO secrets: How to get the best companies fighting to hire you</i></h3>
            <p>
                As a CTO, I spend a lot of my time hiring talent and building high performance development teams. I have hired hundreds of software professionals over the years, and I still insist on interviewing every candidate personally. I think I’ve got a pretty good hit rate: my teams have all had great reputations in their local tech community, and I would rehire - in a heartbeat - almost everyone I’ve hired in the past.
            </p>
            <p>
                It’s never been a better time to be working in the software industry. Your skills are in demand, but that doesn’t mean that everyone gets to work on the coolest tech in the most forward thinking companies. How do you set yourself apart from the crowd and get those companies falling over themselves to hire you?
            </p>
            <p>
                In this session, I’ll share some of my secrets about what I look for in candidates. What is it that makes a candidate stand out? What do I look for in their CV? What is it about how they approach the interview or the technical assessment that impresses me? How important is formal education? What do I look for in how the candidate spends their spare time?
            </p>
            <p>
                One myth to clear up right here: not everyone has to be a “rockstar developer”. I look for a balanced mix of skills in every candidate, and I’m often much more impressed by the quiet one who has demonstrated great judgment, insight or a capacity to learn. To continue the rockstar analogy, I’d much rather hire the reliable drummer or the skilful backing singer over the egotistical and unpredictable frontman!
            </p>
            <p>
                This session will offer clear, practical advice on how you can maximise your personal value in the industry. Some of it will be quick and easy to achieve, while some of it will require you to make longer term changes to your mindset. But whether you are an old hand eyeing your next career move, or you are looking for your first job in the industry, there will be something in this talk for you.
            </p>
            <h3>Bio</h3>
            <div className="row">
                    <div className="columnleft">
                        <img src="/static/speakers/Neil_OConnor.png" alt="Neil O'Connor" className="speakerpic"/>
                    </div>
                    <div className="columnright">
                        <p><i>CTO at Koodoo, a Nottingham-based fintech in the Blenheim Chalcot group</i></p>
                        <p>
                            Neil has been building forward-thinking development teams since 1862. He was founding CTO at local companies Koodoo and Oakbrook Finance, and has worked in a wide array of techie roles in numerous industries. He believes that if something is worth doing, it's worth doing right, and aims to create environments where development teams can excel at what they do best.
                        </p>
                    </div>
                </div>
        </section> 

        <section name="simon-painter">
            <h2>Simon Painter
                <Link target="_blank" href="https://twitter.com/madSimonJ" onSelect={event => {
                    logEvent("twitter", "simonpainter")}}>
                        <a target="_blank" aria-label="Simon Painter: Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/simon-painter-45a05217/" onSelect={event => {
                    logEvent("linkedin", "simonpainter")}}>
                        <a target="_blank" aria-label="Simon Painter: LinkedIn"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                </Link>
            </h2>
            <h3>Talk: <i>Hacking C#: Development for the Truly Lazy</i></h3>
            <p>
                I don't know about you, but I'm a lazy developer. What do I mean by lazy? I don't mean I don't want to do my work - far from it - I mean that I hate to write out a great deal of code to get the job done. I want to accomplish my goals with as little effort as possible.
            </p>
            <p>
                One of my pet hates is writing enhancements that involve copying and pasting blocks of code, changing a variable name, then leaving everything else the same. I hate having to consider each and every possible null reference exception, and adding in a whole ton of boilerplate to handle it. I hate having to spent ages jumping back and forth in a legacy codebase, trying to understand what it actually does!
            </p>
            <p>
                What's the alternative? In this talk, I'll demonstrate a way of working that avoids all this unneccesary work, and gives you more time to do something more productive.
            </p>
            <p>
                We'll look at:
            </p>
                <li> - Functional Programming - what benefits does this increasingly popular paradigm bring us to cut down coding effort</li>
                <li>- Linq and Generics - These have been a part of C# for a long time now, and are some of the most powerful features available in the language, but hardly anyone seems to be using them effectively</li>
                <li>- MetaProgramming - break open C# and take it to the next level with code that describes how to generate code</li>
            <p>
                Our goal is to write code in as few lines as possible that provides the greatest amount of impact. We also want code that's readable, and easily maintainable. We want to think smart, and think...Lazy.
            </p>
            <h3>Bio</h3>
            <div className="row">
                <div className="columnleft">
                    <img src="/static/speakers/Simon_Painter.png" alt="Simon Painter" className="speakerpic"/>
                </div>
                <div className="columnright">
                    <p><i>Senior Software Developer at EuroFins Scientific</i></p>
                    <p>
                        I've been working as a .NET developer for over 12 years now in a variety of industries including government, retail and manufacturing. But as a coder, I've been playing with making computers do whatever my crazed imagination could devise since I was old enough to read my Dad's copy of the ZX Spectrum BASIC coders manual. 
                    </p>
                    <p>
                        I've been speaking about Functional C# at various user groups and conferences around the UK, USA, and India, and am particularly interested in seeing just how far we can push the capabilities of C#.
                    </p>
                    <p>
                        When I'm not coding, or running after my two small children, I have been known to enjoy the classic series of Doctor Who, Fighting Fantasy Gamebooks, Cryptic Crosswords, and rather more coffee than is probably good for me.
                    </p>
                </div>
            </div>
        </section> 

        <style jsx>
            {`
            section {
                max-width: ${theme.sizes.maxContentWidth};
                padding: ${theme.sizes.contentPadding};
                margin: auto;
            }
            section center-video{
                text-align: center;
            }
            .columnright {
                padding: 10px;
                float: right;
                width: 70%;
            }
              
            .columnleft {
                padding: 10px;
                float: left;
                width: 25%;
            }
              
            .row:after {
                content: "";
                display: table;
                clear: both;
            }

            .speakerpic{
                width:95%;
                border-radius: 50%;
            }

            .iframe-container {
                position: relative;
                overflow: hidden;
                padding-top: 56.25%;
                margin: 10px 10px;
            }
            .iframe-container iframe {
                position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border: 0;
            }
            ul {
                display: flex;
                margin: 0;
                padding: 10px;
                flex-flow: row;
                justify-content: space-evenly;
                flex-wrap: nowrap;
            }
            li {
                margin: 0;
                padding: 10px;
                list-style: none;
                list-style-type: none;
                text-align: left;
                flex-basis: 0;
                flex-grow: 1;
            }

            @media only screen and (max-width: 810px) {
                .speakerpic{
                    display: none;
                } 
                .columnright{
                    width: 100%;
                    padding-top:0px;
                }
                .columnleft{
                    padding-top:0px;
                }
            }
        `}
        </style>
    </Layout>
)