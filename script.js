window.onload = () => {
        loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/' }).then((pyodide) => {
            document.getElementById('generate').addEventListener('click', () => {
                fetch('PassGen.py')
                    .then(response => response.text())
                    .then(pythonScript => {
                        pyodide.runPython(pythonScript);
                        const password = pyodide.globals.get('passwd');
                        document.getElementById('password').textContent = 'Generated Password: ' + password;
                    })
                    .catch(error => {
                        console.error('Failed to load Python script:', error);
                        document.getElementById('console').textContent = 'Failed to load Python script: ' + error;
                    });
            });
        });
    };