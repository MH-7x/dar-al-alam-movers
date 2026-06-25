import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Link,
} from "@react-email/components";
import type { FormDataType } from "../lib/types";
import { APP_EMAIL, APP_NAME, APP_PHONE } from "../lib/App";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const C = {
  primary: "#004AAD",
  primaryDark: "#001f4a",
  accent: "#D1E5FF",
  muted: "#f4f8ff",
  border: "#e2ecff",
  fg: "#1a1a2e",
  subtle: "#595959",
  muted2: "#8ca8cc",
  white: "#ffffff",
  amber: "#f59e0b",
  amberLight: "#fffdf5",
  amberBorder: "#fde68a",
  green: "#25D366",
};

// ─── Section header component ────────────────────────────────────────────────
function SectionLabel({ ar, en }: { ar: string; en: string }) {
  return (
    <Text style={sectionLabelStyle}>
      {ar}
      {"  "}
      <span style={{ color: C.muted2, fontWeight: 400 }}>{en}</span>
    </Text>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export interface QuoteRequestEmailProps {
  data: FormDataType;
}

export default function QuoteRequestEmail({ data }: QuoteRequestEmailProps) {
  const callHref = `tel:${data.phone}`;

  return (
    <Html lang="ar" dir="rtl">
      <Head />
      <Preview>
        🔔 طلب عرض سعر جديد من {data.name} — {data.phone}
      </Preview>

      <Body style={bodyStyle}>
        <Container style={outerCard}>
          {/* ── Alert strip ────────────────────────────────────────── */}
          <Section style={alertStrip}>
            <Text style={alertText}>
              🔔 &nbsp; طلب عرض سعر جديد وصل الآن — يرجى التواصل مع العميل فوراً
            </Text>
          </Section>

          {/* ── Header ─────────────────────────────────────────────── */}
          <Section style={headerStyle}>
            <Text style={headerIconStyle}>📦</Text>
            <Text style={headerTitleStyle}>{APP_NAME}</Text>
            <Text style={headerSubStyle}>Dar Al Alam Movers • Dubai, UAE</Text>
          </Section>

          {/* ── White card body ─────────────────────────────────────── */}
          <Section style={cardBody}>
            {/* ─ Client hero: Name + Phone ─ */}
            <Section style={heroWrap}>
              <Row>
                <Column style={heroCardLeft}>
                  <Text style={heroChipLabel}>الاسم • Full Name</Text>
                  <Text style={heroName}>{data.name}</Text>
                </Column>
                <Column style={{ width: 12 }} />
                <Column style={heroCardRight}>
                  <Text style={heroChipLabel}>رقم الجوال • Phone</Text>
                  <Link href={callHref} style={heroPhoneLink}>
                    {data.phone}
                  </Link>
                  <Text style={heroTapHint}>اضغط للاتصال</Text>
                </Column>
              </Row>
            </Section>

            {/* ─ Move Details section ─ */}
            <Section style={sectionWrap}>
              <Hr style={sectionDivider} />
              <SectionLabel ar="تفاصيل النقل" en="Move Details" />

              {/* Move date pill */}
              {data.moveDate && (
                <Section style={datePill}>
                  <Text style={datePillText}>📅 &nbsp; {data.moveDate}</Text>
                </Section>
              )}

              {/* Route card: From → To */}
              <Section style={routeCard}>
                <Row>
                  <Column style={routeColFrom}>
                    <Text style={routeDirLabel}>من • From</Text>
                    <Text style={routeAddr}>{data.fromAddress}</Text>
                  </Column>
                  <Column style={routeArrowCol}>
                    <Text style={routeArrowText}>🚛</Text>
                  </Column>
                  <Column style={routeColTo}>
                    <Text style={routeDirLabel}>إلى • To</Text>
                    <Text style={routeAddr}>{data.toAddress}</Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {/* ─ Notes ─ */}
            {data.notes && (
              <Section style={sectionWrap}>
                <Hr style={sectionDivider} />
                <SectionLabel ar="ملاحظات" en="Additional Notes" />
                <Section style={notesCard}>
                  <Text style={notesQuoteMark}>&quot;</Text>
                  <Text style={notesBody}>{data.notes}</Text>
                </Section>
              </Section>
            )}

            {/* ─ CTA buttons ─ */}
            <Section style={ctaWrap}>
              <Hr style={sectionDivider} />
              <Text style={ctaLabel}>تواصل مع العميل الآن • Reach out now</Text>
              <Link href={callHref} style={callBtn}>
                📞 &nbsp; اتصل الآن &nbsp;—&nbsp; Call Now
              </Link>
            </Section>
          </Section>

          {/* ── Footer ─────────────────────────────────────────────── */}
          <Section style={footerStyle}>
            <Text style={footerName}>{APP_NAME}</Text>
            <Text style={footerMeta}>
              {APP_PHONE} &nbsp;•&nbsp; {APP_EMAIL}
            </Text>
            <Text style={footerNote}>
              هذا بريد تلقائي من موقعك الإلكتروني — Automated notification from
              your website
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#dce6f5",
  fontFamily: "'Tajawal', 'Segoe UI', Tahoma, Arial, sans-serif",
  margin: 0,
  padding: "40px 16px",
};

const outerCard: React.CSSProperties = {
  maxWidth: 600,
  margin: "0 auto",
  borderRadius: 14,
  overflow: "hidden",
  boxShadow: "0 12px 48px rgba(0,74,173,0.14)",
};

// Alert strip
const alertStrip: React.CSSProperties = {
  backgroundColor: "#FEF3C7",
  borderBottom: "1.5px solid #FDE68A",
  padding: "11px 24px",
  textAlign: "center",
};

const alertText: React.CSSProperties = {
  color: "#78350F",
  fontSize: 12,
  fontWeight: 700,
  margin: 0,
  letterSpacing: "0.01em",
  lineHeight: 1.4,
};

// Header
const headerStyle: React.CSSProperties = {
  backgroundColor: C.primary,
  padding: "36px 32px 30px",
  textAlign: "center",
};

const headerIconStyle: React.CSSProperties = {
  fontSize: 44,
  margin: "0 0 14px",
  lineHeight: 1,
};

const headerTitleStyle: React.CSSProperties = {
  color: C.white,
  fontSize: 24,
  fontWeight: 700,
  margin: "0 0 6px",
  letterSpacing: "0.01em",
};

const headerSubStyle: React.CSSProperties = {
  color: C.accent,
  fontSize: 12,
  margin: 0,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

// Card body
const cardBody: React.CSSProperties = {
  backgroundColor: C.white,
};

// Hero cards
const heroWrap: React.CSSProperties = {
  padding: "28px 28px 20px",
};

const heroCardBase: React.CSSProperties = {
  border: `1.5px solid ${C.border}`,
  borderRadius: 10,
  padding: "16px 18px",
  verticalAlign: "top",
  backgroundColor: C.white,
};

const heroCardLeft: React.CSSProperties = {
  ...heroCardBase,
};

const heroCardRight: React.CSSProperties = {
  ...heroCardBase,
  backgroundColor: C.muted,
  borderColor: C.primary,
};

const heroChipLabel: React.CSSProperties = {
  color: C.muted2,
  fontSize: 10,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin: "0 0 7px",
};

const heroName: React.CSSProperties = {
  color: C.fg,
  fontSize: 18,
  fontWeight: 700,
  margin: 0,
  lineHeight: 1.3,
};

const heroPhoneLink: React.CSSProperties = {
  color: C.primary,
  fontSize: 17,
  fontWeight: 700,
  textDecoration: "none",
  display: "block",
  margin: "0 0 5px",
};

const heroTapHint: React.CSSProperties = {
  color: C.muted2,
  fontSize: 10,
  margin: 0,
  letterSpacing: "0.04em",
};

// Section layout
const sectionWrap: React.CSSProperties = {
  padding: "4px 28px 20px",
};

const sectionDivider: React.CSSProperties = {
  borderColor: C.border,
  borderTopWidth: 1,
  margin: "0 0 18px",
};

const sectionLabelStyle: React.CSSProperties = {
  color: C.subtle,
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  margin: "0 0 14px",
};

// Date pill
const datePill: React.CSSProperties = {
  backgroundColor: C.accent,
  borderRadius: 8,
  padding: "10px 18px",
  marginBottom: 14,
};

const datePillText: React.CSSProperties = {
  color: C.primary,
  fontSize: 14,
  fontWeight: 700,
  margin: 0,
  letterSpacing: "0.01em",
};

// Route card
const routeCard: React.CSSProperties = {
  backgroundColor: C.muted,
  border: `1.5px solid ${C.border}`,
  borderRadius: 10,
  padding: "18px 20px",
};

const routeColFrom: React.CSSProperties = {
  verticalAlign: "middle",
  paddingRight: 8,
};

const routeColTo: React.CSSProperties = {
  verticalAlign: "middle",
  paddingLeft: 8,
};

const routeArrowCol: React.CSSProperties = {
  width: 44,
  textAlign: "center",
  verticalAlign: "middle",
};

const routeDirLabel: React.CSSProperties = {
  color: C.muted2,
  fontSize: 10,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin: "0 0 6px",
  borderBottom: `2px solid ${C.primary}`,
  paddingBottom: 4,
  display: "inline-block",
};

const routeAddr: React.CSSProperties = {
  color: C.fg,
  fontSize: 14,
  fontWeight: 600,
  margin: 0,
  lineHeight: 1.55,
};

const routeArrowText: React.CSSProperties = {
  fontSize: 22,
  margin: 0,
  lineHeight: 1,
};

// Notes card
const notesCard: React.CSSProperties = {
  backgroundColor: C.amberLight,
  borderRight: `4px solid ${C.amber}`,
  borderRadius: "0 8px 8px 0",
  padding: "14px 18px",
};

const notesQuoteMark: React.CSSProperties = {
  color: C.amber,
  fontSize: 36,
  fontFamily: "Georgia, 'Times New Roman', serif",
  lineHeight: "0.6",
  margin: "0 0 6px",
  display: "block",
};

const notesBody: React.CSSProperties = {
  color: C.fg,
  fontSize: 14,
  lineHeight: 1.75,
  margin: 0,
  fontStyle: "italic",
};

// CTA
const ctaWrap: React.CSSProperties = {
  padding: "4px 28px 30px",
};

const ctaLabel: React.CSSProperties = {
  color: C.subtle,
  fontSize: 11,
  fontWeight: 600,
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: "0 0 16px",
};

const callBtn: React.CSSProperties = {
  display: "block",
  backgroundColor: C.primary,
  color: C.white,
  padding: "15px 20px",
  borderRadius: 9,
  fontSize: 15,
  fontWeight: 700,
  textDecoration: "none",
  textAlign: "center",
  marginBottom: 10,
  letterSpacing: "0.02em",
};

const waBtn: React.CSSProperties = {
  display: "block",
  backgroundColor: C.green,
  color: C.white,
  padding: "15px 20px",
  borderRadius: 9,
  fontSize: 15,
  fontWeight: 700,
  textDecoration: "none",
  textAlign: "center",
  letterSpacing: "0.02em",
};

// Footer
const footerStyle: React.CSSProperties = {
  backgroundColor: C.primaryDark,
  padding: "22px 28px",
  textAlign: "center",
};

const footerName: React.CSSProperties = {
  color: C.accent,
  fontSize: 13,
  fontWeight: 700,
  margin: "0 0 5px",
  letterSpacing: "0.02em",
};

const footerMeta: React.CSSProperties = {
  color: "#7ba3d4",
  fontSize: 12,
  margin: "0 0 8px",
};

const footerNote: React.CSSProperties = {
  color: "#3d6fa3",
  fontSize: 10,
  margin: 0,
  lineHeight: 1.7,
};
