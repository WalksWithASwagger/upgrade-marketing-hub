/**
 * The Upgrade AI - Marketing Hub
 * Content Data
 */

const PROGRAMS = {
    "creative-pros": {
        name: "Creative Professionals",
        description: "AI training for designers, photographers, videographers, and creative directors",
        color: "purple",
        icon: "fa fa-palette",
        status: "ready"
    },
    "pr-comms": {
        name: "PR & Communications",
        description: "AI training for PR professionals, communications managers, and media relations",
        color: "blue",
        icon: "fa fa-bullhorn",
        status: "ready"
    },
    "sales-leaders": {
        name: "Sales Leaders",
        description: "AI training for sales managers, SDRs, and revenue teams",
        color: "green",
        icon: "fa fa-chart-line",
        status: "ready"
    },
    "journalists": {
        name: "Journalists",
        description: "AI training for journalists, editors, and media professionals",
        color: "orange",
        icon: "fa fa-newspaper",
        status: "ready"
    },
    "healthcare-pros": {
        name: "Healthcare Professionals",
        description: "AI training for healthcare administrators, medical staff, and clinical professionals",
        color: "red",
        icon: "fa fa-heart-pulse",
        status: "ready"
    },
    "hr-pros": {
        name: "HR Professionals",
        description: "AI training for HR managers, talent acquisition, and people operations teams",
        color: "teal",
        icon: "fa fa-users",
        status: "ready"
    },
    "legal-pros": {
        name: "Legal Professionals",
        description: "AI training for lawyers, paralegals, legal assistants, and compliance officers",
        color: "indigo",
        icon: "fa fa-gavel",
        status: "ready"
    }
};

