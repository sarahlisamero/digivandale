const nudgesBiasesHeuristics = [
    {
        name: "Confirmation bias",
        definition: "People search for information that confirms their existing beliefs.",
        example: "A person only reads news that supports their beliefs and ignores opposing views."
    },
    {
        name: "Anchoring bias",
        definition: "People rely too much on the first piece of information they receive.",
        example: "A streaming service first displays the most expensive plan, making the mid-tier option seem more reasonable."
    },
    {
        name: "Availability heuristic",
        definition: "People judge the likelihood of an event based on how easily examples come to mind.",
        example: "After seeing multiple ads for a new fitness app, a user believes it’s the most popular and effective option."
    },
    {
        name: "Overconfidence bias",
        definition: "People overestimate their own knowledge or skills.",
        example: "A brand relies only on its past successful ad campaigns, assuming the new one will perform well without testing."
    },
    {
        name: "Hindsight bias",
        definition: "Thinking after the fact that an event was predictable.",
        example: "After an ad variation performs better, advertisers believe the winning design was the clear choice all along."
    },
    {
        name: "Loss aversion",
        definition: "People prefer to avoid loss rather than seek gain.",
        example: "An online store shows a countdown timer on a sale, making users feel they’ll lose out if they don’t buy immediately."
    },
    {
        name: "Framing effect",
        definition: "Decisions are influenced by how information is presented.",
        example: "An online ad says “Save $50!” instead of “Pay $150,” making the discount feel more appealing."
    },
    {
        name: "Dunning-Kruger effect",
        definition: "People with little knowledge overestimate their competence.",
        example: "A small business owner with no experience runs their own social media ads, believing they’re just as skilled as professional marketers, despite poor results."
    },
    {
        name: "Self-serving bias",
        definition: "Attributing success to yourself and failures to external factors.",
        example: "A digital marketer attributes a successful ad campaign to their skills, but blames poor performance on external factors like bad timing or the algorithm."
    },
    {
        name: "Sunk cost fallacy",
        definition: "People continue to invest in something they’ve already invested a lot in, even if it is no longer rational.",
        example: "A company continues pouring money into a poorly performing ad campaign, believing they must keep investing to recover the money already spent."
    },
    {
        name: "Bandwagon effect",
        definition: "People follow the crowd or a popular opinion.",
        example: "An influencer promotes a trending product, and followers buy it because -everyone else is-"
    },
    {
        name: "Negativity bias",
        definition: "Negative experiences weigh more heavily than positive ones.",
        example: "An e-commerce site highlights a single negative review on an otherwise 5-star rated product, making potential buyers focus on the negative."
    },
    {
        name: "Halo effect",
        definition: "A good impression in one area influences how we judge someone in other areas.",
        example: "A sleek, visually appealing website makes users assume the product or service is of high quality, even if the content is minimal."
    },
    {
        name: "Recency bias",
        definition: "Recent events have more influence than older ones.",
        example: "After recently visiting an online store, a user starts seeing ads for the same products everywhere, influencing them to buy."
    },
    {
        name: "Optimism bias",
        definition: "People believe they are less likely to experience negative events.",
        example: "A company runs an ad campaign for a new product, assuming it will be an instant success, despite having no market data to support that."
    },
    {
        name: "Status quo bias",
        definition: "People prefer the current situation over change.",
        example: "Why change what works? The classic taste you’ve always loved!"
    },
    {
        name: "Clustering illusion",
        definition: "People see patterns in random data.",
        example: "A brand sees a spike in engagement from a specific hashtag and assumes it’s a trend, investing more in that hashtag even though it's just a random occurrence."
    },
    {
        name: "Attribution bias",
        definition: "Attributing others' behavior to their personality, not external circumstances.",
        example: "A brand blames a poor review on a customer's bad mood, rather than considering flaws in the product or service itself."
    },
    {
        name: "Just-world bias",
        definition: "Believing that people get what they deserve.",
        example: "A brand posts an influencer ad and blames negative comments on people -not understanding the brand,- instead of considering issues with the messaging or the influencer's fit."
    },
    {
        name: "Base rate fallacy",
        definition: "Ignoring basic information in favor of specific details.",
        example: "A shopper sees a rare negative review on a mostly positive product and overestimates the likelihood of the product being faulty, ignoring the overall high rating."
    },
    {
        name: "Rosy retrospection bias",
        definition: "People remember the past more positively than it actually was.",
        example: "A brand creates an ad using vintage retro cameras, evoking nostalgic feelings that make viewers remember the past more fondly than it actually was."
    },
    {
        name: "Egocentric bias",
        definition: "People overestimate their own contribution to a group achievement.",
        example: "A brand runs an ad campaign with a personalized message, and customers believe the ad was created just for them, even though it’s part of a broader targeting strategy."
    },
    {
        name: "Pessimism bias",
        definition: "People believe that negative outcomes are more likely.",
        example: "An advertiser sees a slight dip in early ad performance and assumes the entire campaign will fail, even though it’s too soon to judge."
    },
    {
        name: "Illusory superiority",
        definition: "People believe they are better than average.",
        example: "With our product, you’ll stand out from the crowd and make smarter decisions than everyone else."
    },
    {
        name: "Survivorship bias",
        definition: "Only successful examples are considered, distorting the image.",
        example: "A startup accelerator promotes stories of wildly successful alumni but doesn’t mention those who failed using the same program."
    },
    {
        name: "Action bias",
        definition: "People feel better by doing something, even if it’s useless.",
        example: "A self-improvement brand promotes the idea that taking any action (buying their product, signing up, subscribing) is always better than hesitation."
    },
    {
        name: "Outcome bias",
        definition: "Decisions are judged based on the outcome, not the process.",
        example: "A marketing campaign focuses only on positive outcomes (before-and-after photos, testimonials) without mentioning other variables like effort, genetics, or market conditions."
    },
    {
        name: "Empathy gap",
        definition: "It is difficult to empathize with feelings that you do not experience.",
        example: "Future you will thank you, start saving now."
    },
    {
        name: "Pro-innovation bias",
        definition: "New ideas are overestimated because they seem innovative.",
        example: "A marketing campaign presents the latest innovation as universally better, without addressing potential downsides like costs."
    },
    {
        name: "Cheerleader effect",
        definition: "People see groups as more attractive than individual members.",
        example: "A dating app features groups of attractive, happy people in promotions, making users assume that everyone on the platform is as appealing as the crowd in the ad."
    },
    {
        name: "Forer effect",
        definition: "Vague and general statements feel personally accurate.",
        example: "Your star sign reveals deep truths about you, see why it's accurate."
    },
    {
        name: "Planning fallacy",
        definition: "People underestimate how much time or resources something will take.",
        example: "A brand promotes a product that claims to help users complete tasks much quicker than they plan, emphasizing speed and ease over realistic timelines."
    },
    {
        name: "Gambler's fallacy",
        definition: "Believing that chances change as an event happens more frequently."
    },
    {
        name: "Empowerment bias",
        definition: "People overestimate their control over events."
    },
    {
        name: "Hyperbolic discounting",
        definition: "People value short-term rewards more than long-term ones."
    },
    {
        name: "Belief bias",
        definition: "People accept logical errors if they align with their beliefs."
    },
    {
        name: "False consensus effect",
        definition: "Believing your opinion is more widely shared than it really is."
    },
    {
        name: "Authority bias",
        definition: "Placing more value on the opinions of authority figures."
    },
    {
        name: "Zero-risk bias",
        definition: "Preferring choices that eliminate risks completely, even if they are inefficient."
    },
    {
        name: "Placebo effect",
        definition: "Belief that something works can enhance the effect, even without active ingredients."
    },
    {
        name: "Chunking nudge",
        definition: "Presenting information in small pieces to make it easier to process."
    },
    {
        name: "Time scarcity nudge",
        definition: "Influencing people by creating a sense of urgency."
    },
    {
        name: "Color coding",
        definition: "Using colors to guide behavior (e.g., red for warnings)."
    },
    {
        name: "Visual cues",
        definition: "Visual elements that encourage desired behavior."
    },
    {
        name: "Checklists",
        definition: "Helping people by reminding them of steps they need to follow."
    },
    {
        name: "Reframing nudge",
        definition: "Presenting information in a way that appears more favorable."
    },
    {
        name: "Choice restriction",
        definition: "Limiting options to make decision-making easier."
    },
    {
        name: "Peer benchmarking",
        definition: "Showing comparisons with the behavior of others in the same situation."
    },
    {
        name: "Dynamic pricing",
        definition: "Adjusting prices based on behavior or timing to influence actions."
    },
    {
        name: "Structured procrastination",
        definition: "Guiding people to do useful tasks while they procrastinate other tasks."
    },
    {
        name: "Behavioral defaults",
        definition: "Default settings determine behavior without conscious action."
    },
    {
        name: "Partition nudge",
        definition: "Placing partitions to guide behavior (e.g., smaller plates)."
    },
    {
        name: "Proximity nudge",
        definition: "Bringing rewards or goals physically closer to promote action."
    },
    {
        name: "Temptation bundling",
        definition: "Combining undesirable behavior with something enjoyable (e.g., listening to music while exercising)."
    },
    {
        name: "Door-in-the-face nudge",
        definition: "First asking a large request and then a smaller one to make the latter seem acceptable."
    },
    {
        name: "Foot-in-the-door nudge",
        definition: "Convincing someone with a small request to later do something bigger."
    },
    {
        name: "Message framing",
        definition: "Using positive or negative language to steer choices."
    },
    {
        name: "Scarcity reminders",
        definition: "Reminding people of limited availability to prompt action."
    },
    {
        name: "Attention triggers",
        definition: "Noticing alerts to stimulate behavior."
    },
    {
        name: "Behavioral anchoring",
        definition: "Setting a starting point to guide decisions."
    },
    {
        name: "Illusion of control",
        definition: "People believe they have more control over a situation than they actually do."
    },
    {
        name: "Contrast effect",
        definition: "People judge an option in comparison with another, not on its own."
    },
    {
        name: "Hot-hand fallacy",
        definition: "The belief that a person will continue to succeed after a series of successes."
    },
    {
        name: "Endowment effect",
        definition: "People place more value on things they already own."
    },
    {
        name: "Mere exposure effect",
        definition: "People tend to like something more the more often they see it."
    },
    {
        name: "Social proof",
        definition: "People follow the behavior of others to determine what is right."
    },
    {
        name: "Primacy effect",
        definition: "First impressions have an disproportionately large influence."
    },
    {
        name: "Serial position effect",
        definition: "People remember the first and last items in a series better."
    },
    {
        name: "IKEA effect",
        definition: "People value things they have made themselves more."
    },
    {
        name: "Loss framing",
        definition: "Presenting options as a loss to encourage action."
    },
    {
        name: "Precommitment",
        definition: "Making promises in advance to encourage desired behavior."
    },
    {
        name: "Priming",
        definition: "Influencing people unconsciously (associations) by showing certain words or images."
    },
    {
        name: "Feedback loops",
        definition: "Immediate feedback gives people insight into their behavior."
    },
    {
        name: "Simplification",
        definition: "Making complex choices easier increases participation."
    },
    {
        name: "Commitment",
        definition: "A mechanism to bind yourself to future actions."
    },
    {
        name: "Pre-suasion",
        definition: "Bringing people into the right mindset before the message is delivered."
    },
    {
        name: "Goal-setting nudge",
        definition: "Setting goals increases motivation and action."
    },
    {
        name: "Gamification",
        definition: "Using game mechanisms to stimulate behavior."
    },
    {
        name: "Personalization",
        definition: "Tailoring messages or options to individuals increases impact."
    },
    {
        name: "Salience",
        definition: "Salient information attracts more attention and action."
    },
    {
        name: "Descriptive norms",
        definition: "Showing what most people do to influence behavior."
    },
    {
        name: "Reminder nudge",
        definition: "Reminders increase the likelihood that people will take action."
    },
    {
        name: "Immediate rewards",
        definition: "Small rewards immediately following desired behavior encourage repetition."
    },
    {
        name: "Implementation intentions",
        definition: "Making specific plans (If X, then Y) increases the likelihood of action."
    },
    {
        name: "Social comparisons",
        definition: "Motivating people by comparing them to their peers."
    },
    {
        name: "Micro-incentives",
        definition: "Offering small rewards or benefits for desired behavior."
    },
    {
        name: "Representativeness heuristic",
        definition: "Deciding based on how well something fits a stereotype."
    },
    {
        name: "Affect heuristic",
        definition: "Making judgments based on emotions instead of facts."
    },
    {
        name: "Familiarity heuristic",
        definition: "Familiar options are considered better or safer."
    },
    {
        name: "Recognition heuristic",
        definition: "Choosing the most recognizable option."
    },
    {
        name: "Scarcity heuristic",
        definition: "Scarce items appear more valuable."
    },
    {
        name: "Effort heuristic",
        definition: "People see something as more valuable if more effort is put into it."
    },
    {
        name: "Gaze heuristic",
        definition: "Making movements based on where the eyes are directed (e.g., in sports)."
    },
    {
        name: "Default heuristic",
        definition: "The default option is often chosen."
    },
    {
        name: "Satisficing",
        definition: "Choosing the first option that seems 'good enough.'"
    },
    {
        name: "Take-the-best heuristic",
        definition: "Considering only the most important factor in a decision."
    },
    {
        name: "Tit-for-tat heuristic",
        definition: "Cooperating as long as the other person does too."
    },
    {
        name: "Availability cascade",
        definition: "An idea is believed because it is repeated."
    },
    {
        name: "Substitution heuristic",
        definition: "Replacing a difficult question with an easier one."
    },
    {
        name: "Temporal discounting",
        definition: "People prefer immediate rewards over future rewards."
    },
    {
        name: "Escalation of commitment",
        definition: "Investing more resources into a failing project."
    },
    {
        name: "Elimination by aspects",
        definition: "Eliminating options based on specific features."
    },
    {
        name: "Hot-hand fallacy",
        definition: "Believing that past success leads to future success."
    },
    {
        name: "Risk heuristic",
        definition: "People take more risks when the chance of loss seems lower."
    },
    {
        name: "Social utility heuristic",
        definition: "Making decisions based on what seems socially acceptable."
    },
    {
        name: "Frequency heuristic",
        definition: "Making judgments based on how often something occurs."
    },
    {
        name: "Fluency heuristic",
        definition: "Things that are easier to understand seem more reliable."
    },
    {
        name: "Similarity heuristic",
        definition: "Making decisions based on similarities to past situations."
    },
    {
        name: "Efficient market heuristic",
        definition: "Believing markets are always rational and efficient."
    },
    {
        name: "Moral credential effect",
        definition: "Using past good behavior as an excuse to act less ethically now."
    },
    {
        name: "Surprise heuristic",
        definition: "Paying more attention to unexpected events."
    },
    {
        name: "Affect labeling",
        definition: "Naming emotions to regulate them."
    },
    {
        name: "Opportunity cost neglect",
        definition: "Ignoring alternative costs when making choices."
    },
    {
        name: "Default heuristic",
        definition: "Automatically choosing the default option."
    },
    {
        name: "Rule of thumb",
        definition: "Using simple rules for complex problems."
    },
    {
        name: "Peak-end rule",
        definition: "Making decisions based on peak moments and the end of experiences."
    },
    {
        name: "Ambiguity heuristic",
        definition: "Avoiding choices that involve uncertainty."
    },
    {
        name: "Recognition-primed decision",
        definition: "Making quick decisions based on recognition."
    },
    {
        name: "Hot-cold empathy gap",
        definition: "Not understanding how emotions influence decisions during stress."
    },
    {
        name: "Probability neglect",
        definition: "Overestimating or underestimating small chances."
    },
    {
        name: "Rapid intuition",
        definition: "Making quick judgments without conscious reasoning."
    },
    {
        name: "Serial position effect",
        definition: "People remember the first and last items in a series better."
    },
    {
        name: "Storytelling heuristic",
        definition: "Believing things are true because they form a logical story."
    },
    {
        name: "Fast-and-frugal heuristic",
        definition: "Making quick decisions with minimal information."
    },
    {
        name: "Representative matching",
        definition: "Choosing examples that seem most representative, even if they are not accurate."
    },    
    { 
        name: "Illusory truth effect", 
        definition: "The tendency to believe false information to be true after repeated exposure." 
    },
    { 
        name: "Context effect", 
        definition: "The influence of environmental factors on perception and decision-making." 
    },
    { 
        name: "Von Restorff effect", 
        definition: "The tendency to remember distinct or unique items better than common ones." 
    },
    { 
        name: "Picture superiority effect", 
        definition: "Images are more likely to be remembered than words." 
    },
    { 
        name: "Self-relevance effect", 
        definition: "Information related to oneself is better remembered than unrelated information." 
    },
    { 
        name: "Negativity bias", 
        definition: "Negative events or emotions have a stronger impact than positive ones." 
    },
    { 
        name: "Conservation", 
        definition: "The cognitive ability to understand that quantity remains the same despite changes in shape or arrangement." 
    },
    { 
        name: "Distinction bias", 
        definition: "The tendency to overemphasize differences when comparing two options side by side." 
    },
    { 
        name: "Focusing effect", 
        definition: "The tendency to place too much emphasis on a single aspect of an event or decision." 
    },
    { 
        name: "Money illusion", 
        definition: "The tendency to think of money in nominal terms rather than real value adjusted for inflation." 
    },
    { 
        name: "Weber-Fechner law", 
        definition: "The principle that the perceived change in a stimulus is proportional to the initial intensity of the stimulus." 
    },
    { 
        name: "Congruence bias", 
        definition: "The tendency to test hypotheses in a way that confirms pre-existing beliefs." 
    },
    { 
        name: "Post-purchase rationalization", 
        definition: "The tendency to justify a purchase after it has been made to reduce cognitive dissonance." 
    },
    { 
        name: "Choice-supportive bias", 
        definition: "The tendency to remember one's past choices as better than they actually were." 
    },
    { 
        name: "Selective perception", 
        definition: "The tendency to perceive information in a way that aligns with pre-existing beliefs or expectations." 
    },
    { 
        name: "Observer-expectancy effect", 
        definition: "The tendency for researchers or observers to subconsciously influence participants' behavior in line with expectations." 
    },
    { 
        name: "Experimenter's bias", 
        definition: "The tendency for researchers to unintentionally influence the outcome of an experiment to align with their expectations." 
    },
    { 
        name: "Observer effect", 
        definition: "The phenomenon where individuals alter their behavior when they know they are being observed." 
    },
    { 
        name: "Expectation bias", 
        definition: "The tendency to perceive or interpret data in a way that aligns with one's expectations or hypotheses." 
    },
    { 
        name: "Ostrich effect", 
        definition: "The tendency to ignore negative information by avoiding it, such as not checking financial losses." 
    },
    { 
        name: "Subjective validation", 
        definition: "The tendency to perceive information as true if it aligns with personal beliefs or experiences." 
    },
    { 
        name: "Continued influence effect", 
        definition: "The tendency for misinformation to persist in memory and influence decisions even after being debunked." 
    },
    { 
        name: "Semmelweis reflex", 
        definition: "The tendency to reject new evidence or ideas that contradict established beliefs." 
    },
    { 
        name: "Bias blind spot", 
        definition: "The inability to recognize one's own cognitive biases while easily identifying them in others." 
    },
    { 
        name: "Naïve cynicism", 
        definition: "The tendency to believe that others are more selfish or manipulative than they actually are." 
    },
    { 
        name: "Naïve realism", 
        definition: "The belief that one's own perception of reality is objective, while others who disagree are biased or misinformed." 
    },
    { 
        name: "Confabulation", 
        definition: "The act of fabricating, distorting, or misinterpreting memories without the intent to deceive." 
    },
    { 
        name: "Insensitivity to sample size", 
        definition: "The tendency to ignore the reliability of statistical results based on the size of the sample." 
    },
    { 
        name: "Neglect of probability", 
        definition: "The tendency to disregard probability when making decisions, often favoring emotions over logic." 
    },
    { 
        name: "Anecdotal fallacy", 
        definition: "The tendency to rely on personal experiences or isolated examples instead of statistical evidence." 
    },
    { 
        name: "Illusion of validity", 
        definition: "The overestimation of the accuracy of one's own judgments or predictions despite contradictory evidence." 
    },
    { 
        name: "Masked man fallacy", 
        definition: "The logical error of assuming that if one person knows something in one context, they must recognize it in another context." 
    },
    { 
        name: "Recency illusion", 
        definition: "The belief that something newly noticed is a recent phenomenon when it may have existed for a long time." 
    },
    { 
        name: "Gambler's fallacy", 
        definition: "The mistaken belief that past random events affect the probability of future random events." 
    },
    { 
        name: "Illusory correlation", 
        definition: "The tendency to perceive a relationship between two unrelated variables due to prior expectations." 
    },
    { 
        name: "Pareidolia", 
        definition: "The tendency to see patterns or familiar objects, such as faces, in random stimuli." 
    },
    { 
        name: "Anthropomorphism", 
        definition: "The attribution of human characteristics or emotions to non-human entities, such as animals or objects." 
    },
    { 
        name: "Group attribution error", 
        definition: "The tendency to assume that individuals within a group share the same beliefs or behaviors." 
    },
    { 
        name: "Ultimate attribution error", 
        definition: "The tendency to explain negative behavior of outgroup members as inherent while attributing negative behavior of ingroup members to situational factors." 
    },
    { 
        name: "Stereotyping", 
        definition: "The tendency to generalize characteristics, behaviors, or attributes to a group of people." 
    },
    { 
        name: "Essentialism", 
        definition: "The belief that certain categories, such as gender or ethnicity, have an underlying, unchangeable essence." 
    },
    { 
        name: "Functional fixedness", 
        definition: "The tendency to see objects only in their traditional use, limiting problem-solving ability." 
    },
    { 
        name: "Moral credential effect", 
        definition: "The tendency to engage in unethical behavior after proving one's moral integrity." 
    },
    { 
        name: "Just-world hypothesis", 
        definition: "The belief that people get what they deserve and deserve what they get." 
    },
    { 
        name: "Argument from fallacy", 
        definition: "The assumption that a conclusion is false because the argument supporting it contains a logical fallacy." 
    },
    { 
        name: "Automation bias", 
        definition: "The tendency to over-rely on automated systems, even when they make errors." 
    },
    { 
        name: "Placebo effect", 
        definition: "The phenomenon where people experience real improvements from a treatment with no active ingredients." 
    },
    { 
        name: "Out-group homogeneity bias", 
        definition: "The perception that members of an out-group are more similar to each other than they actually are." 
    },
    { 
        name: "Cross-race effect", 
        definition: "The tendency to have difficulty recognizing or differentiating faces of people from other racial groups." 
    },
    { 
        name: "In-group bias", 
        definition: "The tendency to favor members of one's own group over those in out-groups." 
    },
    { 
        name: "Positivity effect", 
        definition: "The tendency to focus more on positive information as one ages, while ignoring negative information." 
    },
    { 
        name: "Not invented here", 
        definition: "The tendency to reject ideas or products developed outside one's own group or company." 
    },
    { 
        name: "Reactive devaluation", 
        definition: "The tendency to dismiss or undervalue a proposal simply because it comes from an opposing party." 
    },
    { 
        name: "Well-traveled road effect", 
        definition: "The tendency to perceive familiar routes as shorter than unfamiliar ones." 
    },
]; 
