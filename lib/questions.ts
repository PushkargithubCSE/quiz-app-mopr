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
      "Select activities based primarily on the schemes with the largest available budgets.",
      "Prioritise interventions based on identified gaps, community aspirations and available resources, and map them to relevant LSDG themes and schemes.",
      "Prepare separate plans for each department without consolidating them at the Panchayat level.",
      "Replicate the previous year's plan with minor modifications to ensure timely uploading."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 2,
    question: "A Block Development Officer observes that Gram Panchayats have proposed similar infrastructure works, but the concerned departments have not shared their annual plans or resource allocations. Which intervention would most effectively address this gap?",
    options: [
      "Direct each Gram Panchayat to prepare its plan independently and seek departmental convergence after approval.",
      "Ask the District Panchayat to prepare a common list of works without consulting the Gram Panchayats.",
      "Defer planning until all departmental budgets have been fully utilised.",
      "Organise a Block-level workshop for information-sharing, resource mapping and coordination between Gram Panchayats and line departments before finalising the plans."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 3,
    question: "Which approach best reflects the relationship between the nine LSDG themes and the Panchayat Development Plan?",
    options: [
      "The nine themes provide an integrated development framework, while individual activities are selected based on local needs, identified gaps and available resources.",
      "Each Gram Panchayat must allocate an equal amount of funds to all nine themes, irrespective of local conditions.",
      "The nine themes replace the need to map activities to departmental schemes.",
      "Every Panchayat must undertake an identical set of activities under each theme."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 4,
    question: "A State is reviewing the quality of GPDPs and finds that most plans contain infrastructure projects but few interventions related to livelihoods, social inclusion or behavioural change. Which measure would be most appropriate?",
    options: [
      "Increase the number of infrastructure projects in each plan.",
      "Restrict the planning process to activities eligible for Finance Commission grants.",
      "Strengthen thematic planning by using PAI findings, community consultations and household-level needs to identify a balanced set of interventions.",
      "Assess plan quality exclusively on the basis of the total estimated cost."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 5,
    question: "Which of the following best describes the role of a State Panchayati Raj Department in ensuring effective implementation of PPC 2026–27?",
    options: [
      "Prepare the GPDPs centrally and distribute them to Gram Panchayats for approval.",
      "Coordinate with relevant departments, orient State-level stakeholders, facilitate cascading of guidance to District and Block levels, and monitor planning progress and quality.",
      "Limit its role to communicating the deadline for uploading plans.",
      "Transfer responsibility for all planning activities to the State Institute of Rural Development."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 6,
    question: "A Gram Panchayat has a low PAI score under the Healthy Panchayat theme. However, the Gram Sabha identifies both infrastructure gaps and poor community practices contributing to the problem. How should these findings be reflected in the GPDP?",
    options: [
      "Include only infrastructure projects, as behavioural interventions cannot form part of local planning.",
      "Prioritise activities according to the funds available under a single health scheme.",
      "Refer the issue entirely to the Health Department and exclude it from the GPDP.",
      "Include appropriate service-delivery and infrastructure interventions alongside feasible community-led activities, with departmental convergence wherever required."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 7,
    question: "Which of the following correctly distinguishes the roles of PAI and the Quality GPDP Score?",
    options: [
      "PAI assesses the developmental status of a Panchayat, while the Quality GPDP Score assesses the quality of the plan prepared.",
      "PAI measures only financial expenditure, while the Quality GPDP Score measures the number of Gram Sabha meetings.",
      "PAI determines grant releases directly, while the Quality GPDP Score replaces the need for Gram Sabha approval.",
      "Both are exclusively intended to assess the performance of State Governments."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 8,
    question: "A Gram Panchayat has approved its GPDP in the Gram Sabha, but the activities entered on eGramSwaraj are not mapped to relevant PAI indicators. What should be done?",
    options: [
      "Leave the mapping incomplete because Gram Sabha approval is sufficient for all portal requirements.",
      "Remove the activities that cannot be mapped immediately.",
      "Complete the prescribed mapping of activities to relevant PAI indicators and ensure that all approved activities are appropriately entered on the portal.",
      "Upload only the activities funded through Finance Commission grants."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 9,
    question: "A State seeks to improve transparency in the recording of Gram Sabha proceedings and the documentation of resolutions. Which combination of digital processes is most appropriate?",
    options: [
      "Use eGramSwaraj exclusively for recording audio and generating Gram Sabha minutes.",
      "Use SabhaSaar for AI-assisted generation of minutes from recorded proceedings and the prescribed platforms, including Panchayat Nirnay and Meeting Online, for recording proceedings and resolutions, as applicable.",
      "Use PAI to generate Gram Sabha minutes and approve resolutions automatically.",
      "Maintain only physical registers, as digital documentation is not relevant to PPC."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 10,
    question: "Which of the following best describes the role of the eGramSwaraj portal in the GPDP process?",
    options: [
      "It independently determines the development priorities of each Gram Panchayat.",
      "It replaces the need for departmental coordination and Gram Sabha approval.",
      "It is used exclusively for reporting expenditure after completion of works.",
      "It supports structured entry of approved plans, thematic activity mapping and documentation, linking planning with financial and implementation-related information."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 11,
    question: "A State is distributing the Sixteenth Finance Commission grants among Gram Panchayats, Block Panchayats and District Panchayats. What principle should guide the distribution within the State?",
    options: [
      "Apply an equal one-third distribution across the three tiers in every State.",
      "Allocate the entire amount to Gram Panchayats irrespective of the State's institutional structure.",
      "Follow the latest accepted recommendations of the respective State Finance Commission; in their absence, apply the prescribed tier-wise distribution norms.",
      "Allow each Block Panchayat to determine the distribution without State-level guidance."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 12,
    question: "A Gram Panchayat is preparing its resource envelope for FY 2027–28. Which approach is most appropriate?",
    options: [
      "Consolidate anticipated Finance Commission grants, State and Central scheme resources, OSR and other available resources, and map these against prioritised activities while avoiding double counting.",
      "Include only the untied component of Finance Commission grants.",
      "Prepare the plan using the previous year's actual expenditure as the sole resource estimate.",
      "Include all scheme allocations as freely interchangeable funds, irrespective of their conditions of use."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 13,
    question: "Under the Sixteenth Finance Commission framework described in the PPC booklet, which statement correctly reflects the grant structure for Rural Local Bodies?",
    options: [
      "The entire grant is performance-based from 2026–27.",
      "Basic Grants account for 80% and Performance Grants for 20%, with the RLB Performance Grant applicable from 2028–29.",
      "Basic Grants account for 50% and Performance Grants for 50% from the first year.",
      "Performance Grants are available only to District Panchayats."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 14,
    question: "A Gram Panchayat proposes to use its Basic Untied Grant to pay the salaries of contractual staff and construct a road. Which statement correctly reflects the restrictions described in the FC-16 framework?",
    options: [
      "Both expenditures are permitted without any additional conditions.",
      "Salaries are permitted if the Gram Sabha approves them, while road expenditure is completely prohibited.",
      "Both expenditures are permitted if the Panchayat has sufficient funds.",
      "Establishment-related expenditure is not permitted, and expenditure on roads cannot exceed 20% of the untied grant allocation, subject to other applicable conditions."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 15,
    question: "Which statement best describes the relationship between the tied and untied components of 16-FC Basic Grants?",
    options: [
      "Both components may be used interchangeably for any activity approved by the Panchayat Secretary.",
      "Tied grants may be used for any infrastructure project, while untied grants are restricted exclusively to sanitation.",
      "The tied component is earmarked for sanitation and solid waste management and/or water management, including eligible operation and maintenance; the untied component supports locally identified needs within the prescribed framework.",
      "The tied component is intended exclusively for salaries, while the untied component is intended exclusively for road construction."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 16,
    question: "A Gram Panchayat meets the OSR growth condition in FY 2027–28. Can it receive the RLB Performance Grant in that year under the FC-16 framework?",
    options: [
      "No. The RLB Performance Grant is applicable from FY 2028–29, subject to fulfilment of the prescribed conditions.",
      "Yes. The grant is available from the first year to every Panchayat meeting the OSR condition.",
      "Yes. OSR growth alone makes the Panchayat eligible from FY 2027–28.",
      "No. The RLB Performance Grant is applicable only from FY 2030–31."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 17,
    question: "Under the 16-FC framework, what is the significance of the State Performance Grant condition?",
    options: [
      "It requires States to transfer all Central grants directly to individual beneficiaries.",
      "It links eligibility for the State Performance Grant component to the State transferring grants to local bodies from its own resources, in the preceding year, amounting to at least 20% of the prescribed Basic Finance Commission grant benchmark.",
      "It requires every Gram Panchayat to transfer 20% of its OSR to the State Government.",
      "It replaces the constitutional requirement to constitute State Finance Commissions."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 18,
    question: "A State has not ensured the prescribed publication of provisional and audited accounts by its Rural Local Bodies. What is the implication for the release of Basic Grants under the 16-FC framework?",
    options: [
      "The State automatically becomes eligible for the full grant if it has submitted its Annual Action Plan.",
      "The condition applies only to District Panchayats and not to Gram Panchayats.",
      "The accounts can be published at any time without affecting grant eligibility.",
      "Release is subject to the prescribed entry-level conditions; where only a fraction of Rural Local Bodies meets the conditions, disbursement to the State is proportionate to the eligible local bodies."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 19,
    question: "A Self-Help Group federation submits a Village Prosperity and Resilience Plan (VPRP) containing demands for household entitlements, livelihood support and community infrastructure. How should these demands be treated during GPDP preparation?",
    options: [
      "Incorporate all demands automatically, irrespective of eligibility or available resources.",
      "Keep the VPRP separate from the GPDP to avoid duplication.",
      "Discuss the demands through the planning process, assess their feasibility and available resources, and incorporate agreed and feasible demands into the GPDP.",
      "Consider only community infrastructure demands and exclude household entitlements and livelihoods."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 20,
    question: "A Gram Panchayat has prepared a plan that performs well across the nine LSDG themes but contains no activities to strengthen livelihoods, household incomes or OSR. What is the most appropriate assessment?",
    options: [
      "The plan should also address the economic dimension of development, including household livelihoods, local value chains, Panchayat revenue generation and asset sustainability.",
      "The plan is complete because thematic alignment alone is sufficient.",
      "Economic development should be considered only by the District Panchayat.",
      "OSR and livelihoods should be excluded from the GPDP because they fall outside decentralised planning."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 21,
    question: "A Block has identified a strong potential for goat rearing and livestock-based livelihoods. How can this finding best inform GPDP preparation?",
    options: [
      "Require every Gram Panchayat in the Block to implement an identical livestock project.",
      "Limit planning to the procurement of livestock, without considering market access or support services.",
      "Exclude the activity if it is not directly funded through a Finance Commission grant.",
      "Align feasible Panchayat-level interventions with the relevant local value chain, including production, aggregation, processing, market access and producer institutions, as appropriate."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  },
  {
    id: 22,
    question: "During a Gram Sabha, it is found that vulnerable households are not accessing pensions, ration entitlements, housing benefits and other eligible schemes. What should the Panchayat do?",
    options: [
      "Record the issue only in the Gram Sabha minutes and take no further action.",
      "Identify eligible households, coordinate with the concerned departments, and incorporate appropriate entitlement and social-security interventions into the planning and follow-up process.",
      "Transfer responsibility entirely to the State Government without documenting local needs.",
      "Prioritise new infrastructure works over household entitlement gaps in every case."
    ],
    correctAnswer: 1,
    category: "Panchayati Raj"
  },
  {
    id: 23,
    question: "A draft GPDP contains several activities aligned with PAI indicators, but the proposed expenditure exceeds the estimated resource envelope. What should the Panchayat do before placing the plan for final approval?",
    options: [
      "Retain all activities and assume that additional funds will become available.",
      "Delete all activities that are not funded through Finance Commission grants.",
      "Review and prioritise activities, map feasible funding sources and convergence opportunities, and revise the draft to improve financial feasibility.",
      "Approve the plan first and assess its financial viability after implementation begins."
    ],
    correctAnswer: 2,
    category: "Panchayati Raj"
  },
  {
    id: 24,
    question: "A State has completed the National PPC Workshop but has not planned any follow-up orientation for Districts and Blocks. Which action would best support effective implementation?",
    options: [
      "Cascade the key guidance through State-, District- and Block-level orientation and capacity-building programmes, with continued handholding for Panchayats.",
      "Restrict the workshop material to the State headquarters.",
      "Ask Gram Panchayats to independently interpret the guidelines without technical support.",
      "Conduct a single online meeting and consider the capacity-building process complete."
    ],
    correctAnswer: 0,
    category: "Panchayati Raj"
  },
  {
    id: 25,
    question: "Which set of measures would provide the strongest basis for assessing whether PPC 2026–27 is translating into effective Panchayat Development Plans?",
    options: [
      "Number of meetings conducted and number of participants attending the campaign alone.",
      "Total financial outlay proposed in the plans, irrespective of feasibility or implementation.",
      "Number of activities uploaded on eGramSwaraj, without examining their relevance or quality.",
      "Timely preparation and uploading of plans, meaningful community participation, use of PAI findings, resource and scheme convergence, plan quality, and follow-up on implementation and development outcomes."
    ],
    correctAnswer: 3,
    category: "Panchayati Raj"
  }
];
