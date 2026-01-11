To push your website skeleton and create your first official release tag, run these commands in your terminal from inside the `bahyway-website` folder.

### 1. Initialize and Commit
First, we turn the folder into a Git repository and save the skeleton structure.

```powershell
# Initialize git
git init

# Add all the new folders and files
git add .

# Create the initial commit
git commit -m "Initial website skeleton structure for BahyWay.Website"

# Ensure the main branch is named 'main'
git branch -M main
```

### 2. Connect to GitHub
Go to your GitHub account and create a **new private repository** named `bahyway-website` (do not initialize it with a README or License there, as we already have them). Then run:

```powershell
# Replace [ORG_OR_USER] with your GitHub name (e.g., BahyWay-Ecosystem)
git remote add origin https://github.com/BahyWay-Ecosystem/bahyway-website.git

# Push the code to the main branch
git push -u origin main
```

### 3. Create and Push the Tag `v1.0.0`
Now that the code is on GitHub, we "stamp" it as the first version.

```powershell
# Create the tag locally
git tag v1.0.0

# Push the tag to GitHub
git push origin v1.0.0
```

---

### Why this is a good start:
1.  **Safety:** By pushing now, your structure is backed up.
2.  **Tracking:** If you make a mistake later while adding React/Three.js code, you can always revert back to this "clean" state using `git checkout v1.0.0`.
3.  **Organization:** GitHub will now show a **"Release"** on the right side of your project page marked `v1.0.0`.

**Note:** Since you have a `package.json` in your structure, your next step after this should be running `npm install` (once you fill the package.json with dependencies) to get your `node_modules`.
