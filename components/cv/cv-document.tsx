import React from "react";
import { Document, Page, View, Text, Link } from "@react-pdf/renderer";
import { s } from "./cv-styles";
import { buildCvData } from "../../data/cv-builder";

const cv = buildCvData();

function fmt(date: string): string {
  if (!date) return "Present";
  if (date === "in progress") return "In Progress";
  const [year, month] = date.split("-");
  if (!month) return year;
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${m[parseInt(month, 10) - 1]} ${year}`;
}

/* ─────────────── SIDEBAR ─────────────── */
function Sidebar() {
  return (
    <View style={s.sidebar}>
      <Text style={s.sName}>{cv.name}</Text>
      <Text style={s.sTitle}>{cv.title}</Text>

      <View style={s.sSection}>
        <Text style={s.sSectionTitle}>Contact</Text>
        <View style={s.sDivider} />
        <Text style={s.sContactItem}>{cv.email}</Text>
        <Link src={cv.website} style={s.sContactLink}>
          {cv.website.replace(/^https?:\/\//, "")}
        </Link>
      </View>

      <View style={s.sSection}>
        <Text style={s.sSectionTitle}>Expertise</Text>
        <View style={s.sDivider} />
        {cv.expertise.map((g) => (
          <View key={g.label} style={s.sSkillGroup}>
            <Text style={s.sSkillLabel}>{g.label}</Text>
            <Text style={s.sSkillList}>{g.items.join(" · ")}</Text>
          </View>
        ))}
      </View>

      <View style={s.sSection}>
        <Text style={s.sSectionTitle}>Certifications</Text>
        <View style={s.sDivider} />
        {cv.certifications.map((c, i) => (
          <View key={i} style={s.sCertItem}>
            <Text style={s.sCertName}>{c.name}</Text>
            <Text style={s.sCertMeta}>{c.issuer}</Text>
          </View>
        ))}
      </View>

      <View style={s.sSection}>
        <Text style={s.sSectionTitle}>Education</Text>
        <View style={s.sDivider} />
        {cv.education.map((e, i) => (
          <View key={i} style={s.sEduItem}>
            <Text style={s.sEduDegree}>{e.degree}</Text>
            <Text style={s.sEduMeta}>
              {e.institution}, {e.years}{e.honors ? ` · ${e.honors}` : ""}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/* ─────────────── EXPERIENCE ENTRY ─────────────── */
function ExpEntry({ exp }: { exp: typeof cv.experience[number] }) {
  const date = `${fmt(exp.startDate)} — ${exp.current ? "Present" : fmt(exp.endDate)}`;
  return (
    <View style={s.expItem} wrap={false}>
      <View style={s.expRow}>
        <Text style={s.expCompany}>{exp.company}</Text>
        <Text style={s.expDate}>{date}</Text>
      </View>
      <Text style={s.expRole}>{exp.position}</Text>
      {exp.achievements.map((a, i) => (
        <View key={i} style={s.bulletRow}>
          <View style={s.bullet} />
          <Text style={s.bulletText}>{a}</Text>
        </View>
      ))}
    </View>
  );
}

/* ─────────────── MAIN CONTENT ─────────────── */
function MainContent() {
  return (
    <View style={s.main1}>
      <View style={s.mSection}>
        <Text style={s.mSectionTitle}>Profile</Text>
        <View style={s.mSectionLine} />
        <Text style={s.summary}>{cv.summary}</Text>
      </View>

      <View style={s.mSection}>
        <Text style={s.mSectionTitle}>Experience</Text>
        <View style={s.mSectionLine} />
        {cv.experience.map((exp, i) => (
          <ExpEntry key={i} exp={exp} />
        ))}
      </View>

      <View style={s.mSection}>
        <Text style={s.mSectionTitle}>Key Projects</Text>
        <View style={s.mSectionLine} />
        {cv.projects.map((p, i) => (
          <View key={i} style={s.projItem} wrap={false}>
            <Text style={s.projName}>{p.name}</Text>
            <Text style={s.projRole}>{p.role}</Text>
            <Text style={s.projDesc}>{p.description}</Text>
            <Text style={s.projTech}>{p.technologies.join("  ·  ")}</Text>
            {p.outcomes.map((o, j) => (
              <View key={j} style={s.bulletRow}>
                <View style={s.bullet} />
                <Text style={s.bulletText}>{o}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={s.footer}>
        <Link src="https://rgolab.github.io" style={s.footerLink}>rgolab.github.io</Link>
      </View>
    </View>
  );
}

/* ─────────────── DOCUMENT ─────────────── */
export function CVDocument() {
  return (
    <Document
      title={`${cv.name} — CV`}
      author={cv.name}
      subject="Curriculum Vitae"
      keywords={cv.keywords.join(", ")}
      creator="rgolab.github.io CV builder"
      producer="@react-pdf/renderer"
      language="en-US"
    >
      <Page size="A4" style={s.page1}>
        <Sidebar />
        <MainContent />
      </Page>
    </Document>
  );
}
