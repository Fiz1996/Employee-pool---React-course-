import { Card, Progress, Radio, Space, Typography } from 'antd';

export default function Responses({ question, selected, onSelect, showResults }) {
  const total = question.optionOne.votes.length + question.optionTwo.votes.length || 1;
  const options = ['optionOne', 'optionTwo'];
  if (!showResults) {
    return <Radio.Group value={selected} onChange={(e) => onSelect(e.target.value)}><Space direction="vertical">{options.map((key) => <Radio key={key} value={key}>{question[key].text}</Radio>)}</Space></Radio.Group>;
  }
  return <Space direction="vertical" className="full-width">{options.map((key) => { const pct = Math.round((question[key].votes.length / total) * 100); return <Card key={key} size="small"><Typography.Text strong>{question[key].text}</Typography.Text><Progress percent={pct} /><Typography.Text type="secondary">{question[key].votes.length} votes</Typography.Text></Card>; })}</Space>;
}
