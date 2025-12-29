# New Worktree with Shared Memory

Create a new git worktree and configure it to use the shared memory folder.

**Steps:**
1. Ask the user for the feature name (e.g., "auth", "ui", "api")
2. Create the worktree:
   ```bash
   git worktree add ../cc-demo-feature-{name}
   ```
3. Copy the `.claude` settings to the new worktree:
   ```bash
   cp -r .claude ../cc-demo-feature-{name}/
   ```
4. Update the shared STATUS.md to register this new worktree:
   ```bash
   # Add a new section to /Users/oliverwang/code/cc-demo-shared/STATUS.md
   ```
5. Confirm the setup:
   ```bash
   git worktree list
   ```

**Example:**
User: `/new-worktree`
You ask: "What feature are you working on?"
User: "auth"
You create: `../cc-demo-feature-auth` with shared memory configured

**What this enables:**
- Quick parallel development setup
- Automatic shared memory configuration
- No manual copying of settings
- Coordinated status tracking
