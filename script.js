// Timetable data
const timetableData = [
  {
    week: 1,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Pharmacopeia)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 1,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Briefing & Lecture (Opioids)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 1,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Intro & Lecture (Gout)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 1,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Herbal supplement)",
    mode: "Online",
    venue: "SDL (PRE-RECORDED)",
  },
  {
    week: 1,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Intro & Lecture (Anti-TB, Antifungal)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 1,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Intro & Lecture (Emulsion)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 1,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Lecture (Opioids)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 1,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Electromagnetic spectrum)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },

  {
    week: 2,
    day: "Mon",
    time: "All Day",
    course: "OIA2002/OIA2012",
    activity: "Public Holiday (Deepavali)",
    mode: "N/A",
    venue: "N/A",
  },
  {
    week: 2,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (RA, Osteoarthritis)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 2,
    day: "Wed",
    time: "9:00 AM - 12:00 PM",
    course: "OIA1017",
    activity: "Intro to module, Lecture (Health supplement)",
    mode: "Online",
    venue: "F2F ONLINE",
  },
  {
    week: 2,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Antihepatitis, antiretroviral)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 2,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Emulsion mfg)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 2,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 1 (Group A)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 2,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 1",
    mode: "Physical",
    venue: "The Cube@Pharmacy",
  },
  {
    week: 2,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 1",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 3,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Refractometry, Polarimetry)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 3,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (NSAIDs)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 3,
    day: "Tue",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2013",
    activity: "Lecture (RA - Part 2)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 3,
    day: "Tue",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Tutorial 1",
    mode: "Online",
    venue: "Self-paced",
  },
  {
    week: 3,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Prebiotics & Probiotics)",
    mode: "Online",
    venue: "SDL (PRE-RECORDED)",
  },
  {
    week: 3,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Antiprotozoal) & Tutorial 1",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 3,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Suspension)",
    mode: "Online",
    venue: "Online",
  },
  {
    week: 3,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 1 (Group B)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 3,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 2",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 3,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 2",
    mode: "Online",
    venue: "Self-paced",
  },
];

