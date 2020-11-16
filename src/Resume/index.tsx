import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';

import {
  Layout,
  EasySectionProps,
  ResumeProps,
  SectionType,
  TimeLineSectionProps
} from './interface'

const layoutStyle: React.CSSProperties = { 
  display: 'flex',
  flexDirection: 'row',
}

const spaceBetweenStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const styleConfig = {
  fontSize: {
    default: '14px',
    small: '12px',
    large: '24px'
  }
}

const Row: React.FC<Layout> = ({
  span = 24,
  children
}) => (
  <div style={{...layoutStyle, width: `${span / 24 * 100}%` }}>
    {children}
  </div>
)

const Col: React.FC<Layout> = ({
  span = 24,
  children
}) => (
  <div style={{ 
    ...layoutStyle,
    flexDirection: 'column', 
    width: `${span / 24 * 100}%`,
  }}>
    {children}
  </div>
)

const Section: React.FC = props => (
  <section
    style={{
      borderTop: '2px solid #333',
      marginTop: '10px',
      paddingTop: '10px',
      paddingBottom: '20px',
      fontSize: styleConfig.fontSize.default,
      lineHeight: '24px'
    }}
  >
    {props.children}
  </section>
)

const EasySection: React.FC<EasySectionProps> = props => (
  <Section>
    <Row>
      <Col span={4}>
        <h4>{props.title}</h4>
      </Col>
      <Col span={20}>
        <ReactMarkdown escapeHtml={false}>{props.description}</ReactMarkdown>
      </Col>
    </Row>
  </Section>
)

const TimeLineSection: React.FC<TimeLineSectionProps> = props => (
  <Section>
    <h4>{props.title}</h4>
    {props.stories.map(story => (
      <Row>
        <Col span={4}>
          <span
            style={{
              fontSize: styleConfig.fontSize.small
            }}
          >
            {story.startDate} - {story.endDate}
          </span>
        </Col>
        <Col span={20}>
          <div style={spaceBetweenStyle}>
            <h4>{story.title}</h4>
            <h5>{story.company}</h5>
          </div>
          <ReactMarkdown escapeHtml={false}>{story.description}</ReactMarkdown>
        </Col>
      </Row>
    ))}
</Section>
)

const Resume: React.FC<ResumeProps> = (props) => {
  return (
    <div className="resume">
      <header>
        <h3>{props.personalDetail.name} {props.personalDetail.jobTitle}</h3>
        <p>
          <a href={`tel:${props.personalDetail.phone}`}>
            {props.personalDetail.phone}
          </a>
          &nbsp;
          <a href={`mailto:${props.personalDetail.email}`}>
            {props.personalDetail.email}
          </a>
        </p>
      </header>
      <main>
        {props.sections.map(section => [
          section.type === SectionType.easy && (
            <EasySection {...section} />
          ), section.type === SectionType.timeline && (
            <TimeLineSection {...section} />
          )]
        )}
      </main>
    </div>
  );
}

export default Resume;
