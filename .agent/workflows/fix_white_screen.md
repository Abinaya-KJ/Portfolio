---
description: How to fix the white screen issue by rebuilding the project
---

If you see a white screen, it likely means the frontend build is out of sync with the backend or dependencies are missing.

# Automated Fix (Recommended)

1.  Open the terminal.
2.  Run the rebuild script:
    ```bash
    .\rebuild.bat
    ```
    This will automatically install dependencies, build the project, and start the server.

# Manual Steps

If you prefer to run commands manually:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Build Frontend**:
    ```bash
    npm run build
    ```

3.  **Run Backend**:
    ```bash
    python app.py
    ```

4.  **Refresh Browser**:
    Go to `http://127.0.0.1:5000` and perform a hard refresh (Ctrl + F5).
