export const COHORT_CHECKOUT_HREF = "#pricing";
export const COHORT_PRICE = "₹3,990";
export const COHORT_SEATS_TOTAL = 1000;
export const COHORT_SEATS_LEFT = 327;

export const COHORT_FAQS = [
  {
    question: "What happens once all 1,000 seats are filled?",
    answer:
      "Cohort 1 closes and registrations stop. Future cohorts may open later at different pricing.",
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
      "Yes — after you reserve your seat, you'll get access to download the app and get started immediately.",
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
      "You share your class schedule, syllabus stage, and pace.",
      "The app builds today's sequenced to-do list for your real starting point.",
      "No overwhelming 6-month roadmap — just today's execution.",
    ],
    outcome:
      "You stop wondering what to study. You open the app and know exactly what to do, in what order.",
  },
  {
    label: "Step 2 · Week 1",
    offset: "lg:ml-12 lg:mr-24",
    title: "The System Starts Learning How You Perform",
    bullets: [
      "Daily adaptive quizzes connect directly to what you studied.",
      "Every result becomes real topic-level accuracy data.",
      "Your mentor sees the data from day one — not a month later.",
    ],
    outcome:
      "You get an honest picture of where you stand, and your mentor already understands your preparation.",
  },
  {
    label: "Step 3 · Month 1",
    offset: "lg:ml-24 lg:mr-12",
    title: "Your Plan Restructures Around Real Performance",
    bullets: [
      "Weak topics surface automatically through accuracy tracking.",
      "Your plan spends more time where accuracy is low and less where you're strong.",
      "Below 40% accuracy triggers a mentor call; you can also request one anytime.",
      "Every mistake is saved in your error book for revision.",
    ],
    outcome:
      "Your preparation actively corrects itself around weak spots before they become bigger gaps.",
  },
  {
    label: "Step 4 · Ongoing",
    offset: "lg:ml-36",
    title: "You Always Know Exactly Where You Stand",
    bullets: [
      "Weekly and monthly dashboards show coverage, accuracy, and time spent.",
      "Mentor guidance is based on your numbers, not generic tips.",
      "Study → test → adjust → mentor input → sharper execution.",
    ],
    outcome:
      "Every week, your system and mentor guidance get sharper — and your progress stays visible.",
  },
] as const;
