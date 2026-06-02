import Seo from '../../components/Seo.jsx';
import LegalLayout from '../../components/LegalLayout.jsx';
import { site, addressLine } from '../../data/site.js';

export default function Refund() {
  return (
    <>
      <Seo
        title="Refund Policy"
        path="/legal/refund"
        description="Senior Chess Academy's fair and straightforward refund policy for optional paid learning materials, including our 30-day guarantee."
      />
      <LegalLayout
        title="Refund Policy"
        updated="May 1, 2025"
        intro="Our core library is free. For any optional paid materials, this policy explains how refunds work — plainly and fairly."
      >
        <h2>1. Free content</h2>
        <p>
          The vast majority of Senior Chess Academy is, and will remain, free to read. Articles,
          guides, puzzles, and our newsletter cost nothing. This Refund Policy applies only to the
          occasional optional paid learning materials we may offer.
        </p>

        <h2>2. Our 30-day satisfaction guarantee</h2>
        <p>
          If you purchase a paid product from us and are not satisfied, you may request a full refund
          within 30 days of your purchase. We want our materials to genuinely help you improve and
          enjoy the game; if they do not, you should not pay for them.
        </p>

        <h2>3. How to request a refund</h2>
        <p>
          To request a refund, simply email us at{' '}
          <a href={`mailto:${site.email}`} className="text-walnut underline underline-offset-2">
            {site.email}
          </a>{' '}
          with the email address used for the purchase and, if possible, your order reference. You do
          not need to give a detailed reason, though we always welcome feedback that helps us improve.
        </p>

        <h2>4. How refunds are processed</h2>
        <p>
          Approved refunds are issued to the original payment method. Once approved, please allow 5–10
          business days for the credit to appear, depending on your bank or card issuer. We do not
          charge any processing fee for a refund.
        </p>

        <h2>5. Exceptions</h2>
        <p>
          Refunds may not be available where required by the nature of a specific product (for
          example, a live event seat after the event has taken place), where there is evidence of
          clear abuse of this policy, or where prohibited by law. Any such exception will be stated
          clearly at the point of purchase.
        </p>

        <h2>6. Subscription cancellations</h2>
        <p>
          If we offer a recurring subscription, you may cancel at any time, and the cancellation takes
          effect at the end of your current billing period. You will retain access until then and will
          not be charged again. We do not provide prorated refunds for partial periods unless required
          by law.
        </p>

        <h2>7. Pricing and currency</h2>
        <p>
          All prices for paid materials are shown clearly before purchase. Refunds are issued in the
          same currency as the original transaction.
        </p>

        <h2>8. Contact us</h2>
        <p>
          If you have any question about this Refund Policy, contact us at {site.email}, by phone at{' '}
          {site.phone}, or by mail at {addressLine}. We respond to refund requests on weekdays,
          usually within two business days.
        </p>
      </LegalLayout>
    </>
  );
}
