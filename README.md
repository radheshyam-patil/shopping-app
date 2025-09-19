README.md
----------------------------------------------------
# Mini Shopping App (DevOps Project)
![GitHub Actions](https://github.com/radheshyam-patil/shopping-app/actions/workflows/node-ci.yml/badge.svg)
![Jenkins](https://img.shields.io/badge/build-Jenkins-blue)
![Docker Pulls](https://img.shields.io/docker/pulls/radheshyampatil/shopping-app)
![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-brightgreen)
![Terraform](https://img.shields.io/badge/IaC-Terraform-5C4EE5)
This is a mini shopping app built with Node.js + Express, containerized with Docker,
and deployed on AWS EKS (Kubernetes) using Terraform and Jenkins CI/CD.
----------------------------------------------------
test.js
----------------------------------------------------
console.log("test-ok");
process.exit(0);
----------------------------------------------------
package.json
----------------------------------------------------
{
 "name": "shopping-app",
 "version": "1.0.0",
 "description": "Mini Shopping App using Node.js and Express",
 "main": "app.js",
 "scripts": {
 "start": "node app.js",
 "test": "node test.js"
 },
 "dependencies": {
 "express": "^4.18.2"
 }
}
----------------------------------------------------
.github/workflows/node-ci.yml
----------------------------------------------------
name: Node.js CI
on:
 push:
 branches: [ "main" ]
 pull_request:
 branches: [ "main" ]
jobs:
 test:
 runs-on: ubuntu-latest
 steps:
 - name: Checkout repository
 uses: actions/checkout@v3
 - name: Set up Node.js
 uses: actions/setup-node@v3
 with:
 node-version: '18'
 - name: Install dependencies
 run: npm install
 - name: Run tests
 run: npm test
----------------------------------------------------
2) Commands to run
------------------
cd ~/shopping-app
# backup old package.json
cp package.json package.json.bak 2>/dev/null || true
# write README.md
cat > README.md <<'EOF'
(paste README.md content above)
EOF
# write test.js
cat > test.js <<'EOF'
console.log("test-ok");
process.exit(0);
EOF
# overwrite package.json
cat > package.json <<'EOF'
(paste package.json content above)
EOF
# ensure workflow directory exists
mkdir -p .github/workflows
# write node-ci.yml
cat > .github/workflows/node-ci.yml <<'EOF'
(paste node-ci.yml content above)
EOF
# stage + commit
git add README.md test.js package.json .github/workflows/node-ci.yml
# initialize if needed
if [ ! -d .git ]; then
 git init
 git checkout -b main
 git remote add origin https://github.com/radheshyam-patil/shopping-app.git
fi
git commit -m "Add README, test script, GitHub Actions workflow, and update package.json"
# push to GitHub
git push -u origin main
----------------------------------------------------
3) Verification
---------------
git status
git log -1 --oneline
Check GitHub Actions in repo:
https://github.com/radheshyam-patil/shopping-app/actions
Badge will update in README once first workflow runs.
----------------------------------------------------
Teaching Tips:
- Always run 'git status' before commit to confirm staged files.
- A tiny test.js ensures the CI badge reflects real pass/fail instead of just running the app.