const CONTENT_DATA = {
    "creative-pros": {
        linkedin: [
            {
                number: 1,
                title: "The Wrong Question",
                category: "Identity & Mindset",
                content: `"Will AI replace me?" is the wrong question.

The right question is: "How do I become irreplaceable WITH AI?"

Here's what I've learned teaching 7 cohorts of creative professionals:

The people who thrive aren't hiding from AI.
They're not competing with AI.
They're building WITH AI.

Your domain expertise + AI literacy = an unbeatable combination.

The designers who understand their craft AND can build custom GPTs?
The writers who know story AND can create content workflows?
The photographers who have an eye AND can automate post-processing?

That's the future. And it's already here.

The question isn't whether AI changes your field.
It's whether you're driving that change or getting driven by it.

What side are you on?

#AIforCreatives #FutureOfWork #CreativeProfessionals`,
                preview: `"Will AI replace me?" is the wrong question. The right question is: "How do I become irreplaceable WITH AI?"`,
                wordCount: 145
            },
            {
                number: 2,
                title: "Third Trip Around the Sun",
                category: "Identity & Mindset",
                content: `This is my third technology revolution.

Web 1.0: "The internet will destroy real businesses."
It didn't. It transformed them.

Web 2.0: "Social media will ruin attention spans and journalism."
It changed them. Some for worse. Some for better.

AI Era: "AI will replace creative professionals."
Sound familiar?

The pattern is always the same:
1. Initial panic
2. Early adopters experiment
3. Best practices emerge
4. Adaptation becomes normal
5. New opportunities appear

We're somewhere between 2 and 3 right now.

The creatives who figured out Web 1.0 early? They dominated.
The ones who mastered social? Same thing.

AI is no different.

The question isn't IF you'll adapt. It's WHEN.

#ThirdTripAroundTheSun #AIAdoption #CreativeEvolution`,
                preview: `This is my third technology revolution. Web 1.0, Web 2.0, and now AI. The pattern is always the same...`,
                wordCount: 138
            },
            {
                number: 3,
                title: "The Garden Cyborg",
                category: "Identity & Mindset",
                content: `"It's pretty amazing to spend a whole day in the garden with a cyborg."

That's what Julie said after using AI to identify plants all day.

Not:
- "AI took my job"
- "I feel replaced"
- "Technology is dehumanizing"

But: "Spending the day with my robot is pretty amazing."

This is what AI integration actually feels like when you approach it right.

It's not man vs. machine.
It's man WITH machine.

The creative professionals who are thriving right now?
They're not fighting AI.
They're gardening with it.

What would you do if AI was your creative companion instead of your competition?

#HumanAICollaboration #AICompanion #CreativeLife`,
                preview: `"It's pretty amazing to spend a whole day in the garden with a cyborg." That's what Julie said after using AI...`,
                wordCount: 122
            },
            {
                number: 4,
                title: "Expert Optimism Effect",
                category: "Identity & Mindset",
                content: `Here's a stat that changed how I think about AI anxiety:

75% of AI experts are optimistic about the technology.

The more you know, the less you fear.

This isn't naive optimism from people who don't understand the risks.
This is informed perspective from people who understand BOTH the risks AND the opportunities.

Fear comes from uncertainty.
Confidence comes from competence.

The fastest path from anxious to optimistic?
Stop reading headlines. Start building.

Build one custom GPT. Just one.
Automate one repetitive task. Just one.
Create one AI-assisted piece of work. Just one.

Watch how quickly your perspective shifts.

#ExpertOptimism #AILiteracy #KnowledgeReducesFear`,
                preview: `75% of AI experts are optimistic about the technology. The more you know, the less you fear.`,
                wordCount: 115
            },
            {
                number: 5,
                title: "The Real Threat",
                category: "Identity & Mindset",
                content: `Let's talk about what AI actually threatens.

Not creatives. AI ENABLES creatives.
Not quality. AI ACCELERATES iteration toward quality.
Not human judgment. AI AMPLIFIES human judgment.

What AI threatens:
- Creatives who refuse to adapt
- Quality standards stuck in old workflows
- Human judgment that doesn't get multiplied

The displacement isn't human vs. machine.
It's adapted vs. not adapted.

I've taught hundreds of creative professionals at this point.
The ones who struggle? Not the ones who "aren't technical."

The ones who struggle are the ones who've decided they already know what AI can't do.

Closed minds get left behind.
Open minds get upgraded.

Which are you?

#AIThreat #Adaptation #CreativeTransformation`,
                preview: `Let's talk about what AI actually threatens. Not creatives—AI ENABLES creatives. Not quality—AI ACCELERATES iteration...`,
                wordCount: 128
            },
            {
                number: 6,
                title: "The Great Reframe",
                category: "Identity & Mindset",
                content: `Every creative professional I teach goes through the same transformation:

Week 1: "Can AI really help me? Or is this just hype?"
Week 2: "Wait, this actually saves time."
Week 3: "I'm starting to see how this fits my work."
Week 4: "I built something that actually works."
Week 5: "Why didn't I learn this sooner?"
Week 6: "I can't imagine going back."

The shift isn't about learning tools.
It's about reframing your relationship with technology.

From: AI is a threat to my craft
To: AI amplifies my craft

From: I'm competing with machines
To: I'm collaborating with machines

From: My skills are becoming obsolete
To: My skills are more valuable than ever (when combined with AI)

The great reframe is available to everyone.
Some people take 6 weeks. Some take 6 months. Some never get there.

Where are you in the journey?

#MindsetShift #CreativeReframe #AIJourney`,
                preview: `Every creative professional I teach goes through the same transformation. Week 1: "Can AI really help me?"...`,
                wordCount: 156
            },
            {
                number: 7,
                title: "Assume Nothing Online Is Real",
                category: "Identity & Mindset",
                content: `"Assume nothing online is real."

That's not cynicism. That's the baseline for operating in 2025.

When I teach creative professionals about AI, ethics comes on Day 1. Not Day 6.

Why?

Because AI literacy isn't just about building tools.
It's about:
- Recognizing AI-generated content
- Understanding bias in training data
- Navigating copyright complexities
- Discerning deepfakes from reality

The Pope Francis jacket photo fooled millions.
AI-generated text is getting harder to detect.
Voice cloning is good enough to fool family members.

Critical evaluation isn't a nice-to-have.
It's the core skill of our era.

The creative professionals who thrive won't just USE AI.
They'll understand it well enough to detect it.

Are you ready?

#MediaLiteracy #AIEthics #CriticalThinking`,
                preview: `"Assume nothing online is real." That's not cynicism. That's the baseline for operating in 2025.`,
                wordCount: 132
            },
            {
                number: 8,
                title: "Current Tools Are Enough",
                category: "Identity & Mindset",
                content: `"I'm waiting for AI to get better before I invest time learning it."

I hear this constantly.

Here's what Peter Bittner told my last cohort:

"If the models don't get any better than they are today in November 2025, our world has already changed. The world may not know it yet, but generative AI is already revolutionizing knowledge work."

Read that again.

CURRENT capabilities are transformative.
You don't need GPT-5.
You don't need AGI.
You don't need some future breakthrough.

The tools available TODAY are enough to:
- Cut research time by 90%
- Generate first drafts in minutes
- Build custom assistants for your exact workflow
- Create interactive prototypes without coding

The gap isn't in the technology.
The gap is in your ability to use it.

Stop waiting. Start building.

#NoWaiting #CurrentCapabilities #StartNow`,
                preview: `"I'm waiting for AI to get better before I invest time learning it." Here's the truth...`,
                wordCount: 145
            },
            {
                number: 9,
                title: "Your Worldview Is Your Moat",
                category: "Identity & Mindset",
                content: `AI can learn your writing voice in minutes.

Read a few samples. Match the tone. Mimic the patterns.

But AI can't learn your worldview.

Your worldview is:
- 20 years of experience condensed into intuition
- Hard-won lessons from failures no one else had
- Unique perspective shaped by your specific journey
- Values that drive decisions AI can't replicate

Voice is mimicable.
Worldview is not.

This is why I tell every creative professional:
Build assistants that know your voice AND your worldview.

The voice gets your tone right.
The worldview gets your thinking right.

That combination? That's your competitive moat.

AI without your worldview = generic output
AI with your worldview = YOUR amplified output

Don't just train AI on how you write.
Train it on how you think.

#WorldviewGuide #CreativeMoat #AIStrategy`,
                preview: `AI can learn your writing voice in minutes. But AI can't learn your worldview. That's your competitive moat.`,
                wordCount: 145
            },
            {
                number: 10,
                title: "The Identity Question",
                category: "Identity & Mindset",
                content: `"Who am I if AI can do my creative work?"

This question keeps creative professionals up at night.

Here's my answer after 7 cohorts and hundreds of students:

You are NOT your output.
You are NOT your technical skills.
You are NOT your ability to execute tasks.

You ARE:
- Your taste (knowing what's good)
- Your judgment (knowing what's right)
- Your vision (knowing what's needed)
- Your relationships (knowing who to serve)

AI can generate. You can curate.
AI can produce. You can direct.
AI can iterate. You can decide.

The creative professionals thriving with AI?
They've separated identity from execution.

They know WHO they are.
They let AI handle WHAT gets produced.

That's the identity upgrade that makes everything else possible.

#CreativeIdentity #WhoNotWhat #AIUpgrade`,
                preview: `"Who am I if AI can do my creative work?" Here's my answer after 7 cohorts and hundreds of students...`,
                wordCount: 142
            },
            {
                number: 11,
                title: "The POP Framework",
                category: "Framework & Process",
                content: `Every AI platform. One framework.

P - Persona: Who should AI act as?
O - Objective: What specific task should it accomplish?
P - Parameters: How should it deliver? (tone, length, format)

This works in ChatGPT. In Claude. In Gemini. In custom GPTs.

Why? Because these aren't platform-specific tricks.
They're principles of clear communication.

When you give AI:
- A clear role (Persona)
- A specific goal (Objective)
- Defined constraints (Parameters)

You get dramatically better outputs.

Example:
BAD: "Write me a blog post about AI"
GOOD: "You are a senior marketing strategist (P). Write a 800-word blog post about AI adoption for creative agencies (O). Use conversational tone, include 3 specific examples, and end with a clear call-to-action (P)."

Same AI. Same prompt box. Completely different results.

The POP Framework changed how I teach AI.
It'll change how you use it.

#POPFramework #PromptEngineering #AIFramework`,
                preview: `Every AI platform. One framework. P - Persona, O - Objective, P - Parameters. This works everywhere.`,
                wordCount: 164
            },
            {
                number: 12,
                title: "Job Description for an Intern",
                category: "Framework & Process",
                content: `"I like to think of it as writing a job description for a really smart intern. What do they need to know on day one to be effective?"

This is how I explain system prompts.

Not:
- Complex technical configuration
- Programming knowledge required
- Mysterious AI sorcery

Just:
- What role do they play?
- What do they need to know?
- How should they behave?
- What should they NOT do?

If you can onboard a new team member, you can write a system prompt.

Same skills:
- Clear role definition
- Context about the work
- Expectations for output
- Boundaries on behavior

Your system prompt is a job description.
Your knowledge base is the employee handbook.
Your custom GPT is your AI team member.

Think of it that way, and it stops being intimidating.

#SystemPrompts #AIOnboarding #CustomGPT`,
                preview: `"I like to think of it as writing a job description for a really smart intern."`,
                wordCount: 148
            },
            {
                number: 21,
                title: "Weeks to Hours",
                category: "Vibe Coding",
                content: `"The big breakthrough is my ability to conceptualize my ideas or my clients' ideas rapidly so that we could iterate on them in the short term. I can do on a one-hour phone call what used to take two weeks."

This is what vibe coding changed for me.

OLD PROCESS:
Client call → Requirements doc → Design → Development → Testing → Feedback → Iteration
Timeline: 2+ weeks for first meaningful feedback

VIBE CODING:
Client call → Live generation → Immediate feedback → Iteration → More iteration
Timeline: 1 hour for multiple meaningful iterations

The result isn't just faster.
The result is BETTER.

Why? Because:
- Clients don't know what they want until they see it
- More iterations = better outcomes
- Faster feedback = fewer wrong turns

When you can iterate 8 times instead of 2?
Quality goes up, not just speed.

#VibeCoding #RapidPrototyping #ClientWork`,
                preview: `I can do on a one-hour phone call what used to take two weeks. This is what vibe coding changed.`,
                wordCount: 155
            },
            {
                number: 31,
                title: "Rob's Paramount+ Tools",
                category: "Outcome & Proof",
                content: `Rob Rosenberg took our course.

He built 3 AI tools as capstone projects.

Those tools are now live globally at Paramount+.

Let that sink in.

Course project → Enterprise production infrastructure.

This isn't hypothetical learning.
This isn't sandbox exercises.
This is real tools solving real problems at real scale.

What you build in 6 weeks can matter.

#AlumniSuccess #EnterpriseAI #RealImpact`,
                preview: `Rob Rosenberg built 3 AI tools as capstone projects. Those tools are now live globally at Paramount+.`,
                wordCount: 74
            },
            {
                number: 32,
                title: "Armin's Business",
                category: "Outcome & Proof",
                content: `6 weeks.

That's how long it took Armin Layegh to go from job hunting to business owner.

He joined AI Upgrade for Creative Pros uncertain about his direction.

He built TalentNow as his capstone project.

He had 3 paying clients before the course ended.

He pivoted from job seeker to employer.

This is the most dramatic transformation I've seen in 7 cohorts.

And it started with one question:
"What problem can I solve with what I'm learning?"

What problem could YOU solve?

#CareerPivot #BusinessCreation #6WeekTransformation`,
                preview: `6 weeks. That's how long it took Armin Layegh to go from job hunting to business owner.`,
                wordCount: 95
            },
            {
                number: 41,
                title: "Stop Waiting",
                category: "Call-to-Action",
                content: `"I'll learn AI when it stabilizes."
"I'll learn AI when I have more time."
"I'll learn AI when the tools are better."

I've heard every version of this excuse.

Here's the truth:
The tools today are good enough.
You'll never have more time.
Stability is a myth in technology.

The creative professionals winning right now?
They stopped waiting.

They built one assistant.
They automated one workflow.
They vibe-coded one prototype.

They got started.

What would it take for you to get started?

Our next cohort opens soon.
6 weeks. Real tools. Real outcomes.

Link in comments.

#StopWaiting #GetStarted #AIUpgrade`,
                preview: `"I'll learn AI when it stabilizes." I've heard every version of this excuse. Here's the truth...`,
                wordCount: 108
            },
            {
                number: 50,
                title: "The Upgrade Awaits",
                category: "Call-to-Action",
                content: `Six weeks from now, you could be:

✓ Building custom AI assistants for your workflow
✓ Vibe coding prototypes in hours instead of weeks
✓ Using frameworks that work across any platform
✓ Connected to a community of creative professionals
✓ Presenting a capstone project you're proud of

Or you could be exactly where you are now.

Same anxiety. Same uncertainty. Same FOMO watching everyone else adapt.

The gap between those futures is one decision.

AI Upgrade for Creative Professionals.
Next cohort starting soon.

Comment "READY" and I'll send you application details.

The upgrade awaits.

#TheUpgradeAwaits #DecisionTime #ReadyOrNot`,
                preview: `Six weeks from now, you could be building custom AI assistants, vibe coding prototypes, and presenting a capstone project...`,
                wordCount: 102
            }
        ],
        quotes: [
            {
                number: 1,
                title: "The Garden Cyborg",
                category: "Creative Identity",
                content: `"It's pretty amazing to spend a whole day in the garden with a cyborg. Spending the day with my robot is pretty amazing."
— Julie, Cohort 7 Student

Context: Describing her experience using AI for plant identification while gardening
Marketing Angle: AI as creative companion, not replacement. Human-AI collaboration feels natural.`,
                preview: `"It's pretty amazing to spend a whole day in the garden with a cyborg."`,
                wordCount: 52
            },
            {
                number: 2,
                title: "The Wrong Question",
                category: "Creative Identity",
                content: `"Will AI replace me?" is the wrong question. The right question is: "How do I become irreplaceable WITH AI?"
— Course Philosophy

Marketing Angle: Reframe fear into empowerment. Lead with identity transformation.`,
                preview: `"Will AI replace me?" is the wrong question. The right question is: "How do I become irreplaceable WITH AI?"`,
                wordCount: 37
            },
            {
                number: 3,
                title: "Technology Cycles",
                category: "Technology Wisdom",
                content: `"We tend to overestimate the effect of technology in the short run and underestimate the effect in the long run."
— Dr. Roy Amara

Context: Opening framework for understanding AI's trajectory
Marketing Angle: Long-term perspective, not hype-driven anxiety.`,
                preview: `"We tend to overestimate the effect of technology in the short run and underestimate the effect in the long run."`,
                wordCount: 43
            },
            {
                number: 4,
                title: "Third Trip Around the Sun",
                category: "Technology Wisdom",
                content: `"This is my third trip around the sun—Web 1.0, Web 2.0, and now AI. The pattern is always the same: initial panic, then adaptation, then opportunity."
— Kris Krug

Marketing Angle: Experience-based wisdom. We've navigated disruption before.`,
                preview: `"This is my third trip around the sun—Web 1.0, Web 2.0, and now AI."`,
                wordCount: 44
            },
            {
                number: 5,
                title: "Current Reality",
                category: "Technology Wisdom",
                content: `"If the models don't get any better than they are today in November 2025, our world has already changed. The world may not know it yet, but generative AI is already revolutionizing knowledge work."
— Peter Bittner

Marketing Angle: No waiting for GPT-5. Current tools are transformative NOW.`,
                preview: `"If the models don't get any better than they are today, our world has already changed."`,
                wordCount: 50
            },
            {
                number: 6,
                title: "Smart Intern",
                category: "Frameworks",
                content: `"I like to think of it as writing a job description for a really smart intern. What do they need to know on day one to be effective?"
— Kris Krug

Context: Explaining how to write system prompts for custom GPTs
Marketing Angle: Demystifies technical concepts. Accessible to non-developers.`,
                preview: `"I like to think of it as writing a job description for a really smart intern."`,
                wordCount: 48
            },
            {
                number: 7,
                title: "Knowledge Base Quality",
                category: "Frameworks",
                content: `"The quality of your knowledge base determines the quality of your assistant."
— Kris Krug

Context: Teaching knowledge base architecture
Marketing Angle: Your expertise is the foundation. AI amplifies what you bring.`,
                preview: `"The quality of your knowledge base determines the quality of your assistant."`,
                wordCount: 30
            },
            {
                number: 8,
                title: "Quality Over Quantity",
                category: "Frameworks",
                content: `"About 15-20 substantial documents. You don't need hundreds. Quality over quantity."
— Kris Krug

Context: Guidance on knowledge base size
Marketing Angle: Approachable, not overwhelming. Start small.`,
                preview: `"About 15-20 substantial documents. You don't need hundreds. Quality over quantity."`,
                wordCount: 28
            }
        ],
        emails: [
            {
                number: 1,
                title: "Email 1: Playbook Delivery",
                category: "Welcome Sequence",
                content: `Subject: Your AI Upgrade Playbook is Ready 🚀

Hi [FIRST_NAME],

Thank you for downloading "AI Upgrade for Creative Professionals: The 6-Week Playbook."

Inside, you'll discover:
• The 3-phase framework we use with 200+ creative professionals
• Why "will AI replace me?" is the wrong question
• The POP Framework for consistent AI results
• How to build your first Custom GPT

But here's what the playbook can't give you:

Personalized guidance for YOUR specific creative work.

That's what our live cohort provides.

Over the next few emails, I'll share:
→ Real transformation stories from past students
→ The frameworks that accelerate adoption
→ How to know if the program is right for you

For now, start with the playbook. Build one thing. See what AI can do for your work.

Talk soon,
Kris

P.S. – Our next cohort starts [DATE]. Reply to this email if you have questions.`,
                preview: `Thank you for downloading the AI Upgrade Playbook. Inside, you'll discover the 3-phase framework...`,
                wordCount: 160,
                timing: "Immediate"
            },
            {
                number: 2,
                title: "Email 2: The Transformation Pattern",
                category: "Welcome Sequence",
                content: `Subject: What happens in 6 weeks (real student journey)

[FIRST_NAME],

Every creative professional I teach goes through the same pattern:

Week 1: "Can AI really help me? Or is this just hype?"
Week 2: "Wait, this actually saves time."
Week 3: "I'm starting to see how this fits my work."
Week 4: "I built something that actually works."
Week 5: "Why didn't I learn this sooner?"
Week 6: "I can't imagine going back."

Here's a specific example:

Armin Layegh joined uncertain about his direction.
He was job hunting, feeling stuck.

By Week 6:
• Built TalentNow as his capstone project
• Had 3 paying clients before the course ended
• Pivoted from job seeker to business owner

The shift isn't about learning tools.
It's about reframing your relationship with technology.

Tomorrow, I'll share the framework that makes this possible.

– Kris

P.S. – Have you started the playbook yet? Reply and tell me what you're building.`,
                preview: `Every creative professional I teach goes through the same pattern. Week 1: "Can AI really help me?"...`,
                wordCount: 175,
                timing: "+2 days"
            },
            {
                number: 3,
                title: "Email 3: The POP Framework Deep Dive",
                category: "Welcome Sequence",
                content: `Subject: One framework, every AI platform

[FIRST_NAME],

Want better AI outputs? Use this:

P – Persona: Who should AI act as?
O – Objective: What specific task should it accomplish?
P – Parameters: How should it deliver?

Example:

BAD: "Write me a blog post about AI"

GOOD: "You are a senior marketing strategist (P). Write an 800-word blog post about AI adoption for creative agencies (O). Use conversational tone, include 3 specific examples, and end with a clear call-to-action (P)."

Same AI. Same prompt box. Completely different results.

This works in ChatGPT. Claude. Gemini. Custom GPTs.

Why? Because these aren't platform-specific tricks.
They're principles of clear communication.

In our live cohort, we go deep on:
• Building prompts that work every time
• Creating knowledge bases that make AI smarter
• Designing custom GPTs for your specific workflow

Try the POP Framework today. See the difference.

– Kris`,
                preview: `Want better AI outputs? Use POP: Persona, Objective, Parameters. Works on every platform.`,
                wordCount: 165,
                timing: "+2 days"
            }
        ],
        stories: [
            {
                number: 1,
                title: "Rob Rosenberg — Paramount+",
                category: "Enterprise Success",
                content: `Rob Rosenberg — Senior Producer, Entertainment Industry

The Challenge:
Rob needed to build AI tools for a major streaming platform but wasn't sure how to approach enterprise-scale implementation while maintaining creative quality.

The Discovery:
Through the course, Rob learned how to build Custom GPTs with robust knowledge bases and discovered the power of combining domain expertise with AI capabilities.

The Transformation:
Rob built 3 AI tools as capstone projects that moved from classroom exercises to production infrastructure.

The Results:
• Tool 1: Social media agent — LIVE GLOBALLY at Paramount+
• Tool 2: Conversational "what to watch" advisor (beta testing)
• Tool 3: Animation workflow — 6 photos → 60-second spot in ~2 minutes

His Quote:
"I MAKE your portrait, I don't TAKE your portrait. That's the difference AI enables when you bring your creative vision."`,
                preview: `Rob built 3 AI tools as capstone projects. Those tools are now live globally at Paramount+.`,
                wordCount: 155
            },
            {
                number: 2,
                title: "Armin Layegh — TalentNow",
                category: "Business Creation",
                content: `Armin Layegh — Founder, TalentNow

The Challenge:
Armin came to the course while job hunting, uncertain about his next move and feeling stuck in a competitive market.

The Discovery:
He realized that AI could help him build solutions, not just use them. The course gave him the technical confidence to create products, not just consume them.

The Transformation:
Instead of looking for a job, Armin built TalentNow—a platform that solves a real problem in the talent acquisition space.

The Results:
• 3 paying pilot clients before the course ended
• 8+ prospects in the pipeline
• Pivoted from job seeker to employer
• Total launch cost: ~$100 in tools over 2-3 weeks

His Quote:
"I came here looking for a job. I'm leaving having built a business. The course gave me the tools. The community gave me the confidence. The capstone deadline gave me the forcing function."`,
                preview: `Armin went from job hunting to having 3 paying clients in 6 weeks. He built TalentNow as his capstone project.`,
                wordCount: 175
            }
        ],
        playbook: [
            {
                number: 1,
                title: "AI Upgrade for Creative Professionals Playbook",
                category: "Lead Magnet",
                content: `AI Upgrade for Creative Professionals: The 6-Week Playbook

Executive Summary:
This playbook provides creative professionals with a structured approach to AI adoption. Based on teaching 200+ designers, photographers, writers, and creative directors, we've identified the frameworks that accelerate transformation.

The Three Phases:
• Phase 1: Foundation (Weeks 1-2) — Mindset shift, first tools
• Phase 2: Building (Weeks 3-4) — Custom GPTs, knowledge bases
• Phase 3: Integration (Weeks 5-6) — Workflow optimization, capstone

Key Frameworks:
1. POP Framework — Persona, Objective, Parameters for every prompt
2. The Agentic Spectrum — Choosing between assistants, automations, and agents
3. Knowledge Base Architecture — Quality over quantity, 15-20 substantial documents

What You'll Build:
By following this playbook, you'll create working AI tools for your specific creative workflow, not generic applications.`,
                preview: `A structured approach to AI adoption for creative professionals. Based on teaching 200+ designers, photographers, and creative directors.`,
                wordCount: 170
            }
        ],
        images: [
            {
                number: 1,
                title: "Identity Post Header — Before/After",
                category: "LinkedIn Graphics",
                content: `Prompt: A split-screen professional photograph. Left side: A creative professional looking stressed, surrounded by scattered papers and multiple screens, harsh fluorescent lighting, desaturated colors. Right side: The same professional, calm and confident, working alongside a subtle holographic AI interface, warm natural lighting, organized workspace. Dark background, subtle teal and purple accent lighting on the right side. Photorealistic style, 1200x628 pixels, cinematic composition.

Variations:
• Replace "professional photograph" with "editorial illustration" for a more stylized look
• Add "35mm film grain" for analog warmth
• Specify "female creative director in her 40s" for targeted representation`,
                preview: `Split-screen image showing stressed creative vs. confident AI-augmented professional. Dark mode aesthetic.`,
                wordCount: 105
            },
            {
                number: 2,
                title: "POP Framework Infographic",
                category: "LinkedIn Graphics",
                content: `Prompt: A sleek, modern infographic on a dark background (#0a0a0f). Three connected hexagonal nodes with the letters P-O-P. Each node has a subtle glow: first P in teal (#00d9ff), O in purple (#a855f7), second P in gradient between both colors. Small icons inside each hexagon: a person silhouette, a target, a slider. Clean typography in white, minimal design. 1200x1200 pixels for carousel. Glassmorphism effect on the hexagons.

Variations:
• Horizontal layout for LinkedIn feed (1200x628)
• Add animated glow effect for video version
• Include example prompt text in smaller typography below`,
                preview: `POP Framework infographic with three connected hexagonal nodes. Teal and purple accents on dark background.`,
                wordCount: 105
            }
        ]
    },
    "pr-comms": {
        linkedin: [
            {
                number: 1,
                title: "The Media Landscape Shift",
                category: "Identity & Context",
                content: `The media landscape has fundamentally changed.

And so has PR.

Old PR: Write press release → Pitch journalists → Hope for coverage
New PR: Create narratives → Amplify everywhere → Own the conversation

AI doesn't replace PR professionals.
It gives us superpowers:

• Research 50 journalists in the time it took to research 5
• Generate pitch variations for every reporter's beat
• Monitor sentiment across platforms in real-time
• Draft crisis responses before the story breaks

The PR pros who are winning right now?
They're not doing the same job faster.
They're doing a different job entirely.

What job are you doing?

#PREvolution #CommsTransformation #AIforPR`,
                preview: `The media landscape has fundamentally changed. And so has PR. AI gives us superpowers...`,
                wordCount: 118
            },
            {
                number: 2,
                title: "Speed of Information",
                category: "Framework & Process",
                content: `A story breaks.

Old timeline:
Hour 1: Team scrambles
Hour 2: Gather facts
Hour 3: Draft statement
Hour 4: Legal review
Hour 5: Approval chain
Hour 6: Release

New timeline:
Minute 5: AI drafts initial response
Minute 10: Team reviews and adjusts
Minute 20: Statement ready

The speed of information has changed.
The speed of response must change with it.

AI doesn't replace crisis communications expertise.
It compresses the time between crisis and response.

Your judgment still matters.
Your relationships still matter.
Your experience still matters.

But now you can deploy them faster.

#CrisisComms #PRSpeed #AIInPR`,
                preview: `A story breaks. Old timeline: 6 hours. New timeline with AI: 20 minutes. The speed of response must change.`,
                wordCount: 115
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Media Monitoring Revolution",
                category: "PR Transformation",
                content: `"I used to spend 3 hours every morning on media monitoring. Now my AI assistant surfaces only what matters, in 15 minutes."
— PR Cohort Student

Marketing Angle: Time savings that matter. More strategic work, less manual scanning.`,
                preview: `"I used to spend 3 hours every morning on media monitoring. Now it takes 15 minutes."`,
                wordCount: 42
            }
        ],
        emails: [
            {
                number: 1,
                title: "Email 1: The PR Playbook",
                category: "Welcome Sequence",
                content: `Subject: Your AI Upgrade PR Playbook is Ready

Hi [FIRST_NAME],

Communications is evolving faster than ever.

Inside your playbook, you'll discover:
• How AI is transforming media monitoring and research
• The framework for AI-assisted crisis response
• Building AI tools that understand your media relationships

The PR professionals who adapt first will define how everyone else uses AI.

Will you be leading or following?

– Kris`,
                preview: `Communications is evolving faster than ever. Inside your playbook, you'll discover how AI is transforming PR.`,
                wordCount: 75,
                timing: "Immediate"
            }
        ],
        stories: [],
        playbook: [],
        images: []
    },
    "sales-leaders": {
        linkedin: [
            {
                number: 1,
                title: "Research Before the Call",
                category: "Productivity",
                content: `Before AI:
30 minutes researching a prospect before a call.
LinkedIn. Company website. Recent news. Annual reports.

With AI:
3 minutes.

Same depth. Same insights. 90% less time.

Here's what my AI research assistant does:
• Scans LinkedIn for recent posts and engagement
• Summarizes company news from the last 90 days
• Identifies pain points based on industry trends
• Suggests personalized talking points

The SDRs who are crushing quota right now?
They're not working harder.
They're researching smarter.

What could you do with 27 extra minutes per prospect?

#SalesProductivity #AIforSales #ResearchSmarter`,
                preview: `Before AI: 30 minutes researching a prospect. With AI: 3 minutes. Same depth, 90% less time.`,
                wordCount: 105
            },
            {
                number: 2,
                title: "The Follow-Up Machine",
                category: "Productivity",
                content: `The difference between good salespeople and great salespeople?

Follow-up.

But follow-up is exhausting.
Tracking who needs what when.
Personalizing every message.
Remembering every conversation.

AI changes this equation.

My follow-up system:
• Tracks all prospect interactions automatically
• Drafts personalized follow-ups based on our last conversation
• Suggests optimal timing based on engagement patterns
• Never forgets. Never gets tired.

I still review every message before it sends.
But the heavy lifting? That's handled.

Stop letting deals die from neglect.
Build your follow-up machine.

#SalesFollowUp #NeverForget #AIAssistant`,
                preview: `The difference between good salespeople and great salespeople? Follow-up. AI changes this equation.`,
                wordCount: 110
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Research Time Savings",
                category: "Sales Productivity",
                content: `"I went from 30 minutes of research per prospect to 3 minutes. Same quality insights, 90% less time."
— Sales Cohort Graduate

Marketing Angle: Concrete time savings that translate to more calls, more deals.`,
                preview: `"30 minutes of research per prospect to 3 minutes. Same quality, 90% less time."`,
                wordCount: 38
            }
        ],
        emails: [],
        stories: [],
        playbook: [],
        images: []
    },
    "journalists": {
        linkedin: [
            {
                number: 1,
                title: "The Research Paradox",
                category: "Identity & Context",
                content: `Journalists face a paradox:

More information available than ever.
Less time to find what matters.

AI solves this paradox.

What used to take hours of digging:
• Searching public records
• Cross-referencing sources
• Finding historical context
• Identifying patterns across documents

Now takes minutes.

But here's what AI doesn't do:
• Interview sources with empathy
• Recognize what's actually newsworthy
• Build trust with communities
• Ask the question no one else asked

AI amplifies your research.
Your judgment makes it journalism.

#JournalismAI #ResearchSmarter #MediaEvolution`,
                preview: `Journalists face a paradox: more information than ever, less time to find what matters. AI solves this.`,
                wordCount: 98
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Document Analysis",
                category: "Research Enhancement",
                content: `"I analyzed 500 pages of public records in an afternoon. Found patterns that would have taken me weeks to discover manually."
— Journalist, Cohort Graduate

Marketing Angle: Research depth that enhances investigative journalism.`,
                preview: `"I analyzed 500 pages of public records in an afternoon."`,
                wordCount: 35
            }
        ],
        emails: [],
        stories: [],
        playbook: [],
        images: []
    },
    "healthcare-pros": {
        linkedin: [
            {
                number: 1,
                title: "Administrative Burden",
                category: "Identity & Context",
                content: `Healthcare professionals spend 2+ hours daily on administrative tasks.

Documentation. Prior authorizations. Chart reviews.

Time that could go to patients.

AI is changing this equation:
• Draft clinical notes during or after visits
• Summarize patient histories for faster review
• Generate prior authorization documentation
• Organize research by patient condition

The goal isn't replacing clinical judgment.
The goal is freeing you to exercise it more.

What would you do with 2 extra hours per day?

#HealthcareAI #AdminBurden #PatientCare`,
                preview: `Healthcare professionals spend 2+ hours daily on administrative tasks. AI is changing this equation.`,
                wordCount: 88
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Documentation Time",
                category: "Healthcare Efficiency",
                content: `"My documentation time dropped by 60%. I'm actually present with patients again instead of typing during visits."
— Healthcare Administrator, Program Graduate

Marketing Angle: AI restores focus to patient care.`,
                preview: `"My documentation time dropped by 60%. I'm actually present with patients again."`,
                wordCount: 32
            }
        ],
        emails: [],
        stories: [],
        playbook: [],
        images: []
    },
    "hr-pros": {
        linkedin: [
            {
                number: 1,
                title: "The Screening Reality",
                category: "Identity & Context",
                content: `200 applications.
50 to screen.
10 to interview.
1 to hire.

HR professionals spend hours on the wrong 40.

AI changes the math:
• Initial screening based on actual requirements (not keywords)
• Identify candidates who match culture indicators
• Surface non-obvious qualifications
• Draft personalized outreach at scale

You still make the decisions.
You still build the relationships.
You still know when chemistry is right.

But you're not drowning in applications anymore.

#HRTech #TalentAcquisition #AIRecruitment`,
                preview: `200 applications. 50 to screen. 10 to interview. 1 to hire. HR professionals spend hours on the wrong 40.`,
                wordCount: 90
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Candidate Screening",
                category: "Recruitment Efficiency",
                content: `"I screened 200 applications in 2 hours instead of 2 days. And found 3 candidates I would have missed with keyword filtering."
— Talent Acquisition Manager, Program Graduate

Marketing Angle: Better candidates, faster decisions.`,
                preview: `"I screened 200 applications in 2 hours instead of 2 days."`,
                wordCount: 40
            }
        ],
        emails: [],
        stories: [],
        playbook: [],
        images: []
    },
    "legal-pros": {
        linkedin: [
            {
                number: 1,
                title: "The Billable Hour Shift",
                category: "Identity & Context",
                content: `Legal research used to be measured in billable hours.

Now it's measured in minutes.

AI transforms legal research:
• Case law analysis across jurisdictions
• Contract review and comparison
• Due diligence document scanning
• Precedent identification and synthesis

The question for legal professionals:
How do you price expertise when the time equation changes?

The answer: Your value isn't in finding the information.
It's in knowing what to do with it.

Strategy. Judgment. Relationships.

Those don't get automated.
They get more valuable.

#LegalTech #LawPractice #AIinLaw`,
                preview: `Legal research used to be measured in billable hours. Now it's measured in minutes.`,
                wordCount: 100
            }
        ],
        quotes: [
            {
                number: 1,
                title: "Contract Review",
                category: "Legal Efficiency",
                content: `"Contract review that took 4 hours now takes 45 minutes. And I catch issues I used to miss when tired at hour 3."
— Associate Attorney, Program Graduate

Marketing Angle: Faster work AND higher quality.`,
                preview: `"Contract review that took 4 hours now takes 45 minutes."`,
                wordCount: 38
            }
        ],
        emails: [],
        stories: [],
        playbook: [],
        images: []
    }
};
