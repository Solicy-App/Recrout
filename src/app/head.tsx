'use client';
import React, { useEffect, useState } from 'react';

export default function Head() {
  const [isSSR, setIsSSR] = useState(false);
  const win = typeof window == 'undefined';

  useEffect(() => {
    if (!win) {
      setIsSSR(true);
    }
  }, [win]);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#522583" />
      <link rel="manifest" href="manifest.json" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>Recrout</title>
      <meta name="author" content="Recrout" />
      <meta
        name="description"
        content="We are hiring! Check out our jobposts!"
      />
      <meta
        name="keywords"
        content="recrout, jobposts, vacancies, job, recruiter, competencies"
      />
      {isSSR && `{% block dynamic_header_info %}{% endblock %}`}
    </>
  );
}