// Continue with more data...// Add remaining timetable data
const remainingData = [
  {
    week: 4,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Spectrophotometry)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 4,
    day: "Mon",
    time: "10:00 AM - 1:00 PM",
    course: "OIA2003",
    activity: "Practical 1 (Group A)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 4,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Steroids)",
    mode: "Online",
    venue: "NF2F - Interactive Lecture",
  },
  {
    week: 4,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (Management of RA)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 4,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Vitamins)",
    mode: "Online",
    venue: "SDL (PRE-RECORDED)",
  },
  {
    week: 4,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Management of HIV)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 4,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Suppositories) & Tutorial 1",
    mode: "Online",
    venue: "Online",
  },
  {
    week: 4,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 2 (Group A)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 4,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 3",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 4,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Spectrophotometry)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },

  {
    week: 5,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (¹H NMR)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 5,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Adrenoceptor agonists)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 5,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (Management of Osteoarthritis)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 5,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Free radicals) & Tutorial 1",
    mode: "Online",
    venue: "F2F ONLINE",
  },
  {
    week: 5,
    day: "Tue",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2003",
    activity: "Practical 1 (Group B)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 5,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Tuberculosis) & Tutorial 2",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 5,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Ointment/Gel)",
    mode: "Online",
    venue: "Online",
  },
  {
    week: 5,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 2 (Group B)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 5,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 4",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 5,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 3",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 6,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (¹H NMR)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 6,
    day: "Mon",
    time: "10:00 AM - 1:00 PM",
    course: "OIA2003",
    activity: "Practical 2 (Group A)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 6,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Muscarinic receptor)",
    mode: "Online",
    venue: "NF2F - Interactive Lecture",
  },
  {
    week: 6,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (Immunosuppressants)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 6,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Immune health) & Tutorial 2",
    mode: "Online",
    venue: "SDL (ONLINE)",
  },
  {
    week: 6,
    day: "Thu",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2014",
    activity: "Test 1",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 6,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 3 (Group A)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 6,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 5",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 6,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Chemical shift table)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },

  {
    week: 7,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (¹³C NMR) & Assigned Reading",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 7,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Antibacterial agents)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 7,
    day: "Tue",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2013",
    activity: "Lecture (Cytokine modulators)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 7,
    day: "Tue",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Tutorial 2",
    mode: "Online",
    venue: "Self-paced",
  },
  {
    week: 7,
    day: "Tue",
    time: "10:00 AM - 11:00 AM",
    course: "OIA1017",
    activity: "CONASS Test (20%)",
    mode: "Online",
    venue: "TEST (ONLINE)",
  },
  {
    week: 7,
    day: "Tue",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2003",
    activity: "Practical 2 (Group B)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 7,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Fungal infections)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 7,
    day: "Thu",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2002",
    activity: "Practical 3 (Group B)",
    mode: "Physical",
    venue: "MK2, Makmal Pelbagai/ Alat 1 & 2",
  },
  {
    week: 7,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Test-1 (10%)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 7,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 4",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 8,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Test",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 8,
    day: "Mon",
    time: "10:00 AM - 1:00 PM",
    course: "OIA2003",
    activity: "Practical 3 (Group A)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 8,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Anticancer agents)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 8,
    day: "Tue",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2013",
    activity: "Test 1 (20%)",
    mode: "Physical",
    venue: "To be confirmed",
  },
  {
    week: 8,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Essential Fatty Acids)",
    mode: "Online",
    venue: "F2F ONLINE",
  },
  {
    week: 8,
    day: "Tue",
    time: "2:00 PM - 5:00 PM",
    course: "OIA2003",
    activity: "Practical 3 (Group B)",
    mode: "Physical",
    venue: "Lab",
  },
  {
    week: 8,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Lecture (Viral hepatitis, herpes)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 8,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Test (Physical)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 8,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 6",
    mode: "Physical",
    venue: "The Cube@Pharmacy",
  },
  {
    week: 8,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (¹³C NMR)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },

  {
    week: 9,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Mass spectrometry)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 9,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Sedative & hypnotic)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 9,
    day: "Tue",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Test review 1",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 9,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Macrominerals)",
    mode: "Online",
    venue: "PRE-RECORDED (SDL)",
  },
  {
    week: 9,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Test 1 review & Tutorial 3",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 9,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Solution Dosage Form)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 9,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 7",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 9,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 5",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 10,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Mass spectrometry)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 10,
    day: "Mon",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Lecture (Solution mfg) & Tutorial 2",
    mode: "Physical",
    venue: "The Cube (Replacement)",
  },
  {
    week: 10,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Antipsychotic agents)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 10,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "SDL (Mgmt of SLE) & Lecture (IBD)",
    mode: "Online/Physical",
    venue: "SDL / The Cube",
  },
  {
    week: 10,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Men & Women's health)",
    mode: "Online",
    venue: "SDL (ONLINE)",
  },
  {
    week: 10,
    day: "Thu",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2014",
    activity: "Test 2",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 10,
    day: "Thu",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Case 1 (Group 1&2)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 10,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 8",
    mode: "Physical",
    venue: "The Cube@Pharmacy",
  },
  {
    week: 10,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 6",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 11,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (Fluorimetry, IR)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 11,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Antipsychotic agents)",
    mode: "Online",
    venue: "NF2F - Interactive Lecture",
  },
  {
    week: 11,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Assignment submission",
    mode: "N/A",
    venue: "N/A",
  },
  {
    week: 11,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Mental health)",
    mode: "Online",
    venue: "SDL (ONLINE)",
  },
  {
    week: 11,
    day: "Tue",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2003",
    activity: "Lecture (Quality Control)",
    mode: "Physical",
    venue: "The Cube (Replacement)",
  },
  {
    week: 11,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Test 2 review, Case 1 (Group 3&4)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 11,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 9",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 11,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (IR)",
    mode: "Online",
    venue: "Assigned Reading",
  },

  {
    week: 12,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (IR)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 12,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Lecture (Antidepressants)",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 12,
    day: "Tue",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2013",
    activity: "Tutorial 3",
    mode: "Online",
    venue: "Self-paced",
  },
  {
    week: 12,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Group presentation 30%",
    mode: "Online",
    venue: "F2F (ONLINE)",
  },
  {
    week: 12,
    day: "Thu",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Case 2 (Groups 1&2, 3&4)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 12,
    day: "Thu",
    time: "10:00 AM - 12:00 PM",
    course: "OIA2003",
    activity: "Tutorial 3, Lecture (mfg), Test review",
    mode: "Online",
    venue: "Online",
  },
  {
    week: 12,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Tutorial 10 & Assignment submission",
    mode: "Online",
    venue: "NF2F",
  },
  {
    week: 12,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Online Quiz (Spectrum)",
    mode: "Online",
    venue: "Online (Spectrum)",
  },

  {
    week: 13,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (FES/AAS)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 13,
    day: "Mon",
    time: "2:00 PM - 3:00 PM",
    course: "OIA2012",
    activity: "Quiz (10%)",
    mode: "Online",
    venue: "Online (Spectrum)",
  },
  {
    week: 13,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (Transplantation)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 13,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Microminerals)",
    mode: "Online",
    venue: "F2F ONLINE",
  },
  {
    week: 13,
    day: "Thu",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2014",
    activity: "Group Presentation 1",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 13,
    day: "Thu",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "Group Presentation review",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 13,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Test review",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 13,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Tutorial 7",
    mode: "Online",
    venue: "Self-paced",
  },

  {
    week: 14,
    day: "Mon",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Lecture (FES/AAS)",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
  {
    week: 14,
    day: "Mon",
    time: "2:00 PM - 4:00 PM",
    course: "OIA2012",
    activity: "Non-graded quiz",
    mode: "Online",
    venue: "SPECTRUM",
  },
  {
    week: 14,
    day: "Tue",
    time: "8:00 AM - 10:00 AM",
    course: "OIA2013",
    activity: "Lecture (Post-transplant complications)",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 14,
    day: "Tue",
    time: "10:00 AM - 1:00 PM",
    course: "OIA1017",
    activity: "Lecture (Nutritional assessment) & Feedback",
    mode: "Online",
    venue: "F2F ONLINE",
  },
  {
    week: 14,
    day: "Thu",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2014",
    activity: "FAA Short Answer Questions",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 14,
    day: "Thu",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2014",
    activity: "FAA SAQ review",
    mode: "Physical",
    venue: "The Cube",
  },
  {
    week: 14,
    day: "Thu",
    time: "All Day",
    course: "OIA2003",
    activity: "Submission of lab reports",
    mode: "N/A",
    venue: "SPECTRUM",
  },
  {
    week: 14,
    day: "Fri",
    time: "8:00 AM - 9:00 AM",
    course: "OIA2012",
    activity: "Quiz review",
    mode: "Physical",
    venue: "Cube",
  },
  {
    week: 14,
    day: "Fri",
    time: "9:00 AM - 10:00 AM",
    course: "OIA2002",
    activity: "Test review",
    mode: "Physical",
    venue: "The Cube @Pharmacy",
  },
];

