# Deploy to GitHub Pages - Command Line Method

## Prerequisites
- Git installed on your computer
- GitHub account

## Steps:

1. Initialize git repository in your project folder:
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit files:
```bash
git commit -m "Initial commit - Bae's Timetable"
```

4. Create repository on GitHub (via web interface)

5. Add remote origin:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
```

6. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

7. Enable GitHub Pages in repository settings

## Your site will be live at:
https://yourusername.github.io/your-repo-name