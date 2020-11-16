import {
  ResumeProps,
  SectionType
} from '../interface'

export const resumeData: ResumeProps = {
  personalDetail: {
    jobTitle: 'Front-end Software',
    name: 'kong lingxing',
    email: 'konglx90@gmail.com',
    phone: '+86 17600367421'
  },
  sections: [{
    type: SectionType.easy,
    title: 'LINKS',
    description: '[github](http://konglx90.github.io)'
  }, {
    type: SectionType.easy,
    title: 'DESCRIPTION',
    description: `
- Three years of front-end development experience, one year of back-end internship experience, familiar with the basic process of front-end development.
- Independently responsible for developing and launching several complete front-end projects, involving B-side, C-side and applet development, and working with others on RN projects.
- Have more maintenance experience in front-end projects. The technology stack involves React, Vue, Backbone, jQuery, etc.
- Have studied computer basics carefully, including data structure, algorithm and network knowledge.
- The technology stacks for everyday work are React, TypeScript, and Rxjs.
- Have experience with svelte and Flutter.
    `
  }]
}