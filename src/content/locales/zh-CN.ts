import { defineLocale } from '../schema';

export default defineLocale({
  code: 'zh-CN', dir: 'ltr',
  meta: { title: '卞逸豪｜水 · 科研 · 创新', description: '卞逸豪的个人宇宙：饮用水安全博士研究者、环境科技创业者与全球交流者。' },
  nav: { about: '关于我', research: '科研方向', publications: '论文成果', ventures: '创新创业', honors: '荣誉奖项', global: '国际交流', life: '生活兴趣', contact: '联系方式' },
  home: { subtitle: '水 · 科研 · 创新', role: '博士研究生 · 研究者 · 创业者', enter: '进入个人宇宙', skip: '跳过体验', loading: '正在校准连接', quickContact: '快速联系', downloadCv: '下载简历', cvPending: '简历待补充', reduceMotion: '减少动态效果', restoreMotion: '恢复动态效果', twoD: '使用二维模式', explore: '选择节点开始探索', canvasLabel: '一个由八个知识节点围绕中心运行的交互式个人宇宙。', fallbackTitle: '探索个人宇宙' },
  common: { home: '中心', back: '返回个人宇宙', menu: '导航', language: '语言', viewDetails: '深入了解', contentPending: '详细信息待本人核实', verifiedFactsOnly: '本页仅展示已确认的信息，不使用虚构内容。', close: '关闭' },
  sectionMeta: {
    about: { kicker: '01 / 引力中心', title: '跨越系统边界的研究者', summary: '卞逸豪连接饮用水研究、环境工程、创新创业与国际交流。' },
    research: { kicker: '02 / 流动的问题', title: '面向更安全水系统的研究', summary: '六个相互关联的方向，从处理界面、供水管网延伸至新兴环境问题。' },
    publications: { kicker: '03 / 证据档案', title: '论文成果', summary: '为已发表论文、审稿中成果和在研工作准备的数据驱动学术档案。' },
    ventures: { kicker: '04 / 从洞见到行动', title: '环境科技创新创业', summary: '将水科学与数字思维转化为可实践、可协作的解决方案。' },
    honors: { kicker: '05 / 被看见的信号', title: '荣誉星环', summary: '精选学术与创新荣誉，以环绕星群呈现，而不是传统时间线。' },
    global: { kicker: '06 / 跨越边界', title: '国际交流', summary: '围绕环境与可持续发展展开的区域对话、国际学习与未来合作。' },
    life: { kicker: '07 / 实验室之外', title: '生活与视野', summary: '用于记录经本人确认的兴趣、旅行、文化交流，以及塑造研究者本人的生活经验。' },
    contact: { kicker: '08 / 开放频道', title: '开始一次交流', summary: '真实联系方式将在本人提供并确认后显示。' },
  },
  about: [
    { title: '教育经历', body: '同济大学环境科学与工程学院博士研究生。' },
    { title: '学术方向', body: '聚焦环境工程与饮用水安全，关注科学问题如何与真实水系统相连接。' },
    { title: '创新创业', body: '上海晶水济环保科技有限公司创始人，探索从科研到实践的负责任转化。' },
    { title: '协作与领导力', body: '在学术研究、工程协作和创新项目的交汇处开展工作。' },
    { title: '个人使命', body: '让严谨的水科学与人的真实需求、可用技术和国际协作产生连接。' },
  ],
  research: {
    'drinking-water': { title: '饮用水安全', question: '如何让饮用水系统从源头到龙头持续保持安全？', description: '这一方向将饮用水安全视为相互连接的完整系统，而不是单一处理环节。研究问题可覆盖水质、处理过程、输配环节与终端暴露。当前页面只搭建经过核验后可扩展的内容结构，具体方法、数据和结论将在本人提供真实研究材料后补充。' },
    biofilms: { title: '供水管网生物膜', question: '生物膜如何改变供水管网中的水质过程？', description: '生物膜是供水基础设施内部持续变化的生命界面。这一方向关注其与管壁环境、微生物过程及输配水质变化之间的关系。涉及的目标微生物、实验条件、采样位置和研究结论均保持空缺，待依据真实项目资料进行核验与整理。' },
    'heavy-metals': { title: '重金属迁移', question: '哪些因素控制重金属在水系统中的释放、迁移与转化？', description: '这一研究方向从水化学、基础设施表面和运行条件之间的相互作用理解重金属迁移。页面已预留机理、分析方法、工程风险与相关成果的连接位置，但不会在缺乏证据时填写具体金属、实验结果或风险判断。' },
    disinfection: { title: '消毒与细菌内毒素', question: '如何在控制微生物风险的同时关注更具耐受性的细胞组分？', description: '这一方向探索消毒策略、微生物灭活与细菌内毒素之间的关系。内容结构可用于呈现研究问题、实验方法和经过验证的发现；在取得本人确认前，不推断具体消毒工艺、反应机制、剂量参数或效果数据。' },
    nanofiltration: { title: '纳滤膜与资源回收', question: '选择性膜过程能否在提升水处理能力的同时实现资源回收？', description: '这里将纳滤膜同时视为分离过程与资源化处理平台。未来内容可围绕膜选择性、界面作用、流程设计及回收路径展开。当前不预设膜材料、目标物质、回收率或性能指标，所有细节均等待真实项目材料确认。' },
    microplastics: { title: '北极微塑料', question: '偏远环境如何揭示微塑料的远距离迁移与持久性？', description: '这一方向把水环境研究视野延伸到北极微塑料与长距离环境过程。页面目前建立了严谨的编辑框架，具体地区、采样任务、合作机构、分析方法和研究结果均有意保持未填写状态，待取得可核实资料后再展示。' },
  },
  publications: { emptyTitle: '论文档案正在核验中', emptyBody: '当前没有编造任何论文题目、期刊或 DOI。确认后的清单可直接从中央数据文件添加，无需修改页面组件。', filters: ['已发表', '审稿中', '准备中'] },
  ventures: {
    jingshuiji: { title: '晶水济高品质直饮水', descriptor: '已预留问题、方案、本人角色、进展与影响等结构，具体内容等待本人核实。' },
    'silent-aid': { title: '晶水默助', descriptor: '面向“一带一路”的高品质饮用水国际合作方案；执行模式与项目进展待确认。' },
    'ing-products': { title: 'ING 系列数字产品', descriptor: '用于呈现已经确认的环境科技与数字产品项目。' },
  },
  ventureFields: { problem: '问题', solution: '解决方案', role: '我的角色', progress: '当前进展', impact: '产生影响', gallery: '项目图集', link: '外部链接' },
  honors: {
    nationalScholarship: '2025 博士生国家奖学金', beijingGraduate: '2024 北京市优秀毕业生', masterThesis: '2024 优秀硕士学位论文', academicTalent: '2025 同济大学环境科学与工程学院十佳“学术达人”', marineForum: '2025 第八届全国研究生环境（涉海）论坛特等奖', tongjiInnovation: '2025 第四届环同济创新创业创意大赛一等奖', ecoCompetition: '2025 第二十届全国环境友好科技竞赛华东华南赛区一等奖', innovationSilver: '2025 中国国际大学生创新大赛产业赛道同济大学银奖',
  },
  global: {
    regionalExchange: { title: '中日韩博士生交流', body: '围绕环境与可持续发展的区域对话；时间、机构和参与内容待本人确认。' },
    gist: { title: '韩国 GIST 交流经历', body: '用于补充经确认的交流背景、项目内容与个人思考。' },
    summerSchool: { title: '国际暑期学校', body: '已预留项目、地点、主题和参与信息的结构。' },
    collaboration: { title: '跨文化学术合作', body: '用于记录连接不同学科、机构和文化视角的真实合作经历。' },
    future: { title: '未来国际交流方向', body: '期待围绕饮用水安全、环境工程与负责任创新开展国际交流。' },
  },
  life: { title: '保留真实，也保留空白', body: '个人兴趣与生活经历尚未得到本人确认。本区域不会为了填满页面而虚构爱好、技能或故事。' },
  contact: { title: '只显示已核实渠道', body: '邮箱与社交平台将在提供并确认后自动显示。', unavailable: '联系方式正在准备中。', copy: '复制联系方式', save: '保存联系人' },
});
