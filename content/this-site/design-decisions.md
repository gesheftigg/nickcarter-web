# nickcarter.ai — Design Decisions

Every visual decision on this site was made through interactive comparison, not abstract discussion. A browser companion showed mockups side by side, and the user selected.

## Design Direction

Three options presented:

1. **Warm Minimal** — Stone/warm gray palette. Serif headings, sans-serif body. Substack-meets-portfolio. Warm, approachable.
2. **Dark Technical** — Dark background, zinc palette. All sans-serif. Developer tool aesthetic. Risk: looks like every other AI/dev portfolio.
3. **Editorial** — White space, strong typography, magazine-like layout. Serif titles, uppercase labels, bold dividers. The New Yorker meets a tech portfolio.

**Decision: Editorial.** The restraint signals confidence. No gradients, no shadows, no color beyond black, white, and gray. The content does the work.

## Hero Style

Two editorial variants:

1. **Classic Editorial** — Quiet authority. Small uppercase label above the name. Thin rule divider. Engagement options as label/value pairs.
2. **Bold Editorial** — Name stacked large (52px). Left-border accent on the positioning line. Button-style actions with solid/light borders.

**Decision: Bold Editorial.** More visual punch. The left-border accent on the positioning line became the site's signature element.

## Card Style

Three options:

1. **Ruled** — Top rule, no box border. Clean but cards lack separation.
2. **Bordered** — Subtle border box. Contained feel. Standard.
3. **Accent Bar** — 3px solid black left-border. Same element as the hero positioning line.

**Decision: Accent Bar.** Creates visual continuity between the hero and the cards. The left-border accent is now the design's signature — it appears on the hero, artifact cards, artifact details, and blockquotes in document pages.

## Typography

- **Headings:** Georgia serif, normal weight (not bold). Large serif at normal weight looks editorial. Bold serif looks academic.
- **Body:** Inter sans-serif. Clean, readable, doesn't compete with the serif headings.
- **Labels:** Inter sans-serif, uppercase, letter-spaced (2-3px). Used for section markers, skill tags, navigation.
- **Skill tags:** Uppercase, dot-separated (CONTEXT ARCHITECTURE · DECOMPOSITION). Not pills or badges — that's startup aesthetic, not editorial.

## Color

None. Black (#111), white (#fff), and grays. The absence of color is a choice. It forces the typography and spacing to carry the design. Most AI portfolios use dark gradients and accent colors. This site's restraint is its distinction.

## Animation

All six packages selected:

1. **Scroll reveal** — Elements fade up on scroll, staggered. Without it, static sites feel dead.
2. **Hero entrance** — Sequenced mount animation. Name → positioning line → buttons. 1.5 seconds total.
3. **Accent bar draw** — Left-border animates top-to-bottom as cards enter viewport. Makes the signature element feel intentional.
4. **Hover micro-interactions** — Accent bar thickens 3→4px, content shifts 2px, arrows move, underlines draw left-to-right.
5. **Page transitions** — Content fades in on navigation. Prevents hard cuts between pages.
6. **Subtle parallax** — Hero scrolls at 95% speed. Almost imperceptible depth.

Implementation: Framer Motion, structured as client components for static export compatibility.

## The Principle

The site is itself a portfolio piece. Its design quality demonstrates what Nick brings to products. If a hiring manager sees a generic Bootstrap template, the implicit message is "I don't care about craft." If they see this — editorial typography, signature visual elements, purposeful animation, AI-readable endpoints — the implicit message is "this is the standard I hold."

The medium is the message.
