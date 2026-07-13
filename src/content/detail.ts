import type { Lang, VentureId } from '@/data/site';

type DetailLabels = {
  research: {
    eyebrow: string;
    questions: string;
    methods: string;
    outcomes: string;
    publications: string;
    back: string;
  };
  ventures: {
    eyebrow: string;
    overview: string;
    positioning: string;
    problem: string;
    solution: string;
    role: string;
    progress: string;
    impact: string;
    gallery: string;
    collaboration: string;
    back: string;
    stage: string;
  };
};

const english: DetailLabels = {
  research: { eyebrow: 'Research direction', questions: 'Research questions', methods: 'Methods / Approach', outcomes: 'Selected outcomes', publications: 'Related publications', back: 'Back to research' },
  ventures: { eyebrow: 'Venture / Project', overview: 'Project overview', positioning: 'Project positioning', problem: 'Problem', solution: 'Solution', role: 'My role', progress: 'Current progress', impact: 'Impact', gallery: 'Gallery', collaboration: 'Contact / Collaboration', back: 'Back to ventures', stage: 'Current stage' },
};

const chinese: DetailLabels = {
  research: { eyebrow: '研究方向', questions: '研究问题', methods: '方法与路径', outcomes: '代表性成果', publications: '相关论文', back: '返回科研方向' },
  ventures: { eyebrow: '创新项目', overview: '项目概述', positioning: '项目定位', problem: '核心问题', solution: '解决方案', role: '本人角色', progress: '当前进展', impact: '项目影响', gallery: '项目图集', collaboration: '联系与合作', back: '返回创新创业', stage: '当前阶段' },
};

export const getDetailLabels = (lang: Lang): DetailLabels => lang === 'zh-CN' ? chinese : english;

export const getVentureTitleSegments = (lang: Lang, id: VentureId, title: string): string[] => {
  if (lang === 'zh-CN' && id === 'jingshuiji') return ['晶水济', '高品质直饮水'];
  return [title];
};
