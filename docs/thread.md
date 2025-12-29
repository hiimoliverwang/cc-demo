## Summary: Claude Code Meetup Taipei Talk Prep

### The Event

- **What**: Claude Code Meetup in Taipei
- **When**: Tomorrow
- **Duration**: ~60 minutes
- **Attendees**: 411 registrants

### Audience Breakdown

|Segment           |%  |
|------------------|---|
|Daily users       |34%|
|Regular users     |22%|
|New but interested|23%|
|Occasional        |12%|

Heavy presence of software engineers (~150), founders/CTOs (~60), students (~35), and PMs (~30). Companies include Google, Microsoft, ASUS, ViewSonic, PicCollage, iCHEF, Zeabur, AppWorks, and many startups.

**Top requested topics**: Skills (50+), Agents/Sub-agents (~30), MCP (~15), Vibe coding (~12), Plan mode (~10), Hooks (~8)

-----

### Your Unique Angle

Your personal workflow that **nobody else is talking about**:

```
Multi-clauding (parallel CC instances in worktrees)
       ↓
Shared memory trick (/add-dir external folder)
       ↓
YOLO push (let CI be the gatekeeper)
       ↓
GHA catches lint errors
       ↓
Claude Code fixes them automatically
       ↓
Smoke tests (internal framework: CC + browser)
```

Key insight: **CI isn’t a gate that blocks you, it’s a feedback loop that Claude closes.**

-----

### What We Decided

1. **Your workflow is the star** - It’s unique, nobody’s covering it
1. **Skills: Light touch** - They don’t directly relate to your workflow. Mention briefly as “where this could go” or skip entirely. Your CI instructions live in GHA YAML, not Skills.
1. **Chrome extension: Optional** - It’s public now (beta for all paid plans), but tangential to your main story. Could compress to 3-5 min or cut.
1. **Playwright MCP Bridge vs Claude Chrome Ext** - Too in-the-weeds for the talk. Both let Claude control a browser with your logged-in state. Different implementations, same outcome.
1. **Memory in Claude Code** - Public features are CLAUDE.md, `.claude/rules/`, `/memory` command. No automatic cross-session memory yet (people call it “a goldfish”). Your `/add-dir` shared folder trick is a clever workaround worth mentioning as a quick tip.
1. **Multi-clauding** - Already out there (Jesse Vincent talks about it), but your shared memory trick adds a fresh angle.

-----

### Recommended Talk Structure (60 min)

|Time |Section                                 |Notes                                           |
|-----|----------------------------------------|------------------------------------------------|
|0-5  |**Cold open**: Demo full loop end-to-end|“Holy shit” moment                              |
|5-15 |CC basics for newcomers                 |Bring everyone along                            |
|15-20|Quick tip: shared memory with `/add-dir`|Your worktree trick                             |
|20-45|**Your workflow deep dive**             |Multi-claude → YOLO → GHA → CC fix → Smoke tests|
|45-50|“Where this could go”                   |Skills, more automation, etc.                   |
|50-60|Q&A                                     |                                                |

-----

### Key Framing

- **For advanced users**: “Here’s a workflow you haven’t seen”
- **For new users**: “Here’s what you’re building toward” (cooking show principle - they watch Gordon Ramsay, not to learn boiling water, but to see what’s possible)
- **The philosophy**: CI as feedback loop, not gatekeeper

-----

### Resources Researched

**Skills**:

- Official: anthropics/skills repo, [code.claude.com/docs/en/skills](http://code.claude.com/docs/en/skills)
- Community: obra/superpowers (best workflow system), travisvn/awesome-claude-skills
- Pattern: Sionic AI’s `/retrospective` for team knowledge capture

**Chrome Extension**:

- Public beta for all paid plans (Dec 2025)
- `claude --chrome` or `/chrome` command
- Requires extension v1.0.36+, CC v2.0.73+
- Chrome only (not Brave/Arc yet)

**Memory**:

- CLAUDE.md, `.claude/rules/`, `/memory` command are public
- API memory tool in beta
- Cross-session memory exists in [Claude.ai](http://Claude.ai) (Team/Enterprise) but not synced to CC yet

-----

### Open Questions for New Thread

1. Walk through the actual GHA YAML / how CC gets triggered on failure
1. Details on the smoke test framework
1. Any live demo prep needed​​​​​​​​​​​​​​​​