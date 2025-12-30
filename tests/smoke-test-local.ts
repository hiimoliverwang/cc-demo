#!/usr/bin/env tsx
/**
 * Local smoke test with VISIBLE browser for demos
 * Run with: npm run smoke-test:local
 */

import { query } from '@anthropic-ai/claude-agent-sdk';

async function runSmokeTests(): Promise<number> {
  console.log('\n' + '='.repeat(60));
  console.log('RUNNING VISUAL SMOKE TEST (HEADED MODE)');
  console.log('='.repeat(60) + '\n');

  try {
    for await (const message of query({
      prompt: `Test the web app at http://localhost:5173 using the Playwright MCP tools.

Steps:
1. Navigate to http://localhost:5173
2. Take a snapshot to see the page state
3. If there's any modal or overlay, click to dismiss it
4. Find the counter button and click it 3 times
5. Verify the counter shows 3
6. Take a final snapshot

Be adaptive - handle any unexpected UI elements.`,
      options: {
        mcpServers: {
          "playwright": {
            command: "node",
            args: ["node_modules/@playwright/mcp/cli.js"]
          }
        },
        allowedTools: ['mcp__playwright__*'],
        permissionMode: 'bypassPermissions',
      },
    })) {
      if ('text' in message) {
        console.log(message.text);
      }
      if ('result' in message) {
        console.log('\n' + '='.repeat(60));
        console.log('SMOKE TEST RESULTS');
        console.log('='.repeat(60));
        console.log(message.result);
      }
    }
    return 0;
  } catch (error) {
    console.error('Smoke test failed:', error);
    return 1;
  }
}

runSmokeTests()
  .then((code) => process.exit(code))
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
