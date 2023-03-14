import { Helmet } from 'react-helmet';
import React, { useEffect, useRef } from 'react';
import { Doc } from 'leeguoo-docaid/client';
import { styled, useDocAidConfig, useDocAidTheme } from 'umi';
import { useDoc } from './useDoc';

const Utterances = styled.div`
  margin-top: 120px;
`;

export default () => {
  const utterancesRef = useRef<HTMLDivElement>(null);
  const config = useDocAidConfig();
  const theme = useDocAidTheme();
  const postQuery = useDoc<any>();

  useEffect(() => {
    if (!postQuery.isSuccess || !config?.utterances) return;

    const {
      repo = '',
      issueTerm = 'pathname',
      theme = 'github-light',
      crossorigin = 'anonymous',
      label = '💬',
    } = config.utterances;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('theme', theme);
    script.setAttribute('crossorigin', crossorigin);
    script.setAttribute('label', label);
    script.async = true;

    if (utterancesRef.current) {
      utterancesRef.current.appendChild(script);
    }
  }, [config, utterancesRef.current, postQuery]);

  if (postQuery.isLoading) return <p>loading...</p>;
  const {
    metaTitle,
    title,
    html: originHtml,
    toc,
    numberStr,
    publishedAt,
    titleImage,
    titleImageCaption,
  } = postQuery.data || {};
  const sp = new URLSearchParams(location.search);
  let html = originHtml;
  if (sp.has('__mp')) {
    html =
      `
<p
  style="font-weight: bold; color: blue;"
>
  ⚡ Hi，我是云谦，欢迎打开新一期的「MDH：前端周刊」，这是第 ${numberStr} 期，发表于
  ${publishedAt}，将为您带来最新的资讯和分享。
</p>
<p>注意：本文带有大量链接，推荐点击「查看原文」在语雀上查看。</p>
  ` + html;
  }

  return (
    <>
      <Helmet>
        <title>{`${metaTitle || title} - ${config.title}`}</title>
      </Helmet>
      <Doc
        title={{
          content: title,
          balance: true,
        }}
        publishedAt={publishedAt}
        headImg={{
          src: titleImage!,
          alt: titleImageCaption,
        }}
        toc={{
          data: toc!,
          leftPadding: 40,
        }}
        contentHtml={html}
        styledComponents={{
          Article: theme.ArticleWrapper,
          Toc: theme.TocWrapper,
          Doc: theme.DocWrapper,
        }}
      />
      <Utterances ref={utterancesRef} />
    </>
  );
};
