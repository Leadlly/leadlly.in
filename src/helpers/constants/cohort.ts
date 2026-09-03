export const COHORT_PRICE = "₹3,990";
export const COHORT_WAITLIST_CTA = "Join the Waitlist";

export const COHORT_FAQS = [
  {
    question: "What happens after I join the waitlist?",
    answer:
      "We'll email you when Cohort 1 opens so you can complete your registration. Joining the waitlist doesn't charge you anything.",
  },
  {
    question: "Is this a subscription or a one-time payment?",
    answer:
      "One-time payment of ₹3,990 for the full 1-year program. No recurring charges.",
  },
  {
    question: "What if I can't attend a weekly mentor call?",
    answer:
      "The mentor-call rescheduling and async update policy is being finalized and will be clearly shared before payment.",
  },
  {
    question: "Do I need to download the app separately?",
    answer:
      "Yes — after Cohort 1 opens, you'll get access to download the app and get started immediately.",
  },
  {
    question: "How is this different from a normal coaching app?",
    answer:
      "We don't just give you content — your mentor and our system take responsibility for how you execute every day, catching gaps before they become problems.",
  },
] as const;

export const COHORT_MENTOR_HELPS = [
  {
    id: "calls",
    text: "Weekly 1-on-1 calls to review your progress",
  },
  {
    id: "data",
    text: "Reads your accuracy & performance data — not guesswork",
  },
  {
    id: "alert",
    text: "Automatically steps in if your accuracy drops below 40%",
  },
  {
    id: "talk",
    text: "Available whenever you need to talk through a rough patch",
  },
  {
    id: "direction",
    text: "Gives direction based on your numbers — not generic advice",
  },
  {
    id: "errors",
    text: "Helps you actually act on what's in your error book",
  },
] as const;

export const COHORT_STEPS = [
  {
    label: "Step 1 · Day 1",
    offset: "lg:mr-36",
    title: "Your Plan Is Built Around You",
    bullets: [
      "Share your class schedule, syllabus stage, and pace",
      "Get a fresh, sequenced to-do list every single day — built around your pace, not a fixed 6-month roadmap",
    ],
    outcome: "No wondering what to study. Open the app, know exactly what to do.",
  },
  {
    label: "Step 2 · Week 1",
    offset: "lg:ml-12 lg:mr-24",
    title: "The System Starts Learning You",
    bullets: [
      "Daily and weekly quizzes tied to what you studied — keeping your revision up to date",
      "Every result becomes topic-level accuracy data — visible to your mentor from day one",
    ],
    outcome:
      "An honest picture of where you stand, shared with your mentor in real time.",
  },
  {
    label: "Step 3 · Month 1",
    offset: "lg:ml-24 lg:mr-12",
    title: "Your Plan Restructures Around Real Performance",
    bullets: [
      "Weak topics surface automatically; your plan spends more time where accuracy is low and less where you're strong",
      "Below 40% accuracy triggers a mentor call — or request one anytime",
    ],
    outcome:
      "Your prep corrects itself before weak spots become gaps.",
  },
  {
    label: "Step 4 · Ongoing",
    offset: "lg:ml-36",
    title: "You Always Know Where You Stand",
    bullets: [
      "Weekly/monthly dashboards: coverage, accuracy, time spent",
      "Get structured with your everyday studies and revision",
      "Mentor guidance based on your numbers, not generic tips",
    ],
    outcome:
      "Sharper system, sharper mentor, visible progress — every week.",
  },
] as const;

export const COHORT_PREP_FEATURES = [
  {
    number: "01",
    title: "Smart Study Planner",
    intro:
      "Students can manage their daily study plan based on their lectures and practice revision questions. Each day, students get a to-do list — once they check it off, they unlock 3–5 questions to practice.",
    listLabel: "This helps students:",
    bullets: [
      "Stay organized with their daily study goals",
      "Maintain consistency in preparation",
      "Avoid procrastination and confusion about what to study",
    ],
    footer:
      "A clear daily plan leads to better productivity and stronger discipline.",
    image: "/assets/images/cohort-app-planner.png",
  },
  {
    number: "02",
    title: "Daily & Weekly Progress Tracker",
    intro:
      "The platform automatically tracks student activity and performance to help them understand their preparation progress.",
    listLabel: "Students can monitor:",
    bullets: [
      "Study consistency",
      "Task completion rate",
      "Improvement over time",
    ],
    footer:
      "Tracking progress regularly helps students stay motivated and accountable.",
    image: "/assets/images/cohort-app-progress.png",
  },
  {
    number: "03",
    title: "Revision Tracking",
    intro:
      "Students can monitor their revision completion across different subjects and chapters.",
    listLabel: "This helps them clearly identify:",
    bullets: [
      "Completed topics",
      "Revision accuracy",
      "Weak areas that require more practice",
    ],
    footer:
      "With revision tracking, a student always knows where they stand in their syllabus.",
    image: "/assets/images/cohort-app-tracker.png",
  },
  {
    number: "04",
    title: "Daily & Weekly Practice Quizzes",
    intro:
      "Regular quizzes help students evaluate their conceptual understanding and test their preparation.",
    listLabel: "These quizzes are designed to:",
    bullets: [
      "Strengthen concepts",
      "Improve retention",
      "Increase exam readiness",
    ],
    footer:
      "Frequent evaluation ensures that students continuously improve their performance.",
    image: "/assets/images/cohort-app-quizzes.png",
  },
  {
    number: "05",
    title: "Error Book System",
    intro:
      "One of the most powerful features of the platform. Students can record mistakes they make during:",
    listLabel: "",
    bullets: ["Practice questions", "Assignments", "Tests"],
    footer:
      "These mistakes are stored in a personal error book, allowing students to revisit and correct them regularly.",
    image: "/assets/images/cohort-app-errors.png",
  },
  {
    number: "06",
    title: "1 on 1 Mentorship Support",
    intro:
      "Students can connect with JEE and NEET toppers through personalized one-on-one mentorship sessions.",
    listLabel: "Students can discuss:",
    bullets: [
      "Preparation challenges and motivation issues",
      "Daily struggles during preparation",
      "Concerns they may hesitate to share with parents or teachers",
    ],
    footer:
      "This mentorship creates a supportive environment where students feel heard.",
    image: "/assets/images/cohort-app-mentor.png",
  },
] as const;
