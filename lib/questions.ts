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
    "id": 1,
    "question": "गाँव स्तर पर ग्राम पंचायत विकास योजना को कौन-सी संस्था अनुमोदित करती है?\nWhich body approves the Gram Panchayat Development Plan at the village level?",
    "options": [
      "ग्राम सभा / Gram Sabha",
      "खंड विकास अधिकारी / Block Development Officer",
      "जिलाधिकारी / District Magistrate",
      "वित्त आयोग / Finance Commission"
    ],
    "correctAnswer": 0,
    "category": "Panchayati Raj"
  },
  {
    "id": 2,
    "question": "उत्तर प्रदेश की चाँदपुर ग्राम पंचायत में पंचायत विकास सूचकांक (PAI) मूल्यांकन से पेयजल, आजीविका और पोषण में स्पष्ट कमियाँ सामने आई हैं। GPDP तैयार करते समय सबसे उपयुक्त अगला कदम क्या होना चाहिए?\nIn Chandpur Gram Panchayat of Uttar Pradesh, the Panchayat Advancement Index (PAI) assessment has identified clear gaps in drinking water, livelihoods and nutrition. What should be the most appropriate next step while preparing its GPDP?",
    "options": [
      "मुख्यतः उन योजनाओं के आधार पर गतिविधियाँ चुनना जिनका उपलब्ध बजट सबसे अधिक है। / Select activities based primarily on schemes with the largest available budgets.",
      "पहचानी गई कमियों, समुदाय की आकांक्षाओं और उपलब्ध संसाधनों के आधार पर हस्तक्षेपों को प्राथमिकता देना तथा उन्हें संबंधित LSDG विषयों और योजनाओं से जोड़ना। / Prioritise interventions based on identified gaps, community aspirations and available resources, and map them to relevant LSDG themes and schemes.",
      "पंचायत स्तर पर समेकित किए बिना प्रत्येक विभाग के लिए अलग-अलग योजनाएँ बनाना। / Prepare separate plans for each department without consolidating them at the Panchayat level.",
      "समय पर अपलोड सुनिश्चित करने के लिए पिछले वर्ष की योजना को थोड़े संशोधनों के साथ दोहराना। / Replicate the previous year's plan with minor modifications to ensure timely uploading."
    ],
    "correctAnswer": 1,
    "category": "Panchayati Raj"
  },
  {
    "id": 3,
    "question": "ओडिशा के सुंदरपुर ब्लॉक के खंड विकास अधिकारी ने देखा कि कई ग्राम पंचायतों ने मिलते-जुलते अवसंरचना कार्यों का प्रस्ताव दिया है, लेकिन संबंधित विभागों ने अपनी वार्षिक योजनाएँ या संसाधन आवंटन साझा नहीं किए हैं। इस कमी को दूर करने के लिए कौन-सा हस्तक्षेप सबसे प्रभावी होगा?\nThe Block Development Officer of Sundarpur Block in Odisha notices that several Gram Panchayats have proposed similar infrastructure works, but line departments have not shared their annual plans or resource allocations. Which intervention would most effectively address this gap?",
    "options": [
      "प्रत्येक ग्राम पंचायत को स्वतंत्र रूप से योजना बनाने का निर्देश देना और अनुमोदन के बाद विभागीय अभिसरण की मांग करना। / Direct each Gram Panchayat to prepare its plan independently and seek departmental convergence after approval.",
      "ग्राम पंचायतों से परामर्श किए बिना जिला पंचायत से कार्यों की साझा सूची तैयार करने को कहना। / Ask the District Panchayat to prepare a common list of works without consulting Gram Panchayats.",
      "सभी विभागीय बजट पूरी तरह व्यय होने तक नियोजन को टाल देना। / Defer planning until all departmental budgets have been fully utilised.",
      "योजनाओं को अंतिम रूप देने से पहले सूचना-साझाकरण, संसाधन मानचित्रण तथा ग्राम पंचायतों और संबंधित विभागों के बीच समन्वय के लिए ब्लॉक-स्तरीय कार्यशाला आयोजित करना। / Organise a Block-level workshop for information-sharing, resource mapping and coordination between Gram Panchayats and line departments before finalising plans."
    ],
    "correctAnswer": 3,
    "category": "Panchayati Raj"
  },
  {
    "id": 4,
    "question": "अनुमोदित ग्राम पंचायत विकास योजनाएँ किस पोर्टल पर दर्ज की जाती हैं?\nOn which portal are approved Gram Panchayat Development Plans entered?",
    "options": [
      "GeM / GeM",
      "UMANG / UMANG",
      "eGramSwaraj / eGramSwaraj",
      "DigiLocker / DigiLocker"
    ],
    "correctAnswer": 2,
    "category": "Panchayati Raj"
  },
  {
    "id": 5,
    "question": "PAI और गुणवत्तापूर्ण GPDP स्कोर की भूमिकाओं में सही अंतर कौन-सा है?\nWhich of the following correctly distinguishes the roles of PAI and the Quality GPDP Score?",
    "options": [
      "PAI किसी पंचायत की विकासात्मक स्थिति का आकलन करता है, जबकि गुणवत्तापूर्ण GPDP स्कोर तैयार की गई योजना की गुणवत्ता का आकलन करता है। / PAI assesses the developmental status of a Panchayat, while the Quality GPDP Score assesses the quality of the plan prepared.",
      "PAI केवल वित्तीय व्यय को मापता है, जबकि गुणवत्तापूर्ण GPDP स्कोर ग्राम सभा की बैठकों की संख्या को मापता है। / PAI measures only financial expenditure, while the Quality GPDP Score measures the number of Gram Sabha meetings.",
      "PAI सीधे अनुदान जारी करने का निर्धारण करता है, जबकि गुणवत्तापूरण GPDP स्कोर ग्राम सभा के अनुमोदन की आवश्यकता को समाप्त कर देता है। / PAI determines grant releases directly, while the Quality GPDP Score replaces the need for Gram Sabha approval.",
      "दोनों का उद्देश्य केवल राज्य सरकारों के प्रदर्शन का आकलन करना है। / Both are exclusively intended to assess the performance of State Governments."
    ],
    "correctAnswer": 0,
    "category": "Panchayati Raj"
  },
  {
    "id": 6,
    "question": "झारखंड की राज्य समीक्षा टीम पाती है कि अधिकांश GPDP अवसंरचना परियोजनाओं से भरी हैं, जबकि आजीविका, सामाजिक समावेशन या व्यवहार परिवर्तन से जुड़े कार्य बहुत कम हैं। कौन-सा उपाय सबसे उपयुक्त होगा?\nThe State review team in Jharkhand finds that most GPDPs contain infrastructure projects but few interventions on livelihoods, social inclusion or behavioural change. Which measure would be most appropriate?",
    "options": [
      "प्रत्येक योजना में अवसंरचना परियोजनाओं की संख्या बढ़ाना। / Increase the number of infrastructure projects in each plan.",
      "नियोजन प्रक्रिया को केवल उन गतिविधियों तक सीमित करना जो वित्त आयोग अनुदान के लिए पात्र हैं। / Restrict planning to activities eligible for Finance Commission grants.",
      "संतुलित कार्यों की पहचान के लिए PAI निष्कर्षों, सामुदायिक परामर्श और परिवार-स्तरीय आवश्यकताओं का उपयोग करके विषयगत नियोजन को सुदृढ़ करना। / Strengthen thematic planning using PAI findings, community consultations and household-level needs to identify balanced interventions.",
      "योजना की गुणवत्ता का आकलन केवल कुल अनुमानित लागत के आधार पर करना। / Assess plan quality exclusively on the basis of total estimated cost."
    ],
    "correctAnswer": 2,
    "category": "Panchayati Raj"
  },
  {
    "id": 7,
    "question": "पंचायत विकास योजना का मार्गदर्शन करने वाले स्थानीयकृत सतत विकास लक्ष्य (LSDG) विषयों की संख्या कितनी है?\nHow many LSDG themes guide the Panchayat Development Plan?",
    "options": [
      "पाँच / Five",
      "नौ / Nine",
      "सात / Seven",
      "बारह / Twelve"
    ],
    "correctAnswer": 1,
    "category": "Panchayati Raj"
  },
  {
    "id": 8,
    "question": "जन योजना अभियान (PPC) का मुख्य उद्देश्य क्या है?\nWhat is the main purpose of the People's Plan Campaign (PPC)?",
    "options": [
      "ग्राम पंचायतों के लिए कर्मचारियों की भर्ती करना / To recruit staff for Gram Panchayats",
      "प्रत्येक गाँव में पंचायत भवन बनाना / To construct a Panchayat Bhawan in every village",
      "समुदाय की भागीदारी से ग्राम पंचायत विकास योजनाएँ तैयार करना / To prepare Gram Panchayat Development Plans with community participation",
      "राज्यों को वित्त आयोग अनुदान वितरित करना / To distribute Finance Commission grants to States"
    ],
    "correctAnswer": 2,
    "category": "Panchayati Raj"
  },
  {
    "id": 9,
    "question": "नई दिल्ली में राष्ट्रीय PPC कार्यशाला से लौटने के बाद, एक राज्य दल ने जिलों और ब्लॉकों के लिए कोई अनुवर्ती अभिविन्यास (ओरिएंटेशन) नियोजित नहीं किया है। प्रभावी क्रियान्वयन में कौन-सी कार्रवाई सबसे अधिक सहायक होगी?\nAfter returning from the National PPC Workshop in New Delhi, a State team has not planned follow-up orientation for Districts and Blocks. Which action would best support effective implementation?",
    "options": [
      "कार्यशाला सामग्री को राज्य मुख्यालय तक सीमित रखना। / Restrict the workshop material to the State headquarters.",
      "ग्राम पंचायतों से तकनीकी सहायता के बिना दिशानिर्देशों की स्वयं व्याख्या करने को कहना। / Ask Gram Panchayats to interpret guidelines independently without technical support.",
      "एक ऑनलाइन बैठक आयोजित कर क्षमता-निर्माण प्रक्रिया को पूर्ण मान लेना। / Conduct a single online meeting and consider capacity-building complete.",
      "राज्य, जिला और ब्लॉक स्तरीय अभिविन्यास एवं क्षमता-निर्माण कार्यक्रमों के माध्यम से मुख्य मार्गदर्शन को नीचे तक पहुँचाना तथा पंचायतों को निरंतर सहयोग देना। / Cascade guidance through State-, District- and Block-level orientation and capacity-building programmes, with continued support for Panchayats."
    ],
    "correctAnswer": 3,
    "category": "Panchayati Raj"
  },
  {
    "id": 10,
    "question": "नौ LSDG विषयों और पंचायत विकास योजना के बीच संबंध को कौन-सा दृष्टिकोण सबसे अच्छी तरह दर्शाता है?\nWhich approach best reflects the relationship between the nine LSDG themes and the Panchayat Development Plan?",
    "options": [
      "नौ विषय एक एकीकृत विकास ढाँचा प्रदान करते हैं, जबकि गतिविधियाँ स्थानीय आवश्यकताओं, पहचानी गई कमियों और उपलब्ध संसाधनों के आधार पर चुनी जाती हैं। / The nine themes provide an integrated development framework, while activities are selected based on local needs, identified gaps and available resources.",
      "स्थानीय परिस्थितियों की परवाह किए बिना प्रत्येक ग्राम पंचायत को सभी नौ विषयों पर समान राशि आवंटित करनी चाहिए। / Each Gram Panchayat must allocate equal funds to all nine themes, irrespective of local conditions.",
      "नौ विषय विभागीय योजनाओं से गतिविधियों को जोड़ने की आवश्यकता को समाप्त कर देते हैं। / The nine themes replace the need to map activities to departmental schemes.",
      "प्रत्येक पंचायत को हर विषय के अंतर्गत एक जैसी गतिविधियाँ ही करनी चाहिए। / Every Panchayat must undertake identical activities under each theme."
    ],
    "correctAnswer": 0,
    "category": "Panchayati Raj"
  },
  {
    "id": 11,
    "question": "निम्नलिखित में से कौन-सा नौ विषयगत LSDG विषयों में से एक नहीं है?\nWhich of the following is NOT one of the nine thematic LSDG themes?",
    "options": [
      "स्वस्थ पंचायत / Healthy Panchayat",
      "जल पर्याप्त पंचायत / Water Sufficient Panchayat",
      "निर्यातोन्मुख औद्योगिक पंचायत / Export-Oriented Industrial Panchayat",
      "बाल हितैषी पंचायत / Child Friendly Panchayat"
    ],
    "correctAnswer": 2,
    "category": "Panchayati Raj"
  },
  {
    "id": 12,
    "question": "छत्तीसगढ़ की देवगाँव ग्राम पंचायत के लोग जानना चाहते हैं कि उनकी ग्राम सभा में ठीक-ठीक क्या निर्णय हुआ, और राज्य कार्यवाही के अभिलेखन तथा प्रस्तावों के दस्तावेज़ीकरण में पारदर्शिता बढ़ाना चाहता है। डिजिटल प्रक्रियाओं का कौन-सा संयोजन सबसे उपयुक्त है?\nThe people of Devgaon Gram Panchayat in Chhattisgarh want transparency about Gram Sabha decisions, and the State wants to improve recording of proceedings and resolutions. Which combination of digital processes is most appropriate?",
    "options": [
      "ऑडियो रिकॉर्ड करने और ग्राम सभा की कार्यवाही-विवरण (मिनट्स) तैयार करने के लिए केवल eGramSwaraj का उपयोग करना। / Use eGramSwaraj exclusively for recording audio and generating Gram Sabha minutes.",
      "रिकॉर्ड की गई कार्यवाही से AI-सहायता प्राप्त कार्यवाही-विवरण तैयार करने के लिए SabhaSaar का तथा कार्यवाही और प्रस्तावों के अभिलेखन के लिए, जहाँ लागू हो, पंचायत निर्णय सहित निर्धारित प्लेटफ़ॉर्मों का उपयोग करना। / Use SabhaSaar for AI-assisted minutes from recorded proceedings and prescribed platforms, including Panchayat Nirnay, for recording proceedings and resolutions, as applicable.",
      "ग्राम सभा के कार्यवाही-विवरण तैयार करने और प्रस्तावों को स्वतः अनुमोदित करने के लिए PAI का उपयोग करना। / Use PAI to generate Gram Sabha minutes and approve resolutions automatically.",
      "केवल भौतिक रजिस्टर रखना, क्योंकि डिजिटल दस्तावेज़ीकरण PPC के लिए प्रासंगिक नहीं है। / Maintain only physical registers, as digital documentation is not relevant to PPC."
    ],
    "correctAnswer": 1,
    "category": "Panchayati Raj"
  },
  {
    "id": 13,
    "question": "सोलहवें वित्त आयोग के ढाँचे के अंतर्गत, ग्रामीण स्थानीय निकायों के लिए अनुदान संरचना को कौन-सा कथन सही दर्शाता है?\nUnder the Sixteenth Finance Commission framework, which statement correctly reflects the grant structure for Rural Local Bodies?",
    "options": [
      "2026–27 से पूरा अनुदान प्रदर्शन-आधारित है। / The entire grant is performance-based from 2026–27.",
      "Basic Grant 80% और Performance Grant 20% हैं, तथा RLB Performance Grant 2028–29 से लागू है। / Basic Grants account for 80% and Performance Grants for 20%, with the RLB Performance Grant applicable from 2028–29.",
      "पहले वर्ष से ही Basic Grant 50% और Performance Grant 50% हैं। / Basic Grants account for 50% and Performance Grants for 50% from the first year.",
      "Performance Grant केवल जिला पंचायतों के लिए उपलब्ध हैं। / Performance Grants are available only to District Panchayats."
    ],
    "correctAnswer": 1,
    "category": "Panchayati Raj"
  },
  {
    "id": 14,
    "question": "हरियाणा की माधोपुर ग्राम पंचायत अपने Basic Untied Grant से संविदा कर्मचारियों का वेतन देने और एक सड़क बनाने की योजना बना रही है। FC-16 ढाँचे में वर्णित प्रतिबंधों को कौन-सा कथन सही दर्शाता है?\nMadhopur Gram Panchayat in Haryana plans to use its Basic Untied Grant to pay contractual staff salaries and construct a road. Which statement correctly reflects the restrictions described in the FC-16 framework?",
    "options": [
      "दोनों व्यय बिना किसी अतिरिक्त शर्त के अनुमत हैं। / Both expenditures are permitted without additional conditions.",
      "ग्राम सभा के अनुमोदन पर वेतन अनुमत है, जबकि सड़क पर व्यय पूरी तरह निषिद्ध है। / Salaries are permitted if the Gram Sabha approves them, while road expenditure is completely prohibited.",
      "यदि पंचायत के पास पर्याप्त निधि है तो दोनों व्यय अनुमत हैं। / Both expenditures are permitted if the Panchayat has sufficient funds.",
      "स्थापना-संबंधी व्यय अनुमत नहीं है, और सड़कों पर व्यय Basic Untied Grant आवंटन के 20% से अधिक नहीं हो सकता, अन्य लागू शर्तों के अधीन। / Establishment-related expenditure is not permitted, and road expenditure cannot exceed 20% of the untied grant allocation, subject to other conditions."
    ],
    "correctAnswer": 3,
    "category": "Panchayati Raj"
  },
  {
    "id": 15,
    "question": "पश्चिम बंगाल की नयागाँव ग्राम पंचायत वित्त वर्ष 2027–28 में OSR वृद्धि की शर्त पूरी करती है और उसी वर्ष RLB Performance Grant की प्रतीक्षा कर रही है। FC-16 ढाँचे के अंतर्गत क्या उसे यह अनुदान मिल सकता है?\nNayagaon Gram Panchayat in West Bengal meets the OSR growth condition in FY 2027–28. Can it receive the RLB Performance Grant in that same year under the FC-16 framework?",
    "options": [
      "नहीं। RLB Performance Grant निर्धारित शर्तों की पूर्ति के अधीन, वित्त वर्ष 2028–29 से लागू है। / No. The RLB Performance Grant is applicable from FY 2028–29, subject to prescribed conditions.",
      "हाँ। OSR शर्त पूरी करने वाली प्रत्येक पंचायत को यह अनुदान पहले वर्ष से उपलब्ध है। / Yes. The grant is available from the first year to every Panchayat meeting the OSR condition.",
      "हाँ। केवल OSR वृद्धि से ही पंचायत वित्त वर्ष 2027–28 से पात्र हो जाती है। / Yes. OSR growth alone makes the Panchayat eligible from FY 2027–28.",
      "नहीं। RLB Performance Grant केवल वित्त वर्ष 2030–31 से लागू है। / No. The RLB Performance Grant is applicable only from FY 2030–31."
    ],
    "correctAnswer": 0,
    "category": "Panchayati Raj"
  },
  {
    "id": 16,
    "question": "असम की कल्याणपुर ग्राम पंचायत का स्वयं सहायता समूह (SHG) संघ घरेलू पात्रताओं, आजीविका सहायता और सामुदायिक अवसंरचना की मांगों के साथ ग्राम समृद्धि एवं लचीलापन योजना (VPRP) प्रस्तुत करता है। GPDP तैयार करते समय इन मांगों को कैसे लिया जाना चाहिए?\nThe Self-Help Group federation of Kalyanpur Gram Panchayat in Assam submits a Village Prosperity and Resilience Plan (VPRP) with demands for household entitlements, livelihood support and community infrastructure. How should these demands be treated during GPDP preparation?",
    "options": [
      "पात्रता या उपलब्ध संसाधनों की परवाह किए बिना सभी मांगों को स्वतः शामिल करना। / Incorporate all demands automatically, irrespective of eligibility or available resources.",
      "दोहराव से बचने के लिए VPRP को GPDP से अलग रखना। / Keep the VPRP separate from the GPDP to avoid duplication.",
      "नियोजन प्रक्रिया में मांगों पर चर्चा करना, उनकी व्यवहार्यता और उपलब्ध संसाधनों का आकलन करना, और सहमत एवं व्यवहार्य मांगों को GPDP में शामिल करना। / Discuss demands during planning, assess feasibility and available resources, and incorporate agreed and feasible demands into the GPDP.",
      "केवल सामुदायिक अवसंरचना की मांगों पर विचार करना तथा घरेलू पात्रताओं और आजीविका को बाहर रखना। / Consider only community infrastructure demands and exclude household entitlements and livelihoods."
    ],
    "correctAnswer": 2,
    "category": "Panchayati Raj"
  },
  {
    "id": 17,
    "question": "गुजरात की पिपलगाँव ग्राम पंचायत ने ऐसी योजना बनाई है जो नौ LSDG विषयों में अच्छा अंक पाती है, फिर भी उसमें आजीविका, घरेलू आय या OSR को मजबूत करने की कोई गतिविधि नहीं है। सबसे उपयुक्त आकलन क्या है?\nPipalgaon Gram Panchayat in Gujarat has prepared a plan that scores well across the nine LSDG themes, but contains no activity to strengthen livelihoods, household incomes or OSR. What is the most appropriate assessment?",
    "options": [
      "योजना में विकास के आर्थिक आयाम को भी शामिल किया जाना चाहिए, जिसमें घरेलू आजीविका, स्थानीय मूल्य शृंखलाएँ, पंचायत राजस्व सृजन और परिसंपत्ति स्थिरता शामिल हैं। / The plan should address the economic dimension, including household livelihoods, local value chains, Panchayat revenue generation and asset sustainability.",
      "योजना पूर्ण है, क्योंकि केवल विषयगत संरेखण पर्याप्त है। / The plan is complete because thematic alignment alone is sufficient.",
      "आर्थिक विकास पर विचार केवल जिला पंचायत द्वारा किया जाना चाहिए। / Economic development should be considered only by the District Panchayat.",
      "OSR और आजीविका को GPDP से बाहर रखना चाहिए क्योंकि वे विकेंद्रीकृत नियोजन के दायरे से बाहर हैं। / OSR and livelihoods should be excluded from the GPDP because they fall outside decentralised planning."
    ],
    "correctAnswer": 0,
    "category": "Panchayati Raj"
  },
  {
    "id": 18,
    "question": "GPDP का पूर्ण रूप क्या है?\nWhat does GPDP stand for?",
    "options": [
      "डिजिटल पंचायत डिलीवरी प्लान / Digital Panchayat Delivery Plan",
      "सरकारी पंचायत विकास कार्यक्रम / Government Panchayat Development Programme",
      "सामान्य जन विकास योजना / General Public Development Plan",
      "ग्राम पंचायत विकास योजना / Gram Panchayat Development Plan"
    ],
    "correctAnswer": 3,
    "category": "Panchayati Raj"
  },
  {
    "id": 19,
    "question": "उत्तराखंड की शिवपुर ग्राम पंचायत की ग्राम सभा में सामने आता है कि कई कमजोर परिवारों को वे पेंशन, राशन पात्रता, आवास लाभ और अन्य योजनाएँ नहीं मिल रहीं जिनके वे पात्र हैं। पंचायत को क्या करना चाहिए?\nAt the Gram Sabha of Shivpur Gram Panchayat in Uttarakhand, it emerges that many vulnerable households are not receiving pensions, ration entitlements, housing benefits and other schemes they are eligible for. What should the Panchayat do?",
    "options": [
      "मुद्दे को केवल ग्राम सभा के कार्यवाही-विवरण में दर्ज करना और आगे कोई कार्रवाई न करना। / Record the issue only in Gram Sabha minutes and take no further action.",
      "पात्र परिवारों की पहचान करना, संबंधित विभागों के साथ समन्वय करना, और उपयुक्त पात्रता एवं सामाजिक-सुरक्षा हस्तक्षेपों को नियोजन तथा अनुवर्ती प्रक्रिया में शामिल करना। / Identify eligible households, coordinate with concerned departments, and incorporate appropriate entitlement and social-security interventions into planning and follow-up.",
      "स्थानीय आवश्यकताओं का दस्तावेज़ीकरण किए बिना जिम्मेदारी पूरी तरह राज्य सरकार को सौंप देना। / Transfer responsibility entirely to the State Government without documenting local needs.",
      "हर स्थिति में घरेलू पात्रता संबंधी कमियों की तुलना में नए अवसंरचना कार्यों को प्राथमिकता देना। / Prioritise new infrastructure works over household entitlement gaps in every case."
    ],
    "correctAnswer": 1,
    "category": "Panchayati Raj"
  },
  {
    "id": 20,
    "question": "राजस्थान की बवानीपुर ग्राम पंचायत में एक मसौदा GPDP में PAI संकेतकों से संरेखित कई गतिविधियाँ हैं, लेकिन प्रस्तावित व्यय अनुमानित संसाधन सीमा से अधिक है। अंतिम अनुमोदन के लिए योजना प्रस्तुत करने से पहले पंचायत को क्या करना चाहिए?\nIn Bawanipur Gram Panchayat of Rajasthan, a draft GPDP contains activities aligned with PAI indicators, but proposed expenditure exceeds the estimated resource envelope. What should the Panchayat do before final approval?",
    "options": [
      "सभी गतिविधियाँ बनाए रखना और योजना में लिख देना कि कमी की पूर्ति बाद में अपेक्षित अतिरिक्त निधि से होगी। / Retain all activities and note that the shortfall will be met from additional funds expected later.",
      "वित्त आयोग अनुदान से वित्तपोषित न होने वाली हर गतिविधि को हटा देना, ताकि योजना संसाधन सीमा में आ जाए। / Delete every activity not funded through Finance Commission grants.",
      "प्राथमिकताओं की समीक्षा किए बिना सभी विषयों में हर गतिविधि की लागत समान प्रतिशत से घटा देना। / Reduce every activity's cost by the same percentage without revisiting priorities.",
      "समुदाय के साथ मसौदे की समीक्षा करना, PAI कमियों और स्थानीय आवश्यकताओं के अनुसार गतिविधियों को प्राथमिकता देना, अभिसरण तथा अन्य वित्तपोषण स्रोतों की पहचान करना, और योजना को संसाधन सीमा के भीतर लाने के लिए संशोधित करना.\nReview the draft with the community, prioritise activities by PAI gaps and local needs, identify convergence and other funding sources, and revise the plan to fit the resource envelope."
    ],
    "correctAnswer": 3,
    "category": "Panchayati Raj"
  }
];
