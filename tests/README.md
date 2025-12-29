# Smoke Tests

Automated smoke tests using Claude Code + Browser Automation.

## How It Works

The smoke test framework demonstrates the final step in the auto-fix workflow:

```
Fix → Push → CI passes → Smoke tests verify ✅
```

## Running Smoke Tests

```bash
npm run smoke-test
```

This will:
1. Start the Vite dev server
2. Use Claude Code with `--chrome` flag to:
   - Open the app in Chrome
   - Verify the page loads
   - Test counter functionality
   - Report results
3. Clean up and exit

## The Pattern

```bash
claude -p "Test instructions..." \
  --allowedTools "Read" "mcp__claude-in-chrome__*" \
  --chrome
```

This pattern allows Claude Code to:
- Interact with Chrome using the MCP protocol
- Perform visual verification
- Click elements and test interactivity
- Report issues found

## Demo for Talk

The smoke test shows how you close the loop:
- **Manual QA** → Replaced by Claude Code automation
- **Browser testing** → Claude verifies visually
- **Regression prevention** → Runs on every push

Part of the larger workflow demonstrating **CI as a feedback loop that Claude closes**.
