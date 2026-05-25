import { StyleSheet, Font } from "@react-pdf/renderer";
import path from "path";

const fontsDir = path.join(__dirname, "../../fonts");

Font.register({
  family: "PlusJakartaSans",
  fonts: [
    { src: path.join(fontsDir, "PlusJakartaSans-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "PlusJakartaSans-Italic.ttf"), fontWeight: 400, fontStyle: "italic" },
    { src: path.join(fontsDir, "PlusJakartaSans-Medium.ttf"), fontWeight: 500 },
    { src: path.join(fontsDir, "PlusJakartaSans-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "PlusJakartaSans-Bold.ttf"), fontWeight: 700 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const C = {
  dark: "#0f172a",
  darkMid: "#1e293b",
  darkBorder: "#334155",
  lightOnDark: "#f1f5f9",
  mutedOnDark: "#94a3b8",
  accentOnDark: "#818cf8",

  text: "#0f172a",
  secondary: "#475569",
  muted: "#94a3b8",
  accent: "#4f46e5",
  accentDark: "#3730a3",
  divider: "#e2e8f0",
  lightBg: "#f8fafc",
  white: "#ffffff",
};

export { C };

export const s = StyleSheet.create({
  // ────────────────────────── PAGE 1 ──────────────────────────
  page1: {
    fontFamily: "PlusJakartaSans",
    fontSize: 8.5,
    flexDirection: "row",
  },

  // ── Sidebar ──
  sidebar: {
    width: 195,
    backgroundColor: C.dark,
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  sName: {
    fontSize: 20,
    fontWeight: 700,
    color: C.white,
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  sTitle: {
    fontSize: 7,
    fontWeight: 500,
    color: C.accentOnDark,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 18,
    lineHeight: 1.4,
  },
  sSection: {
    marginBottom: 14,
  },
  sSectionTitle: {
    fontSize: 6.5,
    fontWeight: 700,
    color: C.mutedOnDark,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 6,
  },
  sDivider: {
    height: 0.5,
    backgroundColor: C.darkBorder,
    marginBottom: 8,
  },

  // Contact
  sContactItem: {
    fontSize: 7,
    color: C.lightOnDark,
    marginBottom: 3,
  },
  sContactLink: {
    fontSize: 7,
    color: C.accentOnDark,
    textDecoration: "none",
    marginBottom: 3,
  },

  // Skills
  sSkillGroup: {
    marginBottom: 5,
  },
  sSkillLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: C.lightOnDark,
    marginBottom: 1,
  },
  sSkillList: {
    fontSize: 6.5,
    color: C.lightOnDark,
    lineHeight: 1.4,
  },

  // Certs
  sCertItem: { marginBottom: 4 },
  sCertName: {
    fontSize: 6.5,
    fontWeight: 600,
    color: C.lightOnDark,
    lineHeight: 1.3,
  },
  sCertMeta: {
    fontSize: 6,
    color: C.mutedOnDark,
    marginTop: 0.5,
  },

  // Education
  sEduItem: { marginBottom: 4 },
  sEduDegree: {
    fontSize: 6.5,
    fontWeight: 600,
    color: C.lightOnDark,
    lineHeight: 1.3,
  },
  sEduMeta: {
    fontSize: 6,
    color: C.mutedOnDark,
    marginTop: 0.5,
  },

  // ── Main area (page 1) ──
  main1: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 30,
    backgroundColor: C.white,
  },
  mSectionTitle: {
    fontSize: 7,
    fontWeight: 700,
    color: C.accent,
    textTransform: "uppercase",
    letterSpacing: 2.5,
    marginBottom: 8,
  },
  mSectionLine: {
    height: 1.5,
    backgroundColor: C.accent,
    marginBottom: 10,
    marginTop: -6,
    width: 36,
  },
  mSection: {
    marginBottom: 12,
  },

  // Summary
  summary: {
    fontSize: 7.5,
    lineHeight: 1.5,
    color: C.secondary,
  },

  // Experience
  expItem: { marginBottom: 7 },
  expRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  expCompany: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.text,
  },
  expDate: {
    fontSize: 6.5,
    color: C.muted,
    fontWeight: 500,
  },
  expRole: {
    fontSize: 7.5,
    fontWeight: 600,
    color: C.accent,
    marginBottom: 2,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  bullet: {
    width: 2.5,
    height: 2.5,
    backgroundColor: C.accent,
    borderRadius: 1.25,
    marginRight: 5,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 7,
    lineHeight: 1.3,
    color: C.secondary,
    flex: 1,
  },

  // Earlier roles
  earlierLabel: {
    fontSize: 6,
    fontWeight: 700,
    color: C.muted,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 3,
    marginTop: 2,
  },
  earlierRow: {
    flexDirection: "row",
    marginBottom: 1.5,
    alignItems: "baseline",
  },
  earlierCompany: {
    fontSize: 7,
    fontWeight: 600,
    color: C.text,
    width: "28%",
  },
  earlierRole: {
    fontSize: 6.5,
    color: C.secondary,
    width: "45%",
  },
  earlierDate: {
    fontSize: 6,
    color: C.muted,
    width: "27%",
    textAlign: "right",
  },

  // ────────────────────────── PAGE 2 ──────────────────────────
  page2: {
    fontFamily: "PlusJakartaSans",
    fontSize: 8.5,
    flexDirection: "row",
  },
  p2Accent: {
    width: 6,
    backgroundColor: C.accent,
  },
  p2Main: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
    paddingLeft: 36,
    paddingRight: 40,
    backgroundColor: C.white,
  },

  // Projects
  projItem: { marginBottom: 7 },
  projName: {
    fontSize: 8,
    fontWeight: 700,
    color: C.text,
  },
  projRole: {
    fontSize: 7,
    fontWeight: 600,
    color: C.accent,
    marginBottom: 1.5,
  },
  projDesc: {
    fontSize: 7,
    color: C.secondary,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  projTech: {
    fontSize: 6.5,
    color: C.muted,
    fontWeight: 500,
    marginBottom: 2,
  },

  // GDPR consent clause
  consent: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 30,
    fontSize: 6.5,
    color: C.muted,
    fontStyle: "italic",
    lineHeight: 1.3,
    textAlign: "center",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 36,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerLink: {
    fontSize: 6,
    color: C.muted,
    textDecoration: "none",
  },
});
