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

document.getElementById('rotateButton').addEventListener('click', function () {
    const input = document.getElementById('matrixInput').value;
    const originalMatrixElement = document.getElementById('originalMatrix');
    const rotatedMatrixElement = document.getElementById('rotatedMatrix');
    const errorMessage = document.getElementById('error-message');

    // Split the input into rows
    const rows = input.trim().split(';');
    const matrix = rows.map(row => row.trim().split(' ').map(Number));

    // Check if it's a valid matrix (all rows have the same number of columns)
    const isValid = matrix.every(row => row.length === matrix[0].length);

    if (isValid) {
        errorMessage.textContent = '';
        // Display the original matrix
        originalMatrixElement.textContent = matrix.map(row => row.join(' ')).join('\n');
        // Rotate the matrix
        rotateMatrix(matrix);
        // Display the rotated matrix
        rotatedMatrixElement.textContent = matrix.map(row => row.join(' ')).join('\n');
    } else {
        errorMessage.textContent = 'Invalid matrix format. Please use semicolons to separate rows and spaces to separate values.';
    }
});
