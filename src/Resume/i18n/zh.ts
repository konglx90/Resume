import {
  ResumeProps,
  SectionType
} from '../interface'

export const resumeData: ResumeProps = {
  personalDetail: {
    jobTitle: '前端开发工程师',
    name: '孔令星',
    email: 'konglx90@gmail.com',
    phone: '17600367421'
  },
  sections: [{
    type: SectionType.easy,
    title: '基本信息',
    description: 
`
- [工作总结](./work/list)
- 教育经历: 电子科技大学(2013-2017)
`
  }, {
    type: SectionType.easy,
    title: '简介',
    description: `
- 三年前端开发经验，一年后端实习经验，熟悉前端开发的基本流程
- 独立负责开发并上线过数个完整的前端项目，涉及B端、C端和小程序开发，并与他人合作过RN的项目
- 有较多的前端项目的维护经验，技术栈涉及React、Vue、Backbone、jQuery等
- 认真学习过计算机基础知识，包括数据结构、算法和网络知识
- 日常工作的技术栈为React、TypeScript
- 有过Tarojs、rxjs、svelte等的使用经验
    `
  }, {
    type: SectionType.timeline,
    title: '工作经历',
    stories: [{
      title: '前端工程师',
      company: '北京云站',
      startDate: '2018-09',
      endDate: '2020-06',
      description: 
`
负责公司web前端的开发和维护工作和前端团队的管理工作.

完善并开源公司自研组件库(基于React).

在两年时间内渐进完成前端技术栈的收敛和更新， 主要是React和TypeScript，多模块使用monorepo来管理
历史技术栈渐进式淘汰使用svelte生成web component来支持.
`
    }, {
      title: '前端工程师',
      company: '搜狐',
      startDate: '2017-07',
      endDate: '2018-09',
      description: 
`
React学习经历、独立完成快站系统插件开发优化、React Native 开发经历.
`
    }]
  }, {
    type: SectionType.timeline,
    title: '项目',
    stories: [{
      title: '快站管理后台',
      startDate: '2019-07',
      endDate: '2020-09',
      description: 
`
- 快速开发能力
- ui设计标准的统一
- monorepo 的方式
- 自定义插件
`
    }, {
      title: 'kui/xqui',
      startDate: '2017-07',
      endDate: '2018-09',
      description: 
`
- 设计规范的制定
- 开源能力的锻炼
- 更深入的通用性思考
`
    }, {
      title: 'kzmp',
      startDate: '2017-07',
      endDate: '2018-09',
      description: 
`
- 拖拽生成静态的小程序项目
- cli、widgets、page-parser、h5-cli
` 
    }]
  }]
}