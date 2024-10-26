const allModules = [
    { name: 'Register Page', duration: 4, amount: 450 },
    { name: 'Login Page', duration: 3, amount: 300 },
    { name: 'Home Page', duration: 6, amount: 500 },
    { name: 'About us Page', duration: 4, amount: 400 },
    { name: 'Service Page', duration: 3, amount: 250 },
    { name: 'Contact Page', duration: 2, amount: 350 },
    { name: 'Careers Page', duration: 3, amount: 340 }
];

// Mapping selected modules for each technology
const modulesData = {
    'Python': ['Register Page', 'Login Page', 'About us Page'],
    'React.js': ['Register Page', 'Home Page', 'Contact Page'],
    'PHP': ['Service Page', 'Careers Page', 'Login Page'],
    'JavaScript': ['Home Page', 'About us Page', 'Contact Page']
};

// Show all modules with checkboxes for selection
function showModules(technology) {
    document.getElementById('selectedTech').innerText = technology;
    const selectedModules = modulesData[technology];
    let totalDuration = 0;
    let totalAmount = 0;
    let moduleListHtml = `<table>
        <tr>
            <th>Select</th>
            <th>Module Name</th>
            <th>Duration</th>
            <th>Amount</th>
        </tr>`;

    allModules.forEach(module => {
        const isSelected = selectedModules.includes(module.name);
        moduleListHtml += `
            <tr>
                <td><input type="checkbox" class="module-checkbox" 
                    data-duration="${module.duration}" 
                    data-amount="${module.amount}" 
                    ${isSelected ? 'checked' : ''} 
                    onchange="updateTotal(this)"
                ></td>
                <td>${module.name}</td>
                <td>${module.duration} hrs</td>
                <td>₹ ${module.amount}</td>
            </tr>`;
        if (isSelected) {
            totalDuration += module.duration;
            totalAmount += module.amount;
        }
    });

    moduleListHtml += '</table>';
    document.getElementById('moduleList').innerHTML = moduleListHtml;
    document.getElementById('totalDuration').innerText = totalDuration + ' hrs';
    document.getElementById('totalAmount').innerText = totalAmount;
    document.getElementById('summaryDuration').innerText = totalDuration + ' hrs';
    document.getElementById('summaryAmount').innerText = totalAmount;
}

// Update totals when a module checkbox is checked/unchecked
function updateTotal(checkbox) {
    const duration = parseInt(checkbox.getAttribute('data-duration'));
    const amount = parseInt(checkbox.getAttribute('data-amount'));

    let totalDuration = parseInt(document.getElementById('totalDuration').innerText);
    let totalAmount = parseInt(document.getElementById('totalAmount').innerText);

    if (checkbox.checked) {
        totalDuration += duration;
        totalAmount += amount;
    } else {
        totalDuration -= duration;
        totalAmount -= amount;
    }

    document.getElementById('totalDuration').innerText = totalDuration + ' hrs';
    document.getElementById('totalAmount').innerText = totalAmount;
    document.getElementById('summaryDuration').innerText = totalDuration + ' hrs';
    document.getElementById('summaryAmount').innerText = totalAmount;
}

// Update selected database
document.querySelectorAll('input[name="database"]').forEach((input) => {
    input.addEventListener('change', (event) => {
        document.getElementById('selectedDatabase').innerText = event.target.value;
    });
});
