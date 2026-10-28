export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface Participant {
  id: string;
  name: string;
  phone: string;
  state: string;
  district: string;
  block: string;
  gp: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  completedAt: string;
  timeTaken: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "A Gram Panchayat has identified gaps in drinking water, livelihoods and nutrition through its Panchayat Advancement Index (PAI) assessment. What should be the most appropriate next step in preparing its GPDP?",
    options: [
      "Select activities based primarily on the schemes with the largest available budgets",
      "Prioritise interventions based on identified gaps, community aspirations and available resources, and map them to relevant LSDG themes and schemes",
      "Prepare separate plans for each department without consolidating them at the Panchayat level",
      "Replicate the previous year's plan with minor modifications to ensure timely uploading",
    ],
    correctAnswer: 2,
    category: "Panchayati Raj",
  },
  {
    id: 2,
    question: "A Block Development Officer observes that Gram Panchayats have proposed similar infrastructure works, but the concerned departments have not shared their annual plans or resource allocations. Which intervention would most effectively address this gap?",
    options: [
      "Direct each Gram Panchayat to prepare its plan independently and seek departmental convergence after approval.",
      "Ask the District Panchayat to prepare a common list of works without consulting the Gram Panchayats",
      "Defer planning until all departmental budgets have been fully utilised.",
      "Organise a Block-level workshop for information-sharing, resource mapping and coordination between Gram Panchayats and line departments before finalising the plans",
    ],
    correctAnswer: 1,
    category: "Panchayati Raj",
  },
  {
    id: 3,
    question: "Which approach best reflects the relationship between the nine LSDG themes and the Panchayat Development Plan?",
    options: [
      "The nine themes provide an integrated development framework, while individual activities are selected based on local needs, identified gaps and available resources.",
      "Each Gram Panchayat must allocate an equal amount of funds to all nine themes, irrespective of local conditions",
      "Every Panchayat must undertake an identical set of activities under each theme",
    ],
    correctAnswer: 1,
    category: "Panchayati Raj",
  },
  {
    id: 4,
    question: "A State is reviewing the quality of GPDPs and finds that most plans contain infrastructure projects but few interventions related to livelihoods, social inclusion or behavioural change. Which measure would be most appropriate?",
    options: [
      "Increase the number of infrastructure projects in each plan",
      "Restrict the planning process to activities eligible for Finance Commission grants.",
      "Strengthen thematic planning by using PAI findings, community consultations and household-level needs to identify a balanced set of interventions",
      "Assess plan quality exclusively on the basis of the total estimated cost",
    ],
    correctAnswer: 1,
    category: "Panchayati Raj",
  },
  
];