# Add Lint Error

Add intentional lint errors to `src/App.tsx` to demonstrate the auto-fix workflow.

Please:
1. Read `src/App.tsx`
2. Add these lint violations:
   - Add an unused variable: `const unusedVar = 'test'`
   - Add a variable with `any` type: `const data: any = {}`
   - Add a console.log statement: `console.log('debug')`
3. Commit the changes with message: "demo: add lint errors for auto-fix demo"
4. DO NOT push yet - let me review first

This will trigger CI to fail and auto-fix to run.
