import { chromium } from 'playwright';

(async () => {
  console.log('Starting Playwright test...\n');

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Test 1: Navigate to the application
    console.log('📍 Test 1: Navigating to http://localhost:5174');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
    console.log('✅ Page loaded successfully\n');

    // Test 2: Verify "Vite + React" is visible
    console.log('📍 Test 2: Checking for "Vite + React" text');
    const viteReactText = await page.locator('text=Vite + React').isVisible();
    if (viteReactText) {
      console.log('✅ "Vite + React" text is visible on the page\n');
    } else {
      throw new Error('❌ "Vite + React" text not found on the page');
    }

    // Test 3: Find the counter button with initial count
    console.log('📍 Test 3: Finding counter button with "count is 0"');
    const counterButton = page.locator('button', { hasText: 'count is' });
    const initialButtonText = await counterButton.textContent();
    console.log(`   Initial button text: "${initialButtonText.trim()}"`);

    if (initialButtonText.includes('count is 0')) {
      console.log('✅ Counter button found with initial count of 0\n');
    } else {
      throw new Error(`❌ Expected "count is 0" but found "${initialButtonText.trim()}"`);
    }

    // Test 4: Click the button
    console.log('📍 Test 4: Clicking the counter button');
    await counterButton.click();
    console.log('✅ Button clicked successfully\n');

    // Test 5: Verify count incremented to 1
    console.log('📍 Test 5: Verifying count incremented to 1');
    await page.waitForTimeout(500); // Small delay to ensure state update
    const updatedButtonText = await counterButton.textContent();
    console.log(`   Updated button text: "${updatedButtonText.trim()}"`);

    if (updatedButtonText.includes('count is 1')) {
      console.log('✅ Counter successfully incremented to 1\n');
    } else {
      throw new Error(`❌ Expected "count is 1" but found "${updatedButtonText.trim()}"`);
    }

    // Summary
    console.log('═══════════════════════════════════════');
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
    console.log('═══════════════════════════════════════');
    console.log('Test Summary:');
    console.log('  ✅ Page navigation');
    console.log('  ✅ "Vite + React" text verification');
    console.log('  ✅ Counter button found (initial: 0)');
    console.log('  ✅ Button click interaction');
    console.log('  ✅ Counter increment verification (final: 1)');
    console.log('═══════════════════════════════════════\n');

  } catch (error) {
    console.error('\n❌ TEST FAILED:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
