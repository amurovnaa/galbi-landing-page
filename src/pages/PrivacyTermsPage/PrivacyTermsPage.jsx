import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../components/Container/Container.jsx";
import { ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const sections = [
  {
    title: "1. Scope & Acceptance",
    content: (
      <div className="space-y-3">
        <p>
          By using Galbi (the “Service”), you accept the terms in this policy.
          This applies to information collected through our website, landing
          page, mobile applications, and any other Galbi products or services.
        </p>
      </div>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <div className="space-y-3">
        <p>
          We collect information you provide directly, information we collect
          automatically, and information from third parties.
        </p>
        <h4 className="font-semibold mt-2">A. Information You Give Us</h4>
        <ul className="list-disc list-inside space-y-2">
          <li className="list-none">
            <p>When you register or use the Service we may collect:</p>
          </li>
          <li>
            <strong>Account & profile data:</strong> name, email, date of birth
            (optional), gender, city, country, profile photo(s).
          </li>
          <li>
            <strong>Cultural & preference data:</strong> dialect/heritage tags,
            quiz answers, badges, lifestyle tags (e.g., “Halal”), intent
            (relationship/friendship), causes you care about.
          </li>
          <li>
            <strong>Ambassador / collaboration interest:</strong> checkbox
            selections and any short note you provide.
          </li>
          <li>
            <strong>Communications:</strong> messages you send to other users,
            support messages, and any content you upload (photos, voice clips,
            verification videos).
          </li>
          <li>
            <strong>Payment info:</strong> if you purchase paid features, we use
            third-party payment processors and do not store full card numbers on
            our servers.
          </li>
        </ul>

        <h4 className="font-semibold mt-2">
          B. Information Collected Automatically
        </h4>
        <ul className="list-disc list-inside space-y-2">
          <li className="list-none">
            <p>When you use Galbi we automatically collect:</p>
          </li>
          <li>
            <strong>Device & usage data:</strong> device type, operating system,
            browser, app version, crash logs, and analytics events.
          </li>
          <li>
            <strong>Approximate location:</strong> city and country inferred
            from IP address (no GPS unless enabled).
          </li>
          <li>
            <strong>Timestamps and activity logs:</strong> signup time, last
            active, features used.
          </li>
          <li>
            <strong>Cookies & similar technologies:</strong> see section 8.
          </li>
        </ul>

        <h4 className="font-semibold mt-2">C. Information From Others</h4>
        <p>
          We may receive information from third-party services you choose to
          link (social login providers, analytics partners) or from affiliates
          and service providers.
        </p>
      </div>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li className="list-none">
          <p>We use the information to:</p>
        </li>
        <li>Provide, operate, and improve the Service.</li>
        <li>
          Enable sign-up, profile creation, matching logic, quizzes, voice
          intros, and messaging flows.
        </li>
        <li>Personalize your experience (e.g., pre-fill country or badges).</li>
        <li>Prevent fraud, abuse, and enforce our Terms of Use.</li>
        <li>Communicate with you (notifications, support, safety alerts).</li>
        <li>Process payments and issue refunds.</li>
        <li>
          Collect and track community impact and donations (10% giveback).
        </li>
        <li>
          Conduct research and analytics to improve Galbi (aggregated /
          anonymized).
        </li>
        <li className="list-none">
          We do <strong>not</strong> sell personal data for ad targeting and
          will <strong>not</strong> use cultural data for political or sensitive
          advertising
        </li>
      </ul>
    ),
  },
  {
    title: "4. Storage & Security",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          User data is stored on secure, industry-standard cloud services
          (Firebase / Firestore).
        </li>
        <li>
          Media files use access controls and encryption in transit and at rest
          where available.
        </li>
        <li>
          We implement reasonable administrative, technical, and physical
          measures to protect data. However, no service is 100 % secure — if a
          breach occurs we will notify affected users and regulators as
          required.
        </li>
        <li>
          Access to production data is strictly limited to authorized personnel
          and vendors on a need-to-know basis.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Cultural Privacy Protections",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li className="list-none">
          <p>
            Because Galbi stores cultural and voice content that can feel
            sensitive, we apply extra protections:
          </p>
        </li>
        <li>
          <strong>Anonymized analytics:</strong> quiz and dialect data used for
          analytics is aggregated and anonymized.
        </li>
        <li>
          <strong>Limited location precision:</strong> only city/country stored;
          no GPS tracking by default.
        </li>
        <li>
          <strong>Voice & verification retention:</strong> verification videos
          and voice intros are retained for a limited time (default 12 months)
          and deleted if not linked to a verified match.
        </li>
        <li>
          <strong>No sale of cultural data:</strong> we will not sell or trade
          cultural preference data
        </li>
        <li>
          <strong>Access & export:</strong> you may request an export of your
          personal data; sensitive fields are handled with extra privacy
          controls.
        </li>
      </ul>
    ),
  },
  {
    title: "6. Sharing & Third Parties",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li className="list-none">
          <p>We may share information with:</p>
        </li>
        <li>
          <strong>Service providers:</strong> hosting, analytics, payment
          processors, moderation and verification vendors under data-protection
          agreements.
        </li>
        <li>
          <strong>Legal & safety reasons:</strong> to comply with laws or
          protect rights and safety.
        </li>
        <li>
          <strong>Business transfers:</strong> in the event of merger or
          acquisition (you will be notified)
        </li>
        <li>
          <strong>With consent:</strong> when you opt in to share information
          with partners (e.g., ambassador programs or events).
        </li>
      </ul>
    ),
  },
  {
    title: "7. Moderation, Safety & Content Handling",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Automated tools and human moderators review flagged content (photos,
          voice, messages).
        </li>
        <li>
          Violations of Terms (harassment, hate speech, sexual content) lead to
          removal or ban.
        </li>
        <li>
          Users can report content in-app and receive confirmation and outcome.
        </li>
      </ul>
    ),
  },
  {
    title: "8. Cookies & Similar Technologies",
    content: (
      <div className="space-y-2">
        <p>
          Galbi uses cookies and local storage for authentication, session
          management, analytics, and preference memory.
        </p>
        <p>
          You can manage cookies through your browser settings, but disabling
          them may limit functionality.
        </p>
      </div>
    ),
  },
  {
    title: "9. Payments & the 10% Giveback",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Payments are processed by third-party providers; no card data stored.
        </li>
        <li>
          10% of net revenue is donated to community causes selected by users.
        </li>
        <li>
          Donations go to vetted NGOs; receipts are published quarterly in our{" "}
          <HashLink smooth to="/#impact" className="font-bold">
            Community Impact
          </HashLink>{" "}
          section.
        </li>
        <li>This is a corporate giveback (Galbi funds), not crowdfunding.</li>
      </ul>
    ),
  },
  {
    title: "10. Your Rights & Choices",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li className="list-none">
          <p>Depending on your jurisdiction, you may have rights to:</p>
        </li>
        <li>Access, correct, or delete your personal data.</li>
        <li>Export a copy of your data.</li>
        <li>Object to or restrict processing.</li>
        <li>Opt out of promotional emails.</li>
        <li>
          For California residents: additional rights under CCPA/CPRA (right to
          know, delete, optout of sale, we do not sell personal data).
        </li>
        <li className="list-none">
          To exercise rights, email{" "}
          <a
            href="mailto:support@galbi.app"
            className="text-[#480f57] underline"
          >
            support@galbi.app
          </a>
          . We will respond within statutory timelines.
        </li>
      </ul>
    ),
  },
  {
    title: "11. Children",
    content: (
      <p>
        Galbi is not directed to children under 18. We do not knowingly collect
        data from children. If we learn we have, we will delete the data and
        terminate the account.
      </p>
    ),
  },
  {
    title: "12. International Transfers",
    content: (
      <p>
        Galbi operates servers and vendors globally. Data may be processed
        outside your country. We apply appropriate safeguards (standard
        contractual clauses and vendor reviews) for cross-border transfers.
      </p>
    ),
  },
  {
    title: "13. Retention",
    content: (
      <p className="space-y-2">
        We keep personal data only as long as necessary for the purposes
        described (account maintenance, legal obligations, safety
        investigations). Verification media may be retained for up to 12 months;
        backup data may be kept for up to 90 days for disaster recovery before
        permanent deletion.
      </p>
    ),
  },
  {
    title: "14. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Updates will
        include a new effective date. For material changes, we will provide
        prominent notice and, where required, obtain consent.
      </p>
    ),
  },
  {
    title: "15. Contact & Complaints",
    content: (
      <div className="space-y-2">
        <p>
          For privacy questions, data requests, or complaints:{" "}
          <a
            href="mailto:support@galbi.app"
            className="text-[#480f57] underline"
          >
            support@galbi.app
          </a>
          .
        </p>
        <p>
          For general inquiries:{" "}
          <a
            href="mailto:contact@galbi.app"
            className="text-[#480f57] underline"
          >
            contact@galbi.app
          </a>
          .
        </p>
        <p>
          Operated by Acro North Ventures LLC, registered in Wyoming, USA.
          <br /> If you are in the EU and remain unsatisfied, you may contact
          your local data protection authority
        </p>
      </div>
    ),
  },
];

const PrivacyTermsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[80px] mx-auto text-gray-800">
      <Container className="xl:px-[140px]">
        <h1 className="font-lucida font-semibold text-black mb-6 text-[40px] lg:text-[48px]">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective date: November 1, 2025
        </p>

        <div className="flex flex-col gap-1 mb-8">
          <h2 className="font-semibold text-[22px] text-black mb-3 text-left">
            Who we are
          </h2>
          <p className="font-normal text-[15px] leading-[1.4] text-black mb-2">
            Galbi (operated by Acro North Ventures LLC, registered in the State
            of Wyoming, USA) builds a culture-first dating experience where
            dignity, heritage, and safety come first. This Privacy Policy
            explains what information we collect, why we collect it, how we use
            and share it, and the choices you have.
          </p>
          <p className="">
            If you have questions about this policy or our data practices, email
            us at{" "}
            <a
              href="mailto:contact@galbi.app"
              className="text-[#480f57] font-bold underline"
            >
              contact@galbi.app
            </a>
          </p>
        </div>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 font-semibold text-left text-lg"
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-700 leading-relaxed text-[15px]"
                  >
                    {section.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PrivacyTermsPage;
