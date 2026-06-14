## Goal
Replace the TODO placeholders in `src/components/LinkedInCarousel.tsx` with the three real LinkedIn post embeds you provided.

## What will change
1. Update the `embeds` array to contain three entries:
   - Post 1: `https://www.linkedin.com/embed/feed/update/urn:li:share:7449980920432062464?collapsed=1` with `height: 262`
   - Post 2: `https://www.linkedin.com/embed/feed/update/urn:li:share:7428106659475980288?collapsed=1` with `height: 668`
   - Post 3: `https://www.linkedin.com/embed/feed/update/urn:li:share:7436871899453927424?collapsed=1` with `height: 634`
2. Remove the TODO comments and empty-state fallback (`embeds.length === 0` branch) since real embeds will now be present.
3. Keep the marquee animation, duplicated list for seamless loop, hover-to-pause, and all existing styling intact.

No new dependencies, no backend changes, no other files touched.