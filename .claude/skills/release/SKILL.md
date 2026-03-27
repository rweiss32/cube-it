---
name: release
description: Bump version, write changelog entry, and commit. Usage: /release <type> <description>  where type is fix | feat | chore
argument-hint: "[fix|feat|chore] [description]"
allowed-tools: Read, Edit, Bash
---

# Release

Create a release commit for this project using the arguments: $ARGUMENTS

The first word is the release TYPE (`fix`, `feat`, or `chore`). Everything after is the DESCRIPTION.

## Versioning rules
- `feat` → bump middle number, reset patch to 0 (e.g. 0.22.1 → 0.23.0). Use when the change is user-facing.
- `fix` → bump patch number (e.g. 0.22.1 → 0.22.2). Use when it is a bug fix visible to the user.
- `chore` → bump patch number (e.g. 0.22.1 → 0.22.2). Use when it is tooling/internal with no user-facing effect.
- Major version (first number) is NEVER bumped automatically — manual only.

## Steps

1. Read the current version from `index.html` (search for `const VERSION = '...'`).
2. Compute the new version according to the rules above.
3. Update `const VERSION = '...'` in `index.html`.
4. Update `const CACHE = 'cubeit-v...'` in `sw.js` to match.
5. Prepend a new entry to `CHANGELOG.md` (after the `---` separator line, before the previous top entry):
   ```
   ## [NEW_VERSION] !`date +%Y-%m-%d` — DESCRIPTION

   - SUMMARY_OF_CHANGES (1-3 bullet points derived from staged git diff or recent commits)
   ```
6. Stage only `index.html`, `sw.js`, and `CHANGELOG.md` (do NOT stage other unstaged files).
7. Commit with message: `TYPE: DESCRIPTION (vNEW_VERSION)` + Co-Authored-By trailer.
8. DO NOT push. DO NOT push to master. Just commit. Tell the user the version and remind them to push when ready.

## Current state
- Branch: !`git branch --show-current`
- Last commit: !`git log -1 --oneline`
- Staged files: !`git diff --cached --name-only`
- Unstaged changes: !`git diff --name-only`
