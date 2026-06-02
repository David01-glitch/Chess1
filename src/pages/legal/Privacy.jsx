import Seo from '../../components/Seo.jsx';
import LegalLayout from '../../components/LegalLayout.jsx';
import { site, addressLine } from '../../data/site.js';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        path="/legal/privacy"
        description="How Senior Chess Academy collects, uses, and protects your information, including analytics, cookies, and Google Consent Mode v2."
      />
      <LegalLayout
        title="Privacy Policy"
        updated="May 1, 2025"
        intro="This policy explains what information Senior Chess Academy collects, how we use it, and the choices you have. We keep it deliberately plain."
      >
        <h2>1. Who we are</h2>
        <p>
          Senior Chess Academy (“we,” “us,” or “our”) operates the website at {site.url}. We are a
          chess strategy and brain-training blog based at {addressLine}. You can reach us at{' '}
          <a href={`mailto:${site.email}`} className="text-walnut underline underline-offset-2">
            {site.email}
          </a>{' '}
          or {site.phone}. For the purposes of applicable data-protection law, we are the controller
          of the limited personal information described below.
        </p>

        <h2>2. The information we collect</h2>
        <p>
          We collect very little. The categories are: (a) information you choose to give us, such as
          your name and email address when you contact us or subscribe to our newsletter; and (b)
          limited technical and usage information collected automatically through analytics, such as
          the pages you view, your approximate region, your device type, and how you arrived at the
          site. We do not sell personal information, and we do not collect sensitive categories of
          data.
        </p>

        <h2>3. Cookies and similar technologies</h2>
        <p>
          A cookie is a small text file stored on your device. We use a small number of cookies and
          similar technologies, primarily for analytics that help us understand which guides are
          useful and how to improve them. Strictly necessary technologies that make the site function
          are always active; analytics and advertising technologies remain disabled until you consent.
        </p>

        <h2>4. Consent and Google Consent Mode v2</h2>
        <p>
          We implement Google Consent Mode v2. By default, analytics storage, ad storage, ad user
          data, and ad personalization are all set to <strong>denied</strong> when you first arrive.
          Our cookie banner lets you accept or decline. If you accept, we update consent to granted
          and your choice is remembered on your device. If you decline, these technologies remain
          disabled. You may change your mind at any time by clearing the site’s storage in your
          browser, which will cause the banner to appear again.
        </p>

        <h2>5. Analytics</h2>
        <p>
          We use Google Analytics (measurement ID {site.gaId}) to understand site usage in
          aggregate. We enable IP anonymization. Analytics data is processed by Google as our service
          provider. We use it only to improve our content and the experience of the site, never to
          identify you individually.
        </p>

        <h2>6. How we use your information</h2>
        <p>
          We use the information we collect to respond to your messages, to deliver our newsletter if
          you subscribe, to operate and secure the website, and to understand and improve which
          content serves our readers best. We process this information on the basis of your consent
          and our legitimate interest in running a useful, well-maintained website.
        </p>

        <h2>7. How we share information</h2>
        <p>
          We do not sell your personal information. We share limited information only with service
          providers who help us operate the site (such as our analytics and email providers), and only
          to the extent necessary for them to perform those services. We may also disclose information
          if required by law or to protect our rights and the safety of others.
        </p>

        <h2>8. Data retention</h2>
        <p>
          We keep contact and newsletter information only as long as necessary for the purpose it was
          provided, or until you ask us to delete it. Aggregated analytics data is retained according
          to our analytics provider’s standard retention settings.
        </p>

        <h2>9. Your rights and choices</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or limit the
          use of your personal information, and to withdraw consent. You can unsubscribe from our
          newsletter at any time using the link in each email. To exercise any right, simply contact
          us at {site.email} and we will respond promptly.
        </p>

        <h2>10. Children’s privacy</h2>
        <p>
          Our site is intended for adults, and our audience is primarily older adults. We do not
          knowingly collect personal information from children under 13. If you believe a child has
          provided us information, please contact us and we will delete it.
        </p>

        <h2>11. Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect the limited information
          we hold. No method of transmission or storage is perfectly secure, but we work to safeguard
          your information and to limit what we collect in the first place.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will revise the “last updated”
          date at the top of this page. Material changes will be highlighted on the site.
        </p>

        <h2>13. Contact us</h2>
        <p>
          If you have any question about this Privacy Policy or your information, please write to us
          at {site.email}, call {site.phone}, or send mail to {addressLine}.
        </p>
      </LegalLayout>
    </>
  );
}
