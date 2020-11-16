export enum SectionType {
  custom = 'custom',
  easy = 'easy',
  skill = 'skill',
  timeline = 'timeline'
}

export enum SkillLevel {
  novice = 'novice',
  beginner = 'beginner',
  skillful = 'skillful',
  experienced = 'experienced',
  expert = 'expert'
}

export interface Story {
  title: string,
  company?: string,
  startDate: string,
  endDate: string,
  description: string, // markdown read
}

export interface EasySectionProps {
  type: SectionType.easy,
  title: string,
  description: string, // markdown read
}

export interface SkillSectionProps {
  type: SectionType.skill
  skill: string
  level?: SkillLevel
}

export interface TimeLineSectionProps {
  type: SectionType.timeline,
  title: string,
  stories: Array<Story>
}

export interface ResumeProps {
  personalDetail: {
    jobTitle: string,
    name: string,
    email: string,
    phone: string,
  },
  sections: Array<
    TimeLineSectionProps | 
    EasySectionProps | 
    SkillSectionProps
  >
}

export interface Layout {
  span?: number,  // 0-24
  className?: string,
  style?: React.CSSProperties
}
