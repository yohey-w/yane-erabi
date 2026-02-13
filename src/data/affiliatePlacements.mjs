/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  repairRoof: {
    name: 'リペアルーフ',
    network: 'A8',
    rewardYen: 1800,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+88I27M+36X8+25EKCY',
  },
};

export const affiliatePlacements = {
  top: {
    title: '屋根修理の無料見積もりをまとめて確認',
    description:
      'リペアルーフは現地調査から見積もりまでスムーズに進めやすいサービスです。まずは建物状況と希望工事内容を入力して、費用感を確認しましょう。',
    buttonText: 'リペアルーフの無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.repairRoof.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '雨漏りの原因特定と修理費用を早めに把握',
    description:
      '雨漏りは放置すると補修範囲が広がりやすいため、早めの相談が重要です。リペアルーフで現地確認の流れを先に押さえておきましょう。',
    buttonText: 'リペアルーフの修理相談を始める →',
    affiliateUrl: affiliatePrograms.repairRoof.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に見積もり条件を再確認して依頼先を決定',
    description:
      '工事内容・保証・工期の条件を比較したうえで依頼先を決めると安心です。リペアルーフの最新条件を確認して、納得できる修理計画を立てましょう。',
    buttonText: 'リペアルーフの条件を確認する →',
    affiliateUrl: affiliatePrograms.repairRoof.affiliateUrl,
    note: PR_NOTE,
  },
};
