import React from "react";
import { H2, Section } from "Primitive";

interface DocSectionProps {
  title: string;
}

export const DocSection: React.FC<DocSectionProps> = (props) => (
  <Section>
    <H2>{props.title}</H2>
    {props.children}
  </Section>
);
