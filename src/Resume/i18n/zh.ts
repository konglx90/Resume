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
- 有过tarojs、svelte等的使用经验
    `
  }, {
    type: SectionType.timeline,
    title: '工作经历',
    stories: [{
      title: '前端工程师',
      company: '北京云站(原搜狐快站)',
      startDate: '2018-09',
      endDate: '至今',
      description: 
`
<b>项目介绍</b>: 快站，可视化、零门槛快速建站

<b>公司网站</b>: https://www.kuaizhan.com

<b>kzui</b>: https://kuaizhan.github.io/kzui

<b>技术栈</b>: react、taro、remax、kzui、xqui、typescript等

职责: 负责整个前端开发以及前端团队的搭建和管理工作

1、完善并开源公司自研组件库\`kzui\`(基于\`React\`).

2、在两年时间内渐进完成前端技术栈的收敛和更新，主要是向React和TypeScript靠拢，模块使用monorepo来管理，制定代码规范和监督执行

3、历史技术栈上的需求，使用svelte生成web component来做跨技术栈的支持.

4、拖拽建小程序系统

5、快客多(小程序电商平台)系统

6、快站插件系统开发优化
`
    }, {
      title: '前端工程师',
      company: '搜狐快站',
      startDate: '2017-07',
      endDate: '2018-09',
      description: 
`
<b>项目介绍</b>: 快站B端，主要是快站插件系统、云商店和投票业务。涉及B端管理页面和移动端页面。

<b>技术栈</b>: react、vue、eslint、webpack、gulp、react-native

<b>职责</b>: 负责部分功能的开发和业务维护

1、主要技术栈是React，基于React重构云商店的后台系统

2、eslint 规范的制定 eslint-config-kuaizhan，基于 airbnb 做了些自定义

3、基于vue开发投票C端页面及B端后台

4、基于react-native开发南瓜租房iOS端
`
    }]
  }]
}