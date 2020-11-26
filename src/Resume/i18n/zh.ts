import {
  ResumeProps,
  SectionType
} from '../interface'

export const resumeData: ResumeProps = {
  personalDetail: {
    jobTitle: '前端开发工程师',
    name: '孔令星',
    email: 'konglx90@gmail.com',
    phone: '17600367421',
    study: '电子科技大学(2013-2017) 新能源材料与器件'
  },
  sections: [{
    type: SectionType.easy,
    title: '简介',
    description: `
- 三年前端开发经验，一年后端实习经验，熟悉前端开发的基本流程
- 独立负责开发并上线过数个完整的前端项目，涉及B端、C端和小程序开发，并与他人合作过RN的项目
- 有较多的前端项目的维护经验，日常工作的技术栈为React、TypeScript、tarojs、svelte
- 掌握计算机基础知识，包括数据结构、算法和网络知识
    `
  }, {
    type: SectionType.timeline,
    title: '工作经历',
    stories: [{
      title: '前端工程师 公司网站: https://www.kuaizhan.com',
      company: '北京云站(原搜狐快站)',
      startDate: '2018-09',
      endDate: '至今',
      description: 
`
<b>项目介绍</b>: 快站，可视化、零门槛快速建站、小程序、表单等

<b>技术栈</b>: react、taro、remax、kzui、xqui、typescript等

<b>职责</b>: 负责整个前端开发以及前端团队(5人)的搭建和管理工作

1、快站主站功能迭代，如今C端pv约3000w左右

2、完善并开源公司自研组件库\`kzui\`(基于\`React\`).

3、在两年时间内渐进完成前端技术栈的收敛和更新，主要是向React和TypeScript靠拢，模块使用monorepo来管理，制定代码规范和监督执行

4、历史技术栈上的需求，使用svelte生成web component来做跨技术栈的支持.

5、快站拖拽建小程序系统、快客多-小程序会员电商平台、快站插件系统开发优化
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

<b>职责</b>: 负责快站部分功能的开发和业务维护

1、主要技术栈是React，基于React重构云商店的后台系统

2、eslint 规范的制定 eslint-config-kuaizhan，基于 airbnb 做了些自定义

3、基于vue开发投票C端页面及B端后台，C端pv从0达到500w
`
    }]
  }, {
    type: SectionType.timeline,
    title: '项目',
    stories: [{
      title: '快客多-小程序会员电商平台 https://kuaikeduo.kuaizhan.com/',
      startDate: '2019-02',
      endDate: '至今',
      description: 
`
- 从0开始搭建完整的小程序会员电商平台前端，包括B端后台、基于tarojs的小程序和h5端
- 业务上包含简单自定义页面系统、电商支付平台、会员管理体系等
- 技术上包含使用airbnb代码规范、Typescript、storybook等来提升代码的可读性和组件的复用性
- 沟通和管理，期间招聘若干实习生并顺利培养成合格的前端开发人员
`
    }, {
      title: 'kzui https://kuaizhan.github.io/kzui',
      startDate: '2020-02',
      endDate: '至今',
      description: 
`
- 具有快站特色的设计规范(简单、高效、及时的反馈)
- 锻炼了团队内的组件开发能力和提高代码质量
- 50个左右的通用ui组件，已应用于快站B端后台
`
    }, {
      title: '快站小程序 https://www.kuaizhan.com/v3/homepage/weapp',
      startDate: '2018-07',
      endDate: '至今',
      description: 
`
- 从0开始搭建快站拖拽建小程序的系统，目标是拖拽可以生成全平台应用，现在已经可以生成微信小程序、百度小程序和H5
- C端从静态代码生成的方案进化到动态渲染
- 开发丰富的跨端组件，视频、文本、广告等
` 
    }]
  }]
}