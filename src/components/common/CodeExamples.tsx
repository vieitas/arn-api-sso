import React from 'react';
import { CodeExample } from '../../data/types';
import CodeBlock from './CodeBlock';
import Tabs from './Tabs';

interface CodeExamplesProps {
  examples: CodeExample[];
}

const CodeExamples: React.FC<CodeExamplesProps> = ({ examples }) => {
  if (!examples || examples.length === 0) {
    return <p>No code examples available.</p>;
  }

  // Define standard examples in correct order
  const standardExamples = ['cURL', 'Python', 'JavaScript', 'PHP'];

  // Map examples to standard names
  const exampleMap = {
    'bash': 'cURL',
    'python': 'Python',
    'javascript': 'JavaScript',
    'php': 'PHP'
  };

  // Sort examples according to standard order
  const sortedExamples = [...examples].sort((a, b) => {
    const labelA = a.label || exampleMap[a.language] || a.language;
    const labelB = b.label || exampleMap[b.language] || b.language;

    const indexA = standardExamples.indexOf(labelA);
    const indexB = standardExamples.indexOf(labelB);

    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  // Map examples to tabs with standard names
  const tabs = sortedExamples.map(example => {
    // Use standard name if available, otherwise use provided label or language name
    const label = exampleMap[example.language] || example.label || example.language;

    return {
      id: example.language,
      label: label,
      content: <CodeBlock code={example.code} language={example.language} />
    };
  });

  return <Tabs tabs={tabs} />;
};

export default CodeExamples;
