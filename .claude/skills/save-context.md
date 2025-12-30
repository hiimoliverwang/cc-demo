# Save Context

Save your current work context to shared memory before switching tasks.

**Use case:** You're deep in work, get interrupted, need to switch worktrees/tasks without losing context.

**Steps:**
1. Ask user for a context name (e.g., "auth-feature", "api-refactor")
2. Gather current context:
   - What feature/task are you working on?
   - What have you discovered/learned?
   - What are the current blockers?
   - What are the next steps?
3. Save to shared memory:
   ```
   /Users/oliverwang/code/cc-demo-shared/CONTEXT-{name}.md
   ```
4. Format:
   ```markdown
   # Context: {name}
   Saved: {timestamp}
   Worktree: {current worktree}

   ## What I'm Working On
   [Summary of current task]

   ## Discoveries & Learnings
   - [Key insights]
   - [Important decisions made]

   ## Current Blockers
   - [What's blocking progress]

   ## Next Steps
   1. [What to do next]
   2. [And after that]

   ## Files Changed
   - [List of modified files]

   ## Relevant Code Snippets
   [Any important code context]
   ```

**Example:**
```
User: "/save-context"
You: "What should I name this context?"
User: "auth-feature"
You: Save comprehensive context to CONTEXT-auth-feature.md
You: "Context saved! You can resume with /load-context"
```

**This enables:**
- Switching tasks without losing context
- Coming back days later and knowing exactly where you were
- Handing off work to another developer
- Multiple Claude instances coordinating
