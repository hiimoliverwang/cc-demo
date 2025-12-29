#!/bin/bash
# Smoke test using Claude Code + Browser Automation

set -e

echo "🧪 Running smoke tests..."
echo ""

# Start the dev server in the background
echo "📦 Starting dev server..."
npm run dev &
DEV_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to start..."
sleep 5

# Run Claude Code to perform browser automation smoke test
echo "🤖 Running Claude Code browser automation..."
claude -p "Open Chrome to http://localhost:5173 and verify:
1. The page loads successfully
2. The counter starts at 0
3. Clicking the counter button increments it
4. Report the results

Use --chrome to interact with the browser." \
  --allowedTools "Read" "mcp__claude-in-chrome__*" \
  --chrome || true

# Cleanup
echo ""
echo "🧹 Cleaning up..."
kill $DEV_PID 2>/dev/null || true

echo "✅ Smoke tests complete!"
