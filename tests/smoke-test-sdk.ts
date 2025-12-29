#!/usr/bin/env tsx
/**
 * Smoke tests using Claude Agent SDK
 * The SDK handles the agentic loop and tool execution automatically
 */

import { query } from '@anthropic-ai/claude-agent-sdk';

async function runSmokeTests(): Promise<number> {
  console.log('\n' + '='.repeat(60));
  console.log('RUNNING SMOKE TESTS WITH CLAUDE AGENT SDK');
  console.log('='.repeat(60) + '\n');

  try {
    for await (const message of query({
      prompt: `I need you to test a web application using Playwright.

The app is running at http://localhost:5174

Please:
1. Install Playwright if needed (npx playwright install chromium)
2. Create a test-results directory in the CURRENT WORKING DIRECTORY (use mkdir -p test-results)
3. Write and run a Playwright script that:
   - Navigates to http://localhost:5174
   - Verifies the page loads with "Vite + React" visible
   - Finds the counter button (should show "count is 0")
   - Clicks the button
   - Verifies the count incremented to 1
   - Take screenshots using RELATIVE paths: './test-results/before.png' and './test-results/after.png'
   - Save at least one screenshot as test-results/smoke-test-final.png

IMPORTANT: Use relative paths starting with ./ for all screenshot saves, NOT /tmp paths.
Use headless Chromium. Report all results clearly.`,
      options: {
        allowedTools: ['Bash'],
        permissionMode: 'bypassPermissions', // Auto-approve all tools
      },
    })) {
      // Print all messages as they come
      if ('text' in message) {
        console.log(message.text);
      }

      // Print the final result
      if ('result' in message) {
        console.log('\n' + '='.repeat(60));
        console.log('SMOKE TEST RESULTS');
        console.log('='.repeat(60));
        console.log(message.result);
        console.log('='.repeat(60) + '\n');
      }
    }

    return 0;
  } catch (error) {
    console.error('❌ Smoke test failed:', error);
    return 1;
  }
}

// Run the tests
runSmokeTests()
  .then((code) => process.exit(code))
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
