export interface ATSAnalysis {
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  suggestions: string[];
}

export interface RecruiterEmail {
  title: string;
  content: string;
}

export interface ConnectionNote {
  title: string;
  content: string;
}

export interface QuestionGroup {
  category: string;
  items: string[];
}

export interface GeneratedAnalysis {
  ats: ATSAnalysis;
  emails: RecruiterEmail[];
  notes: ConnectionNote[];
  questions: QuestionGroup[];
}