// Combine all data
timetableData.push(...remainingData);

// Days of the week in order (weekdays only)
const daysOrder = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Function to get activities for a specific week
function getWeekActivities(weekNumber) {
  return timetableData.filter((activity) => activity.week === weekNumber);
}

// Function to group activities by day
function groupActivitiesByDay(activities) {
  const grouped = {};

  // Initialize all days
  daysOrder.forEach((day) => {
    grouped[day] = [];
  });

  // Group activities
  activities.forEach((activity) => {
    if (grouped[activity.day]) {
      grouped[activity.day].push(activity);
    }
  });

  return grouped;
}

// Function to get mode class for styling
function getModeClass(mode) {
  if (mode.toLowerCase().includes("online")) {
    return "mode-online";
  } else if (mode.toLowerCase().includes("physical")) {
    return "mode-physical";
  }
  return "";
}

// Function to render timetable for a specific week
function renderWeekTimetable(weekNumber) {
  const container = document.getElementById("timetableContainer");
  const activities = getWeekActivities(weekNumber);
  const groupedActivities = groupActivitiesByDay(activities);

  // Add fade out animation before changing content
  container.style.opacity = "0";
  container.style.transform = "translateY(20px)";

  setTimeout(() => {
    let html = `
            <div class="week-container fade-in">
                <h2 class="week-title">Week ${weekNumber} Schedule</h2>
        `;

    // Continue with the rest of the function...

    // Render each day
    daysOrder.forEach((day) => {
      const dayActivities = groupedActivities[day];

      html += `
            <div class="day-section">
                <div class="day-header">
                    ${
                      day === "Mon"
                        ? "Monday"
                        : day === "Tue"
                        ? "Tuesday"
                        : day === "Wed"
                        ? "Wednesday"
                        : day === "Thu"
                        ? "Thursday"
                        : day === "Fri"
                        ? "Friday"
                        : day === "Sat"
                        ? "Saturday"
                        : "Sunday"
                    }
                </div>
                <div class="activities">
        `;

      if (dayActivities.length === 0) {
        html += `
                <div class="no-activities">
                    No scheduled activities
                </div>
            `;
      } else {
        dayActivities.forEach((activity) => {
          const modeClass = getModeClass(activity.mode);
          html += `
                    <div class="activity">
                        <div class="activity-time">${activity.time}</div>
                        <div class="activity-course">${activity.course}</div>
                        <div class="activity-title">${activity.activity}</div>
                        <div class="activity-details">
                            <span class="activity-mode ${modeClass}">${activity.mode}</span>
                            <span class="activity-venue">${activity.venue}</span>
                        </div>
                    </div>
                `;
        });
      }

      html += `
                </div>
            </div>
        `;
    });

    html += "</div>";
    container.innerHTML = html;

    // Fade in animation
    setTimeout(() => {
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }, 50);
  }, 200);
}

// Event listener for week selection
document.addEventListener("DOMContentLoaded", function () {
  const weekSelect = document.getElementById("weekSelect");
  const container = document.getElementById("timetableContainer");

  // Add smooth transition styles
  container.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  // Load initial week (Week 1) with delay for page load animation
  setTimeout(() => {
    renderWeekTimetable(1);
  }, 500);

  // Handle week selection change
  weekSelect.addEventListener("change", function () {
    const selectedWeek = parseInt(this.value);

    // Add selection animation
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);

    renderWeekTimetable(selectedWeek);
  });

  // Add hover effects to activities
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest(".activity")) {
      const activity = e.target.closest(".activity");
      activity.style.transform = "translateX(10px) scale(1.02)";
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(".activity")) {
      const activity = e.target.closest(".activity");
      activity.style.transform = "translateX(0) scale(1)";
    }
  });
});
