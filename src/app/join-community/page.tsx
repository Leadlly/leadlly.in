import type { Metadata } from "next";

import JoinCommunityView from "@/components/join-community/JoinCommunityView";
import { WHATSAPP_COMMUNITY_URL } from "@/helpers/constants";

export const metadata: Metadata = {
  title: "Join Community | Leadlly",
  description:
    "Join the Leadlly WhatsApp community for study tips, updates, and peer support.",
};

export default function JoinCommunityPage() {
  return (
    <>
      {/*
        Plain inline script (not next/script) so it runs the instant the
        browser parses this HTML — no waiting for hydration or JS bundles.
        This is what makes the redirect fire immediately and reliably.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(WHATSAPP_COMMUNITY_URL)});`,
        }}
      />
      <noscript>
        <meta
          httpEquiv="refresh"
          content={`0;url=${WHATSAPP_COMMUNITY_URL}`}
        />
      </noscript>
      <JoinCommunityView />
    </>
  );
}
