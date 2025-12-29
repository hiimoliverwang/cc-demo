# Cleanup Worktree

Remove a completed worktree and update shared status.

**Steps:**
1. List current worktrees:
   ```bash
   git worktree list
   ```
2. Ask user which worktree to remove
3. Remove the worktree:
   ```bash
   git worktree remove ../cc-demo-feature-{name}
   ```
4. Update shared STATUS.md to mark it as completed/removed
5. Confirm cleanup

**Safety:**
- Show worktree status before removing
- Warn if there are uncommitted changes
- Ask for confirmation before deletion

**Example:**
User: `/cleanup-worktree`
You show: Available worktrees
User picks: "feature-auth"
You remove: `../cc-demo-feature-auth` and update status
