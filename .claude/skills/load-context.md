# Load Context

Load previously saved work context from shared memory.

**Use case:** Resume work after interruption, or pick up where another Claude instance left off.

**Steps:**
1. List available contexts in shared memory:
   ```bash
   ls /Users/oliverwang/code/cc-demo-shared/CONTEXT-*.md
   ```
2. Show user available contexts with timestamps
3. Ask which context to load
4. Read the context file
5. Summarize for user:
   - What was being worked on
   - Key discoveries
   - Current blockers
   - Suggested next steps
6. Ask: "Ready to continue? What would you like to do first?"

**Example:**
```
User: "/load-context"
You:
  Available contexts:
  - auth-feature (saved 2 hours ago)
  - api-refactor (saved yesterday)

User: "auth-feature"
You: Read CONTEXT-auth-feature.md
You:
  "You were implementing JWT authentication.

   Discoveries:
   - bcrypt is better than plain hash for passwords
   - Need to add refresh token logic

   Blockers:
   - Waiting on API spec from backend team

   Next steps:
   1. Implement token refresh endpoint
   2. Add middleware for protected routes

   Ready to continue? I can help with the token refresh endpoint."
```

**Advanced:**
- Suggest related files to read based on context
- Check if any blockers have been resolved
- Compare current branch state with saved context
- Warn if files mentioned in context have changed

**This enables:**
- Zero ramp-up time when resuming work
- Seamless handoffs between developers
- Context continuity across days/weeks
