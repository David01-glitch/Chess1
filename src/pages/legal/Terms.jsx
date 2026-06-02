import Seo from '../../components/Seo.jsx';
import LegalLayout from '../../components/LegalLayout.jsx';
import { site, addressLine } from '../../data/site.js';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        path="/legal/terms"
        description="The terms governing your use of the Senior Chess Academy website, content, newsletter, and any paid learning materials."
      />
      <LegalLayout
        title="Terms of Service"
        updated="May 1, 2025"
        intro="These terms govern your use of the Senior Chess Academy website and services. By using the site, you agree to them."
      >
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing or using {site.url} (the “Site”), you agree to be bound by these Terms of
          Service and our Privacy Policy. If you do not agree, please do not use the Site. These terms
          apply to all visitors, readers, and subscribers.
        </p>

        <h2>2. About our services</h2>
        <p>
          Senior Chess Academy provides educational articles, guides, puzzles, and a newsletter
          focused on chess strategy and cognitive wellness for adults. Most content is provided free
          of charge. We may from time to time offer optional paid learning materials, which are
          governed by these terms and our Refund Policy.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          The Site is intended for adults. By using it you represent that you are at least 18 years of
          age, or that you are using the Site under the supervision of a parent or guardian who agrees
          to these terms.
        </p>

        <h2>4. Educational purpose and no professional advice</h2>
        <p>
          Our content is provided for general educational and informational purposes. While we
          discuss the cognitive benefits of chess, nothing on the Site is medical advice, and we make
          no medical claims. Always consult a qualified professional regarding your health. Reliance
          on any information on the Site is at your own discretion.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          All content on the Site — including articles, guides, images, logos, and the overall design
          — is owned by Senior Chess Academy or its licensors and is protected by intellectual
          property laws. We grant you a limited, personal, non-exclusive, non-transferable license to
          access and read the content for your own non-commercial use.
        </p>

        <h2>6. Permitted and prohibited use</h2>
        <p>
          You may read, print, and share links to our content for personal, non-commercial purposes.
          You may not copy, republish, sell, or distribute our content at scale; scrape the Site by
          automated means without permission; misrepresent your affiliation with us; or use the Site
          in any unlawful manner or in a way that could damage or impair it.
        </p>

        <h2>7. User submissions</h2>
        <p>
          If you send us messages, story submissions, or feedback, you grant us a non-exclusive,
          royalty-free right to use that material to operate and improve the Site and, where you have
          given permission, to feature community stories. Please do not send confidential information
          you do not wish us to use for these purposes.
        </p>

        <h2>8. Newsletter and communications</h2>
        <p>
          If you subscribe to our newsletter, you consent to receive periodic emails from us. You may
          unsubscribe at any time using the link in each email. We will never sell your email address.
        </p>

        <h2>9. Paid materials and payment</h2>
        <p>
          Any optional paid materials we offer will be clearly described, with prices shown before
          purchase. Payment is processed by reputable third-party payment processors; we do not store
          your full payment-card details. Purchases are subject to our Refund Policy.
        </p>

        <h2>10. Third-party links and services</h2>
        <p>
          The Site may contain links to third-party websites or use third-party services such as
          analytics. We are not responsible for the content or practices of third parties, and your
          use of their services is governed by their own terms and policies.
        </p>

        <h2>11. Disclaimer of warranties</h2>
        <p>
          The Site and its content are provided “as is” and “as available,” without warranties of any
          kind, whether express or implied, including fitness for a particular purpose and
          non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free
          of harmful components.
        </p>

        <h2>12. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Senior Chess Academy and its team will not be liable
          for any indirect, incidental, special, consequential, or punitive damages arising from your
          use of, or inability to use, the Site or its content. Our total liability for any claim
          relating to the Site will not exceed the amount you paid us, if any, in the twelve months
          before the claim arose.
        </p>

        <h2>13. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Senior Chess Academy from any claims, damages, or
          expenses arising out of your misuse of the Site or your violation of these terms.
        </p>

        <h2>14. Changes to the Site and terms</h2>
        <p>
          We may modify or discontinue parts of the Site at any time, and we may update these terms
          from time to time. The “last updated” date reflects the current version. Continued use of
          the Site after changes constitutes acceptance of the revised terms.
        </p>

        <h2>15. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Ohio, United States, without regard to
          its conflict-of-laws principles. Any disputes will be subject to the courts located in
          Franklin County, Ohio.
        </p>

        <h2>16. Contact us</h2>
        <p>
          Questions about these terms may be sent to {site.email}, by phone to {site.phone}, or by
          mail to {addressLine}.
        </p>
      </LegalLayout>
    </>
  );
}
