# Break Smoke Test

Break the counter functionality to demonstrate smoke test failures.

Please:
1. Read `src/App.tsx`
2. Find the counter button click handler
3. Break it by either:
   - Commenting out the `setCount` call
   - OR changing it to not increment (e.g., `setCount(0)`)
4. Commit the changes with message: "demo: break counter for smoke test demo"
5. DO NOT push yet - let me review first

This will cause the smoke tests to fail because the counter won't increment from 0 to 1.
