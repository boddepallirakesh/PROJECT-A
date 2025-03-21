#!/bin/bash

# Define the files to check
FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.php$')

# Exit if no PHP files are staged
if [[ -z "$FILES" ]]; then
    exit 0
fi

echo "Running PHP CodeSniffer..."

# Run PHP CodeSniffer on each staged PHP file
ERRORS=0
for FILE in $FILES; do
    phpcs --standard=PSR12 "$FILE"
    if [[ $? -ne 0 ]]; then
        ERRORS=1
    fi
done

# If there are errors, prevent commit
if [[ $ERRORS -ne 0 ]]; then
    echo "Code Sniffing failed. Fix the issues before committing."
    exit 1
fi

echo "Code Sniffing passed!"
exit 0
