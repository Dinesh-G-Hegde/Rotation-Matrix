// Function to rotate a matrix by 90 degrees
function rotateMatrix(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row to complete the rotation
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

document.getElementById('generateMatrixButton').addEventListener('click', function () {
    const matrixSize = parseInt(document.getElementById('matrixSize').value);
    const matrixContainer = document.getElementById('matrixContainer');
    
    // Clear existing matrix input
    matrixContainer.innerHTML = '';

    // Create matrix input cells
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            const cell = document.createElement('input');
            cell.type = 'number';
            cell.className = 'cell';
            cell.placeholder = '0';
            matrixContainer.appendChild(cell);
        }
        matrixContainer.appendChild(document.createElement('br'));
    }
});

document.getElementById('rotateButton').addEventListener('click', function () {
    const matrixSize = parseInt(document.getElementById('matrixSize').value);
    const matrixContainer = document.getElementById('matrixContainer');
    const cells = matrixContainer.querySelectorAll('.cell');
    
    // Create the matrix from the input cells
    const matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        const row = [];
        for (let j = 0; j < matrixSize; j++) {
            row.push(parseInt(cells[i * matrixSize + j].value));
        }
        matrix.push(row);
    }

    const originalMatrixElement = document.getElementById('originalMatrix');
    const rotatedMatrixElement = document.getElementById('rotatedMatrix');
    const errorMessage = document.getElementById('error-message');

    // Check if it's a valid matrix (all rows have the same number of columns)
    const isValid = matrix.every(row => row.length === matrixSize);

    if (isValid) {
        errorMessage.textContent = '';
        // Display the original matrix
        originalMatrixElement.textContent = matrix.map(row => row.join(' ')).join('\n');
        // Rotate the matrix
        rotateMatrix(matrix); // Using the provided rotateMatrix function
        // Display the rotated matrix
        rotatedMatrixElement.textContent = matrix.map(row => row.join(' ')).join('\n');
    } else {
        errorMessage.textContent = 'Invalid matrix format. Please ensure all rows have the same number of columns.';
    }
});
