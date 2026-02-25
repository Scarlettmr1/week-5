# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

## Repository Overview

**Repository:** Scarlettmr1/week-5
**Branch convention:** Feature branches use the pattern `claude/<description>-<session-id>`

This repository is currently in its initial state. Update this file as the project evolves to reflect the actual stack, structure, and conventions being used.

---

## Project Structure

> Update this section once the project structure is established.

```
week-5/
├── CLAUDE.md          # This file
├── README.md          # Project documentation (create when project is defined)
└── src/               # Source code (add when project is initialized)
```

---

## Development Workflow

### Git Workflow

1. Always develop on a feature branch — never commit directly to `main` or `master`.
2. Branch naming convention: `claude/<feature-description>-<session-id>`
3. Write clear, descriptive commit messages in the imperative mood (e.g., "Add user authentication").
4. Push with tracking: `git push -u origin <branch-name>`

```bash
# Create and switch to a new branch
git checkout -b claude/<feature>-<id>

# Stage specific files (avoid `git add .` to prevent committing secrets)
git add <file1> <file2>

# Commit with a descriptive message
git commit -m "Brief description of change"

# Push with upstream tracking
git push -u origin <branch-name>
```

### Branch-Specific Development

When working as Claude on an issue, the designated branch will be specified in the task context. Always verify:

```bash
git branch           # Confirm current branch
git status           # Check staged/unstaged changes
```

---

## Coding Conventions

> Populate this section once a language and framework are chosen.

### General Principles

- Prefer clarity over cleverness.
- Keep functions small and focused (single responsibility).
- Avoid over-engineering: solve the current problem, not hypothetical future ones.
- Do not add comments unless the logic is non-obvious.
- Do not add docstrings, type annotations, or error handling beyond what is explicitly required.
- Delete unused code rather than commenting it out.

### Language-Specific Conventions

*(To be filled in once the project language is established.)*

---

## Testing

> Update this section with the actual test commands once a test framework is set up.

### Running Tests

```bash
# Example for common setups — replace with actual commands
# Python
pytest

# Node.js
npm test

# Go
go test ./...
```

### Test Conventions

- Tests live adjacent to source code or in a `tests/` directory (document the chosen pattern here).
- Write tests for new behavior; do not test implementation details.
- All tests must pass before opening a pull request.

---

## Build & Dependencies

> Update with the actual build system and dependency manager once chosen.

### Installing Dependencies

```bash
# Python
pip install -r requirements.txt

# Node.js
npm install

# Go (module deps are auto-managed)
go mod tidy
```

### Building the Project

```bash
# Replace with actual build commands
make build
```

---

## Environment Variables

- Never commit secrets, API keys, or credentials to the repository.
- Use a `.env` file locally (ensure `.env` is in `.gitignore`).
- Document required environment variables here:

| Variable | Description | Required |
|----------|-------------|----------|
| *(none yet)* | | |

---

## Key Conventions for AI Assistants

The following rules are especially important for AI assistants working in this codebase:

1. **Read before editing.** Always read a file before modifying it.
2. **Minimal changes.** Only change what is necessary to accomplish the task. Do not refactor surrounding code, add extra comments, or improve style unless explicitly asked.
3. **No new files unless required.** Prefer editing existing files. Never create documentation files (READMEs, changelogs) unless explicitly requested.
4. **No secrets.** Never commit `.env` files, API keys, tokens, or credentials.
5. **Verify branch.** Before committing, confirm you are on the correct feature branch.
6. **Test before pushing.** Run the test suite (once established) and ensure all tests pass before pushing.
7. **Descriptive commits.** Write commit messages that explain *why* a change was made, not just *what* changed.
8. **Security.** Avoid introducing OWASP Top 10 vulnerabilities (SQL injection, XSS, command injection, etc.).

---

## Common Commands Reference

```bash
# Check working tree status
git status

# View recent commits
git log --oneline -10

# Fetch latest from remote
git fetch origin

# Push current branch
git push -u origin $(git branch --show-current)
```

---

## Updating This File

This CLAUDE.md should be updated whenever:
- A new language, framework, or tool is added to the project.
- New conventions or patterns are established.
- The directory structure changes significantly.
- New required environment variables are added.

Keep this file accurate and concise — it is the primary reference for any AI assistant working in this repository.
